import "./index.css";

interface SelectionForElementNode {
  startNode?: any;
  endNode?: any;
  startOffset?: number;
  endOffset?: number;
}

(async function () {
  const keyBold = 66;
  const textNodeName = "#text";
  const spanNodeName = "SPAN";
  const boldClassName = "bold";
  const italicsClassName = "italics";

  const textElem = document.getElementById("root");
  textElem.addEventListener("keydown", function (event) {
    // Command key field "metaKey" for mac
    if (event.keyCode === keyBold && event.metaKey) {
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
        const textNode = toggleRangeClassName(startContainer);
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
    if (selectionLen > containerSelectionLen) {
      // some text is selected in between the two containers
    } else if (selectionLen === containerSelectionLen) {
      // no text is selected in between the two containers
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
      // full selection
      if (!isStartPartialSelected && !isEndPartialSelected) {
        toggleRangeClassName(startContainer);
        toggleRangeClassName(endContainer);
        // as we are just updating the class number
        // hence not returning selection data because range will remain unchanged
      } else if (isStartPartialSelected && isEndPartialSelected) {
        // both container has partial selection
        const startNode = updateBoldForPartialSelectedNode(
          startContainer,
          startOffset,
          startContainer.nodeValue.length,
          true
        );
        const endNode = updateBoldForPartialSelectedNode(
          endContainer,
          0,
          endOffset,
          true
        );
        const endNodeLen = endNode.nodeValue.length;
        return { startNode, endNode, startOffset: 0, endOffset: endNodeLen };
      } else {
        if (!isStartPartialSelected) {
          // full selection of startContainer
          toggleRangeClassName(startContainer);
          // partial selection of endContainer
          const textNode = updateBoldForPartialSelectedNode(
            endContainer,
            0,
            endOffset,
            true
          );
          return {
            startNode: startContainer,
            endNode: textNode,
            startOffset: 0,
            endOffset,
          };
        }
        if (!isEndPartialSelected) {
          // partial selection of startContainer
          const textNode = updateBoldForPartialSelectedNode(
            startContainer,
            startOffset,
            startContainer.nodeValue.length,
            true
          );
          // full selection of endContainer
          toggleRangeClassName(endContainer);
          return {
            startNode: textNode,
            endNode: endContainer,
            startOffset: 0,
            endOffset,
          };
        }
      }
    }
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

    span1.appendChild(textNode1);
    span2.appendChild(textNode2);
    span3.appendChild(textNode3);

    span2.classList.toggle(boldClassName);

    const rootElem = document.getElementById("root");
    if (isSpanTag) {
      rootElem.replaceChild(span1, parentNode);
    } else {
      // first time partial text node selection
      // rootElem.firstChild this is textNode
      rootElem.replaceChild(span1, rootElem.firstChild);
    }

    span1.insertAdjacentElement("afterend", span2);
    span2.insertAdjacentElement("afterend", span3);
    return span2.firstChild;
  }
  function toggleRangeClassName(node: Node) {
    const { parentNode }: any = node; // span tag
    parentNode.classList.toggle(boldClassName);
    return node;
  }
  function createFirstTimeBold(selection: Selection) {
    // first time creation
    const spanNode = document.createElement(spanNodeName);
    spanNode.classList.add(boldClassName);
    const textNode = document.createTextNode(selection.toString());
    spanNode.appendChild(textNode);
    const rootElem = document.getElementById("root");
    rootElem.replaceChild(spanNode, rootElem.firstChild);
    return spanNode.firstChild;
  }
  function checkBoldClass(node: any): boolean {
    if (
      node.nodeName === spanNodeName &&
      node.classList.contains(boldClassName)
    ) {
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
})();
