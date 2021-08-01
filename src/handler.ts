import "./index.css";

interface SelectionForElementNode {
  startNode?: any;
  endNode?: any;
  startOffset?: number;
  endOffset?: number;
}

export default async function (commandKey: number, className: string) {
  const textNodeName = "#text";
  const spanNodeName = "SPAN";
  const rootElementId = "root";
  const textElem = document.getElementById(rootElementId);
  textElem.addEventListener("keydown", function (event) {
    // Command key field "metaKey" for mac
    console.log("event.keyCode", event.keyCode);
    if (event.keyCode === commandKey && event.metaKey) {
      event.preventDefault();
      const { selection } = getSelectionAndRage();
      if (selection.isCollapsed) {
        return;
      }
      updateBold();
    }
  });

  document.onselectionchange = function () {
    const { selection, range } = getSelectionAndRage();
    if (selection.isCollapsed) {
      return;
    }
    console.log(selection, range);
    // TODO
  };
  function updateBold() {
    const { selection, range } = getSelectionAndRage();
    const textAncestor = checkTextAncestor(range);
    if (textAncestor) {
      const node = updateBoldForTextNode(selection, range);
      node && resetSelectionForTextNode(node);
    } else {
      const { startNode, endNode, startOffset, endOffset } =
        updateBoldForElementNode(selection, range) || {};
      if (startNode && endNode) {
        resetSelectionForElementNode(
          startNode,
          endNode,
          startOffset,
          endOffset
        );
      }
    }
  }
  function updateBoldForTextNode(
    selection: Selection,
    range: Range
  ): Node | undefined {
    const { startContainer, startOffset, endOffset } = range;
    const isPartialSelection = checkPartialSelectionForNode(
      startContainer,
      startOffset,
      endOffset
    );
    const isSpanTag = checkAncestorSpanTag(range);
    if (!isPartialSelection) {
      // full selection
      if (isSpanTag) {
        const textNode = toggleRangeClassName(startContainer.parentElement);
        return textNode;
      } else {
        const textNode = createFirstTimeBold(selection);
        return textNode;
      }
    } else {
      // partial selection
      const textNode = updateBoldForPartialSelectedNode(
        startContainer,
        startOffset,
        endOffset,
        isSpanTag
      );
      return textNode;
    }
  }
  function updateBoldForElementNode(
    selection: Selection,
    range: Range
  ): SelectionForElementNode | undefined {
    // ancestor is root
    // or other element incase of multiple heirarchy
    // check for length of selection and start and end container text length
    const { startContainer, endContainer, startOffset, endOffset } = range;
    const startSelectionLen = startContainer.nodeValue.length - startOffset;
    const selectionLen = selection.toString().length;
    const containerSelectionLen = startSelectionLen + endOffset;
    let startSelection = { startNode: startContainer, startOffset };
    let endSelection = { endNode: endContainer, endOffset };
    const isStartPartialSelected = checkPartialSelectionForNode(
      startContainer,
      startOffset,
      startContainer.nodeValue.length
    );
    const isEndPartialSelected = checkPartialSelectionForNode(
      endContainer,
      0,
      endOffset
    );
    if (selectionLen > containerSelectionLen) {
      // some text is selected in between the two containers
      // selection will always be text node
      // hence parent node will be span tag
      // we move to next sibling till lengths equal
      const siblingsArray = []; // store next siblings in between start and endcontainer it will be span tags
      const { parentNode } = startContainer as any;
      let textInbetween = true;
      let updateContainerLength = containerSelectionLen;
      let nextSibling = parentNode.nextSibling;
      while (textInbetween) {
        const textNode = nextSibling.childNodes[0];
        if (textNode.nodeName === textNodeName) {
          if (
            textNode.nodeValue.length + updateContainerLength <=
            selectionLen
          ) {
            updateContainerLength += textNode.nodeValue.length;
            siblingsArray.push(nextSibling);
            nextSibling = nextSibling.nextSibling;
          } else {
            textInbetween = false;
          }
        }
      }
      // if any start or end or siblings node has no bold class
      // then update all to bold class
      let isBoldRequired = false; // full selection is bold
      if (
        !checkBoldClass(startContainer.parentNode) ||
        !checkBoldClass(endContainer.parentNode)
      ) {
        isBoldRequired = true;
      }
      for (let i = 0; i < siblingsArray.length; i++) {
        if (!checkBoldClass(siblingsArray[i])) {
          isBoldRequired = true;
        }
      }
      if (isBoldRequired) {
        for (let i = 0; i < siblingsArray.length; i++) {
          if (!checkBoldClass(siblingsArray[i])) {
            toggleRangeClassName(siblingsArray[i]);
          }
        }
        if (!checkBoldClass(startContainer.parentNode)) {
          startSelection = updateBoldForStartContainer(
            isStartPartialSelected,
            startContainer,
            startOffset
          );
        }
        if (!checkBoldClass(endContainer.parentNode)) {
          endSelection = updateBoldForEndContainer(
            isEndPartialSelected,
            endContainer,
            endOffset
          );
        }

        return { ...startSelection, ...endSelection };
      } else {
        // remove style class
        for (let i = 0; i < siblingsArray.length; i++) {
          toggleRangeClassName(siblingsArray[i]);
        }
        startSelection = updateBoldForStartContainer(
          isStartPartialSelected,
          startContainer,
          startOffset
        );
        endSelection = updateBoldForEndContainer(
          isEndPartialSelected,
          endContainer,
          endOffset
        );
        return { ...startSelection, ...endSelection };
      }
    } else if (selectionLen === containerSelectionLen) {
      // no text is selected in between the two containers
      // full selection
      let isBoldRequired = false; // full selection is bold
      if (
        !checkBoldClass(startContainer.parentNode) ||
        !checkBoldClass(endContainer.parentNode)
      ) {
        isBoldRequired = true;
      }
      if (isBoldRequired) {
        if (!checkBoldClass(startContainer.parentNode)) {
          startSelection = updateBoldForStartContainer(
            isStartPartialSelected,
            startContainer,
            startOffset
          );
        }
        if (!checkBoldClass(endContainer.parentNode)) {
          endSelection = updateBoldForEndContainer(
            isEndPartialSelected,
            endContainer,
            endOffset
          );
        }
      } else {
        // remove style class
        startSelection = updateBoldForStartContainer(
          isStartPartialSelected,
          startContainer,
          startOffset
        );
        endSelection = updateBoldForEndContainer(
          isEndPartialSelected,
          endContainer,
          endOffset
        );
      }
      return { ...startSelection, ...endSelection };
    }
  }
  function updateBoldForStartContainer(
    isPartialSelected: boolean,
    startContainer: Node,
    offset: number
  ) {
    let newStartNode, newStartOffset;
    if (!isPartialSelected) {
      toggleRangeClassName(startContainer.parentElement);
      newStartNode = startContainer;
      newStartOffset = 0;
      // as we are just updating the class number
      // hence selection data because range will remain unchanged
    }
    if (isPartialSelected) {
      // both container has partial selection
      const startNode = updateBoldForPartialSelectedNode(
        startContainer,
        offset,
        startContainer.nodeValue.length,
        true
      );
      newStartNode = startNode;
      newStartOffset = 0;
    }
    return {
      startNode: newStartNode,
      startOffset: newStartOffset,
    };
  }
  function updateBoldForEndContainer(
    isEndPartialSelected: boolean,
    endContainer: Node,
    endOffset: number
  ) {
    let newEndNode, newEndOffset;
    if (!isEndPartialSelected) {
      toggleRangeClassName(endContainer.parentElement);
      newEndNode = endContainer;
      newEndOffset = endContainer.nodeValue.length;
      // as we are just updating the class number
      // hence selection data because range will remain unchanged
    }
    if (isEndPartialSelected) {
      const endNode = updateBoldForPartialSelectedNode(
        endContainer,
        0,
        endOffset,
        true
      );
      newEndNode = endNode;
      newEndOffset = endNode.nodeValue.length;
    }
    return {
      endNode: newEndNode,
      endOffset: newEndOffset,
    };
  }
  function updateBoldForPartialSelectedNode(
    node: any,
    startOffset: number,
    endOffset: number,
    isSpanTag: boolean
  ) {
    const { nodeValue, parentNode } = node as any;
    const textArray = [];
    textArray[0] = nodeValue.substring(0, startOffset);
    textArray[1] = nodeValue.substring(startOffset, endOffset);
    textArray[2] = nodeValue.substring(endOffset, nodeValue.length);

    const span1 = document.createElement(spanNodeName);
    const span2 = document.createElement(spanNodeName);
    const span3 = document.createElement(spanNodeName);

    if (isSpanTag) {
      span1.classList.add(...parentNode.classList);
      span2.classList.add(...parentNode.classList);
      span3.classList.add(...parentNode.classList);
    }

    const textNode1 = document.createTextNode(textArray[0]);
    const textNode2 = document.createTextNode(textArray[1]);
    const textNode3 = document.createTextNode(textArray[2]);

    textArray[0] && span1.appendChild(textNode1);
    textArray[1] && span2.appendChild(textNode2);
    textArray[2] && span3.appendChild(textNode3);

    span2.classList.toggle(className);

    const rootElem = document.getElementById(rootElementId);
    if (isSpanTag) {
      if (textArray[0]) {
        rootElem.replaceChild(span1, parentNode);
      } else {
        rootElem.replaceChild(span2, parentNode);
      }
    } else {
      // first time partial text node selection
      // rootElem.firstChild this is textNode
      if (textArray[0]) {
        rootElem.replaceChild(span1, rootElem.firstChild);
      } else {
        rootElem.replaceChild(span2, rootElem.firstChild);
      }
    }

    span1.insertAdjacentElement("afterend", span2);
    textArray[2] && span2.insertAdjacentElement("afterend", span3);
    return span2.firstChild;
  }
  function toggleRangeClassName(node: any) {
    node.classList.toggle(className);
    return node.firstChild;
  }
  function createFirstTimeBold(selection: Selection) {
    // first time creation
    const spanNode = document.createElement(spanNodeName);
    spanNode.classList.add(className);
    const textNode = document.createTextNode(selection.toString());
    spanNode.appendChild(textNode);
    const rootElem = document.getElementById(rootElementId);
    rootElem.replaceChild(spanNode, rootElem.firstChild);
    return spanNode.firstChild;
  }
  function checkBoldClass(node: any): boolean {
    if (node.nodeName === spanNodeName && node.classList.contains(className)) {
      return true;
    }
    return false;
  }
  function checkAncestorSpanTag(range: Range): boolean {
    const { parentNode }: any = range.commonAncestorContainer;
    if (parentNode.nodeName === spanNodeName) {
      return true;
    }
    return false;
  }
  function checkTextAncestor(range: Range) {
    const commonAncestorContainer = range.commonAncestorContainer;
    if (
      commonAncestorContainer.nodeName === textNodeName &&
      commonAncestorContainer.nodeValue.length
    ) {
      return true;
    }
    return false;
  }
  function checkPartialSelectionForNode(
    node: Node,
    startOffset: number,
    endOffset: number
  ): boolean {
    if (node.nodeValue.length === endOffset - startOffset) {
      return false;
    }
    return true;
  }
  function resetSelectionForTextNode(node: any) {
    const { selection } = getSelectionAndRage();
    const range = new Range();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  function resetSelectionForElementNode(
    startNode: any,
    endNode: any,
    startOffset: number,
    endOffset: number
  ) {
    const { selection } = getSelectionAndRage();
    const range = new Range();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  function getSelectionAndRage() {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    return { selection, range };
  }
}
