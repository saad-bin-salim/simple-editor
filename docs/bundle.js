/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#root {\n    min-width: 250px;\n    min-height: 50px;\n    border: 1px dotted;\n}\n\n.bold {\n    font-weight: 700;\n}\n.italics {\n    font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB","sourcesContent":["#root {\n    min-width: 250px;\n    min-height: 50px;\n    border: 1px dotted;\n}\n\n.bold {\n    font-weight: 700;\n}\n.italics {\n    font-style: italic;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(commandKey, className) {
    return __awaiter(this, void 0, void 0, function () {
        function updateBold() {
            var _a = getSelectionAndRage(), selection = _a.selection, range = _a.range;
            var textAncestor = checkTextAncestor(range);
            if (textAncestor) {
                var node = updateBoldForTextNode(selection, range);
                node && resetSelectionForTextNode(node);
            }
            else {
                var _b = updateBoldForElementNode(selection, range) || {}, startNode = _b.startNode, endNode = _b.endNode, startOffset = _b.startOffset, endOffset = _b.endOffset;
                if (startNode && endNode) {
                    resetSelectionForElementNode(startNode, endNode, startOffset, endOffset);
                }
            }
        }
        function updateBoldForTextNode(selection, range) {
            var startContainer = range.startContainer, startOffset = range.startOffset, endOffset = range.endOffset;
            var isPartialSelection = checkPartialSelectionForNode(startContainer, startOffset, endOffset);
            var isSpanTag = checkAncestorSpanTag(range);
            if (!isPartialSelection) {
                // full selection
                if (isSpanTag) {
                    var textNode = toggleRangeClassName(startContainer.parentElement);
                    return textNode;
                }
                else {
                    var textNode = createFirstTimeBold(selection);
                    return textNode;
                }
            }
            else {
                // partial selection
                var textNode = updateBoldForPartialSelectedNode(startContainer, startOffset, endOffset, isSpanTag);
                return textNode;
            }
        }
        function updateBoldForElementNode(selection, range) {
            // ancestor is root
            // or other element incase of multiple heirarchy
            // check for length of selection and start and end container text length
            var startContainer = range.startContainer, endContainer = range.endContainer, startOffset = range.startOffset, endOffset = range.endOffset;
            var startSelectionLen = startContainer.nodeValue.length - startOffset;
            var selectionLen = selection.toString().length;
            var containerSelectionLen = startSelectionLen + endOffset;
            var startSelection = { startNode: startContainer, startOffset: startOffset };
            var endSelection = { endNode: endContainer, endOffset: endOffset };
            var isStartPartialSelected = checkPartialSelectionForNode(startContainer, startOffset, startContainer.nodeValue.length);
            var isEndPartialSelected = checkPartialSelectionForNode(endContainer, 0, endOffset);
            if (selectionLen > containerSelectionLen) {
                // some text is selected in between the two containers
                // selection will always be text node
                // hence parent node will be span tag
                // we move to next sibling till lengths equal
                var siblingsArray = []; // store next siblings in between start and endcontainer it will be span tags
                var parentNode = startContainer.parentNode;
                var textInbetween = true;
                var updateContainerLength = containerSelectionLen;
                var nextSibling = parentNode.nextSibling;
                while (textInbetween) {
                    var textNode = nextSibling.childNodes[0];
                    if (textNode.nodeName === textNodeName) {
                        if (textNode.nodeValue.length + updateContainerLength <=
                            selectionLen) {
                            updateContainerLength += textNode.nodeValue.length;
                            siblingsArray.push(nextSibling);
                            nextSibling = nextSibling.nextSibling;
                        }
                        else {
                            textInbetween = false;
                        }
                    }
                }
                // if any start or end or siblings node has no bold class
                // then update all to bold class
                var isBoldRequired = false; // full selection is bold
                if (!checkBoldClass(startContainer.parentNode) ||
                    !checkBoldClass(endContainer.parentNode)) {
                    isBoldRequired = true;
                }
                for (var i = 0; i < siblingsArray.length; i++) {
                    if (!checkBoldClass(siblingsArray[i])) {
                        isBoldRequired = true;
                    }
                }
                if (isBoldRequired) {
                    for (var i = 0; i < siblingsArray.length; i++) {
                        if (!checkBoldClass(siblingsArray[i])) {
                            toggleRangeClassName(siblingsArray[i]);
                        }
                    }
                    if (!checkBoldClass(startContainer.parentNode)) {
                        startSelection = updateBoldForStartContainer(isStartPartialSelected, startContainer, startOffset);
                    }
                    if (!checkBoldClass(endContainer.parentNode)) {
                        endSelection = updateBoldForEndContainer(isEndPartialSelected, endContainer, endOffset);
                    }
                    return __assign(__assign({}, startSelection), endSelection);
                }
                else {
                    // remove style class
                    for (var i = 0; i < siblingsArray.length; i++) {
                        toggleRangeClassName(siblingsArray[i]);
                    }
                    startSelection = updateBoldForStartContainer(isStartPartialSelected, startContainer, startOffset);
                    endSelection = updateBoldForEndContainer(isEndPartialSelected, endContainer, endOffset);
                    return __assign(__assign({}, startSelection), endSelection);
                }
            }
            else if (selectionLen === containerSelectionLen) {
                // no text is selected in between the two containers
                // full selection
                var isBoldRequired = false; // full selection is bold
                if (!checkBoldClass(startContainer.parentNode) ||
                    !checkBoldClass(endContainer.parentNode)) {
                    isBoldRequired = true;
                }
                if (isBoldRequired) {
                    if (!checkBoldClass(startContainer.parentNode)) {
                        startSelection = updateBoldForStartContainer(isStartPartialSelected, startContainer, startOffset);
                    }
                    if (!checkBoldClass(endContainer.parentNode)) {
                        endSelection = updateBoldForEndContainer(isEndPartialSelected, endContainer, endOffset);
                    }
                }
                else {
                    // remove style class
                    startSelection = updateBoldForStartContainer(isStartPartialSelected, startContainer, startOffset);
                    endSelection = updateBoldForEndContainer(isEndPartialSelected, endContainer, endOffset);
                }
                return __assign(__assign({}, startSelection), endSelection);
            }
        }
        function updateBoldForStartContainer(isPartialSelected, startContainer, offset) {
            var newStartNode, newStartOffset;
            if (!isPartialSelected) {
                toggleRangeClassName(startContainer.parentElement);
                newStartNode = startContainer;
                newStartOffset = 0;
                // as we are just updating the class number
                // hence selection data because range will remain unchanged
            }
            if (isPartialSelected) {
                // both container has partial selection
                var startNode = updateBoldForPartialSelectedNode(startContainer, offset, startContainer.nodeValue.length, true);
                newStartNode = startNode;
                newStartOffset = 0;
            }
            return {
                startNode: newStartNode,
                startOffset: newStartOffset,
            };
        }
        function updateBoldForEndContainer(isEndPartialSelected, endContainer, endOffset) {
            var newEndNode, newEndOffset;
            if (!isEndPartialSelected) {
                toggleRangeClassName(endContainer.parentElement);
                newEndNode = endContainer;
                newEndOffset = endContainer.nodeValue.length;
                // as we are just updating the class number
                // hence selection data because range will remain unchanged
            }
            if (isEndPartialSelected) {
                var endNode = updateBoldForPartialSelectedNode(endContainer, 0, endOffset, true);
                newEndNode = endNode;
                newEndOffset = endNode.nodeValue.length;
            }
            return {
                endNode: newEndNode,
                endOffset: newEndOffset,
            };
        }
        function updateBoldForPartialSelectedNode(node, startOffset, endOffset, isSpanTag) {
            var _a, _b, _c;
            var _d = node, nodeValue = _d.nodeValue, parentNode = _d.parentNode;
            var textArray = [];
            textArray[0] = nodeValue.substring(0, startOffset);
            textArray[1] = nodeValue.substring(startOffset, endOffset);
            textArray[2] = nodeValue.substring(endOffset, nodeValue.length);
            var span1 = document.createElement(spanNodeName);
            var span2 = document.createElement(spanNodeName);
            var span3 = document.createElement(spanNodeName);
            if (isSpanTag) {
                (_a = span1.classList).add.apply(_a, parentNode.classList);
                (_b = span2.classList).add.apply(_b, parentNode.classList);
                (_c = span3.classList).add.apply(_c, parentNode.classList);
            }
            var textNode1 = document.createTextNode(textArray[0]);
            var textNode2 = document.createTextNode(textArray[1]);
            var textNode3 = document.createTextNode(textArray[2]);
            textArray[0] && span1.appendChild(textNode1);
            textArray[1] && span2.appendChild(textNode2);
            textArray[2] && span3.appendChild(textNode3);
            span2.classList.toggle(className);
            var rootElem = document.getElementById(rootElementId);
            if (isSpanTag) {
                if (textArray[0]) {
                    rootElem.replaceChild(span1, parentNode);
                }
                else {
                    rootElem.replaceChild(span2, parentNode);
                }
            }
            else {
                // first time partial text node selection
                // rootElem.firstChild this is textNode
                if (textArray[0]) {
                    rootElem.replaceChild(span1, rootElem.firstChild);
                }
                else {
                    rootElem.replaceChild(span2, rootElem.firstChild);
                }
            }
            span1.insertAdjacentElement("afterend", span2);
            textArray[2] && span2.insertAdjacentElement("afterend", span3);
            return span2.firstChild;
        }
        function toggleRangeClassName(node) {
            node.classList.toggle(className);
            return node.firstChild;
        }
        function createFirstTimeBold(selection) {
            // first time creation
            var spanNode = document.createElement(spanNodeName);
            spanNode.classList.add(className);
            var textNode = document.createTextNode(selection.toString());
            spanNode.appendChild(textNode);
            var rootElem = document.getElementById(rootElementId);
            rootElem.replaceChild(spanNode, rootElem.firstChild);
            return spanNode.firstChild;
        }
        function checkBoldClass(node) {
            if (node.nodeName === spanNodeName && node.classList.contains(className)) {
                return true;
            }
            return false;
        }
        function checkAncestorSpanTag(range) {
            var parentNode = range.commonAncestorContainer.parentNode;
            if (parentNode.nodeName === spanNodeName) {
                return true;
            }
            return false;
        }
        function checkTextAncestor(range) {
            var commonAncestorContainer = range.commonAncestorContainer;
            if (commonAncestorContainer.nodeName === textNodeName &&
                commonAncestorContainer.nodeValue.length) {
                return true;
            }
            return false;
        }
        function checkPartialSelectionForNode(node, startOffset, endOffset) {
            if (node.nodeValue.length === endOffset - startOffset) {
                return false;
            }
            return true;
        }
        function resetSelectionForTextNode(node) {
            var selection = getSelectionAndRage().selection;
            var range = new Range();
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        function resetSelectionForElementNode(startNode, endNode, startOffset, endOffset) {
            var selection = getSelectionAndRage().selection;
            var range = new Range();
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        function getSelectionAndRage() {
            var selection = document.getSelection();
            var range = selection.getRangeAt(0);
            return { selection: selection, range: range };
        }
        var textNodeName, spanNodeName, rootElementId, textElem;
        return __generator(this, function (_a) {
            textNodeName = "#text";
            spanNodeName = "SPAN";
            rootElementId = "root";
            textElem = document.getElementById(rootElementId);
            textElem.addEventListener("keydown", function (event) {
                // Command key field "metaKey" for mac
                console.log("event.keyCode", event.keyCode);
                if (event.keyCode === commandKey && event.metaKey) {
                    event.preventDefault();
                    var selection = getSelectionAndRage().selection;
                    if (selection.isCollapsed) {
                        return;
                    }
                    updateBold();
                }
            });
            document.onselectionchange = function () {
                var _a = getSelectionAndRage(), selection = _a.selection, range = _a.range;
                if (selection.isCollapsed) {
                    return;
                }
                console.log(selection, range);
                // TODO
            };
            return [2 /*return*/];
        });
    });
}


/***/ }),

/***/ "./src/keyClassRelation.ts":
/*!*********************************!*\
  !*** ./src/keyClassRelation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keyClassRelation = [
    {
        key: 66,
        class: "bold",
    },
    {
        key: 73,
        class: "italics",
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyClassRelation);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ "./src/handler.ts");
/* harmony import */ var _keyClassRelation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyClassRelation */ "./src/keyClassRelation.ts");



(function () {
    for (var i = 0; i < _keyClassRelation__WEBPACK_IMPORTED_MODULE_2__.default.length; i++) {
        var relObj = _keyClassRelation__WEBPACK_IMPORTED_MODULE_2__.default[i];
        (0,_handler__WEBPACK_IMPORTED_MODULE_1__.default)(relObj.key, relObj.class);
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWVkaXRvci8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3NpbXBsZS1lZGl0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWVkaXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWVkaXRvci8uL3NyYy9oYW5kbGVyLnRzIiwid2VicGFjazovL3NpbXBsZS1lZGl0b3IvLi9zcmMva2V5Q2xhc3NSZWxhdGlvbi50cyIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBsZS1lZGl0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGxlLWVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWVkaXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXBsZS1lZGl0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbGUtZWRpdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsdUJBQXVCLHVCQUF1Qix5QkFBeUIsR0FBRyxXQUFXLHVCQUF1QixHQUFHLFlBQVkseUJBQXlCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksaUNBQWlDLHVCQUF1Qix1QkFBdUIseUJBQXlCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxZQUFZLHlCQUF5QixHQUFHLG1CQUFtQjtBQUMvakI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZC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Q0FBQyxDQUFDO2dCQUM5QixPQUFPO1lBQ1QsQ0FBQyxDQUFDOzs7O0NBdVhIOzs7Ozs7Ozs7Ozs7Ozs7QUNwWkQsSUFBTSxnQkFBZ0IsR0FBb0I7SUFDeEM7UUFDRSxHQUFHLEVBQUUsRUFBRTtRQUNQLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLEdBQUcsRUFBRSxFQUFFO1FBQ1AsS0FBSyxFQUFFLFNBQVM7S0FDakI7Q0FDRixDQUFDO0FBRUYsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7VUNoQmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNTO0FBRWxELENBQUM7SUFDQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsNkRBQXVCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDaEQsSUFBTSxNQUFNLEdBQUcsc0RBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsaURBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3Jvb3Qge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQ7XFxufVxcblxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLml0YWxpY3Mge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNyb290IHtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkO1xcbn1cXG5cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5pdGFsaWNzIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbnRlcmZhY2UgU2VsZWN0aW9uRm9yRWxlbWVudE5vZGUge1xuICBzdGFydE5vZGU/OiBhbnk7XG4gIGVuZE5vZGU/OiBhbnk7XG4gIHN0YXJ0T2Zmc2V0PzogbnVtYmVyO1xuICBlbmRPZmZzZXQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChjb21tYW5kS2V5OiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHRleHROb2RlTmFtZSA9IFwiI3RleHRcIjtcbiAgY29uc3Qgc3Bhbk5vZGVOYW1lID0gXCJTUEFOXCI7XG4gIGNvbnN0IHJvb3RFbGVtZW50SWQgPSBcInJvb3RcIjtcbiAgY29uc3QgdGV4dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290RWxlbWVudElkKTtcbiAgdGV4dEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gQ29tbWFuZCBrZXkgZmllbGQgXCJtZXRhS2V5XCIgZm9yIG1hY1xuICAgIGNvbnNvbGUubG9nKFwiZXZlbnQua2V5Q29kZVwiLCBldmVudC5rZXlDb2RlKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY29tbWFuZEtleSAmJiBldmVudC5tZXRhS2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyBzZWxlY3Rpb24gfSA9IGdldFNlbGVjdGlvbkFuZFJhZ2UoKTtcbiAgICAgIGlmIChzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdXBkYXRlQm9sZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQub25zZWxlY3Rpb25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb24sIHJhbmdlIH0gPSBnZXRTZWxlY3Rpb25BbmRSYWdlKCk7XG4gICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb24sIHJhbmdlKTtcbiAgICAvLyBUT0RPXG4gIH07XG4gIGZ1bmN0aW9uIHVwZGF0ZUJvbGQoKSB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb24sIHJhbmdlIH0gPSBnZXRTZWxlY3Rpb25BbmRSYWdlKCk7XG4gICAgY29uc3QgdGV4dEFuY2VzdG9yID0gY2hlY2tUZXh0QW5jZXN0b3IocmFuZ2UpO1xuICAgIGlmICh0ZXh0QW5jZXN0b3IpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB1cGRhdGVCb2xkRm9yVGV4dE5vZGUoc2VsZWN0aW9uLCByYW5nZSk7XG4gICAgICBub2RlICYmIHJlc2V0U2VsZWN0aW9uRm9yVGV4dE5vZGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgc3RhcnROb2RlLCBlbmROb2RlLCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0IH0gPVxuICAgICAgICB1cGRhdGVCb2xkRm9yRWxlbWVudE5vZGUoc2VsZWN0aW9uLCByYW5nZSkgfHwge307XG4gICAgICBpZiAoc3RhcnROb2RlICYmIGVuZE5vZGUpIHtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb25Gb3JFbGVtZW50Tm9kZShcbiAgICAgICAgICBzdGFydE5vZGUsXG4gICAgICAgICAgZW5kTm9kZSxcbiAgICAgICAgICBzdGFydE9mZnNldCxcbiAgICAgICAgICBlbmRPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQm9sZEZvclRleHROb2RlKFxuICAgIHNlbGVjdGlvbjogU2VsZWN0aW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBOb2RlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IHN0YXJ0Q29udGFpbmVyLCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0IH0gPSByYW5nZTtcbiAgICBjb25zdCBpc1BhcnRpYWxTZWxlY3Rpb24gPSBjaGVja1BhcnRpYWxTZWxlY3Rpb25Gb3JOb2RlKFxuICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICBzdGFydE9mZnNldCxcbiAgICAgIGVuZE9mZnNldFxuICAgICk7XG4gICAgY29uc3QgaXNTcGFuVGFnID0gY2hlY2tBbmNlc3RvclNwYW5UYWcocmFuZ2UpO1xuICAgIGlmICghaXNQYXJ0aWFsU2VsZWN0aW9uKSB7XG4gICAgICAvLyBmdWxsIHNlbGVjdGlvblxuICAgICAgaWYgKGlzU3BhblRhZykge1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IHRvZ2dsZVJhbmdlQ2xhc3NOYW1lKHN0YXJ0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGV4dE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGNyZWF0ZUZpcnN0VGltZUJvbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRleHROb2RlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwYXJ0aWFsIHNlbGVjdGlvblxuICAgICAgY29uc3QgdGV4dE5vZGUgPSB1cGRhdGVCb2xkRm9yUGFydGlhbFNlbGVjdGVkTm9kZShcbiAgICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICAgIHN0YXJ0T2Zmc2V0LFxuICAgICAgICBlbmRPZmZzZXQsXG4gICAgICAgIGlzU3BhblRhZ1xuICAgICAgKTtcbiAgICAgIHJldHVybiB0ZXh0Tm9kZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQm9sZEZvckVsZW1lbnROb2RlKFxuICAgIHNlbGVjdGlvbjogU2VsZWN0aW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBTZWxlY3Rpb25Gb3JFbGVtZW50Tm9kZSB8IHVuZGVmaW5lZCB7XG4gICAgLy8gYW5jZXN0b3IgaXMgcm9vdFxuICAgIC8vIG9yIG90aGVyIGVsZW1lbnQgaW5jYXNlIG9mIG11bHRpcGxlIGhlaXJhcmNoeVxuICAgIC8vIGNoZWNrIGZvciBsZW5ndGggb2Ygc2VsZWN0aW9uIGFuZCBzdGFydCBhbmQgZW5kIGNvbnRhaW5lciB0ZXh0IGxlbmd0aFxuICAgIGNvbnN0IHsgc3RhcnRDb250YWluZXIsIGVuZENvbnRhaW5lciwgc3RhcnRPZmZzZXQsIGVuZE9mZnNldCB9ID0gcmFuZ2U7XG4gICAgY29uc3Qgc3RhcnRTZWxlY3Rpb25MZW4gPSBzdGFydENvbnRhaW5lci5ub2RlVmFsdWUubGVuZ3RoIC0gc3RhcnRPZmZzZXQ7XG4gICAgY29uc3Qgc2VsZWN0aW9uTGVuID0gc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIGNvbnN0IGNvbnRhaW5lclNlbGVjdGlvbkxlbiA9IHN0YXJ0U2VsZWN0aW9uTGVuICsgZW5kT2Zmc2V0O1xuICAgIGxldCBzdGFydFNlbGVjdGlvbiA9IHsgc3RhcnROb2RlOiBzdGFydENvbnRhaW5lciwgc3RhcnRPZmZzZXQgfTtcbiAgICBsZXQgZW5kU2VsZWN0aW9uID0geyBlbmROb2RlOiBlbmRDb250YWluZXIsIGVuZE9mZnNldCB9O1xuICAgIGNvbnN0IGlzU3RhcnRQYXJ0aWFsU2VsZWN0ZWQgPSBjaGVja1BhcnRpYWxTZWxlY3Rpb25Gb3JOb2RlKFxuICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICBzdGFydE9mZnNldCxcbiAgICAgIHN0YXJ0Q29udGFpbmVyLm5vZGVWYWx1ZS5sZW5ndGhcbiAgICApO1xuICAgIGNvbnN0IGlzRW5kUGFydGlhbFNlbGVjdGVkID0gY2hlY2tQYXJ0aWFsU2VsZWN0aW9uRm9yTm9kZShcbiAgICAgIGVuZENvbnRhaW5lcixcbiAgICAgIDAsXG4gICAgICBlbmRPZmZzZXRcbiAgICApO1xuICAgIGlmIChzZWxlY3Rpb25MZW4gPiBjb250YWluZXJTZWxlY3Rpb25MZW4pIHtcbiAgICAgIC8vIHNvbWUgdGV4dCBpcyBzZWxlY3RlZCBpbiBiZXR3ZWVuIHRoZSB0d28gY29udGFpbmVyc1xuICAgICAgLy8gc2VsZWN0aW9uIHdpbGwgYWx3YXlzIGJlIHRleHQgbm9kZVxuICAgICAgLy8gaGVuY2UgcGFyZW50IG5vZGUgd2lsbCBiZSBzcGFuIHRhZ1xuICAgICAgLy8gd2UgbW92ZSB0byBuZXh0IHNpYmxpbmcgdGlsbCBsZW5ndGhzIGVxdWFsXG4gICAgICBjb25zdCBzaWJsaW5nc0FycmF5ID0gW107IC8vIHN0b3JlIG5leHQgc2libGluZ3MgaW4gYmV0d2VlbiBzdGFydCBhbmQgZW5kY29udGFpbmVyIGl0IHdpbGwgYmUgc3BhbiB0YWdzXG4gICAgICBjb25zdCB7IHBhcmVudE5vZGUgfSA9IHN0YXJ0Q29udGFpbmVyIGFzIGFueTtcbiAgICAgIGxldCB0ZXh0SW5iZXR3ZWVuID0gdHJ1ZTtcbiAgICAgIGxldCB1cGRhdGVDb250YWluZXJMZW5ndGggPSBjb250YWluZXJTZWxlY3Rpb25MZW47XG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSBwYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgd2hpbGUgKHRleHRJbmJldHdlZW4pIHtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBuZXh0U2libGluZy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBpZiAodGV4dE5vZGUubm9kZU5hbWUgPT09IHRleHROb2RlTmFtZSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRleHROb2RlLm5vZGVWYWx1ZS5sZW5ndGggKyB1cGRhdGVDb250YWluZXJMZW5ndGggPD1cbiAgICAgICAgICAgIHNlbGVjdGlvbkxlblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdXBkYXRlQ29udGFpbmVyTGVuZ3RoICs9IHRleHROb2RlLm5vZGVWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICBzaWJsaW5nc0FycmF5LnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dEluYmV0d2VlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgYW55IHN0YXJ0IG9yIGVuZCBvciBzaWJsaW5ncyBub2RlIGhhcyBubyBib2xkIGNsYXNzXG4gICAgICAvLyB0aGVuIHVwZGF0ZSBhbGwgdG8gYm9sZCBjbGFzc1xuICAgICAgbGV0IGlzQm9sZFJlcXVpcmVkID0gZmFsc2U7IC8vIGZ1bGwgc2VsZWN0aW9uIGlzIGJvbGRcbiAgICAgIGlmIChcbiAgICAgICAgIWNoZWNrQm9sZENsYXNzKHN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGUpIHx8XG4gICAgICAgICFjaGVja0JvbGRDbGFzcyhlbmRDb250YWluZXIucGFyZW50Tm9kZSlcbiAgICAgICkge1xuICAgICAgICBpc0JvbGRSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpYmxpbmdzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFjaGVja0JvbGRDbGFzcyhzaWJsaW5nc0FycmF5W2ldKSkge1xuICAgICAgICAgIGlzQm9sZFJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzQm9sZFJlcXVpcmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2libGluZ3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghY2hlY2tCb2xkQ2xhc3Moc2libGluZ3NBcnJheVtpXSkpIHtcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlQ2xhc3NOYW1lKHNpYmxpbmdzQXJyYXlbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoZWNrQm9sZENsYXNzKHN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgc3RhcnRTZWxlY3Rpb24gPSB1cGRhdGVCb2xkRm9yU3RhcnRDb250YWluZXIoXG4gICAgICAgICAgICBpc1N0YXJ0UGFydGlhbFNlbGVjdGVkLFxuICAgICAgICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICAgICAgICBzdGFydE9mZnNldFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGVja0JvbGRDbGFzcyhlbmRDb250YWluZXIucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICBlbmRTZWxlY3Rpb24gPSB1cGRhdGVCb2xkRm9yRW5kQ29udGFpbmVyKFxuICAgICAgICAgICAgaXNFbmRQYXJ0aWFsU2VsZWN0ZWQsXG4gICAgICAgICAgICBlbmRDb250YWluZXIsXG4gICAgICAgICAgICBlbmRPZmZzZXRcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhcnRTZWxlY3Rpb24sIC4uLmVuZFNlbGVjdGlvbiB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIHN0eWxlIGNsYXNzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2libGluZ3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRvZ2dsZVJhbmdlQ2xhc3NOYW1lKHNpYmxpbmdzQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0U2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvclN0YXJ0Q29udGFpbmVyKFxuICAgICAgICAgIGlzU3RhcnRQYXJ0aWFsU2VsZWN0ZWQsXG4gICAgICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICAgICAgc3RhcnRPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgZW5kU2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvckVuZENvbnRhaW5lcihcbiAgICAgICAgICBpc0VuZFBhcnRpYWxTZWxlY3RlZCxcbiAgICAgICAgICBlbmRDb250YWluZXIsXG4gICAgICAgICAgZW5kT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXJ0U2VsZWN0aW9uLCAuLi5lbmRTZWxlY3Rpb24gfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbkxlbiA9PT0gY29udGFpbmVyU2VsZWN0aW9uTGVuKSB7XG4gICAgICAvLyBubyB0ZXh0IGlzIHNlbGVjdGVkIGluIGJldHdlZW4gdGhlIHR3byBjb250YWluZXJzXG4gICAgICAvLyBmdWxsIHNlbGVjdGlvblxuICAgICAgbGV0IGlzQm9sZFJlcXVpcmVkID0gZmFsc2U7IC8vIGZ1bGwgc2VsZWN0aW9uIGlzIGJvbGRcbiAgICAgIGlmIChcbiAgICAgICAgIWNoZWNrQm9sZENsYXNzKHN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGUpIHx8XG4gICAgICAgICFjaGVja0JvbGRDbGFzcyhlbmRDb250YWluZXIucGFyZW50Tm9kZSlcbiAgICAgICkge1xuICAgICAgICBpc0JvbGRSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNCb2xkUmVxdWlyZWQpIHtcbiAgICAgICAgaWYgKCFjaGVja0JvbGRDbGFzcyhzdGFydENvbnRhaW5lci5wYXJlbnROb2RlKSkge1xuICAgICAgICAgIHN0YXJ0U2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvclN0YXJ0Q29udGFpbmVyKFxuICAgICAgICAgICAgaXNTdGFydFBhcnRpYWxTZWxlY3RlZCxcbiAgICAgICAgICAgIHN0YXJ0Q29udGFpbmVyLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hlY2tCb2xkQ2xhc3MoZW5kQ29udGFpbmVyLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgZW5kU2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvckVuZENvbnRhaW5lcihcbiAgICAgICAgICAgIGlzRW5kUGFydGlhbFNlbGVjdGVkLFxuICAgICAgICAgICAgZW5kQ29udGFpbmVyLFxuICAgICAgICAgICAgZW5kT2Zmc2V0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIHN0eWxlIGNsYXNzXG4gICAgICAgIHN0YXJ0U2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvclN0YXJ0Q29udGFpbmVyKFxuICAgICAgICAgIGlzU3RhcnRQYXJ0aWFsU2VsZWN0ZWQsXG4gICAgICAgICAgc3RhcnRDb250YWluZXIsXG4gICAgICAgICAgc3RhcnRPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgZW5kU2VsZWN0aW9uID0gdXBkYXRlQm9sZEZvckVuZENvbnRhaW5lcihcbiAgICAgICAgICBpc0VuZFBhcnRpYWxTZWxlY3RlZCxcbiAgICAgICAgICBlbmRDb250YWluZXIsXG4gICAgICAgICAgZW5kT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5zdGFydFNlbGVjdGlvbiwgLi4uZW5kU2VsZWN0aW9uIH07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUJvbGRGb3JTdGFydENvbnRhaW5lcihcbiAgICBpc1BhcnRpYWxTZWxlY3RlZDogYm9vbGVhbixcbiAgICBzdGFydENvbnRhaW5lcjogTm9kZSxcbiAgICBvZmZzZXQ6IG51bWJlclxuICApIHtcbiAgICBsZXQgbmV3U3RhcnROb2RlLCBuZXdTdGFydE9mZnNldDtcbiAgICBpZiAoIWlzUGFydGlhbFNlbGVjdGVkKSB7XG4gICAgICB0b2dnbGVSYW5nZUNsYXNzTmFtZShzdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50KTtcbiAgICAgIG5ld1N0YXJ0Tm9kZSA9IHN0YXJ0Q29udGFpbmVyO1xuICAgICAgbmV3U3RhcnRPZmZzZXQgPSAwO1xuICAgICAgLy8gYXMgd2UgYXJlIGp1c3QgdXBkYXRpbmcgdGhlIGNsYXNzIG51bWJlclxuICAgICAgLy8gaGVuY2Ugc2VsZWN0aW9uIGRhdGEgYmVjYXVzZSByYW5nZSB3aWxsIHJlbWFpbiB1bmNoYW5nZWRcbiAgICB9XG4gICAgaWYgKGlzUGFydGlhbFNlbGVjdGVkKSB7XG4gICAgICAvLyBib3RoIGNvbnRhaW5lciBoYXMgcGFydGlhbCBzZWxlY3Rpb25cbiAgICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IHVwZGF0ZUJvbGRGb3JQYXJ0aWFsU2VsZWN0ZWROb2RlKFxuICAgICAgICBzdGFydENvbnRhaW5lcixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzdGFydENvbnRhaW5lci5ub2RlVmFsdWUubGVuZ3RoLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgbmV3U3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgbmV3U3RhcnRPZmZzZXQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnROb2RlOiBuZXdTdGFydE5vZGUsXG4gICAgICBzdGFydE9mZnNldDogbmV3U3RhcnRPZmZzZXQsXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVCb2xkRm9yRW5kQ29udGFpbmVyKFxuICAgIGlzRW5kUGFydGlhbFNlbGVjdGVkOiBib29sZWFuLFxuICAgIGVuZENvbnRhaW5lcjogTm9kZSxcbiAgICBlbmRPZmZzZXQ6IG51bWJlclxuICApIHtcbiAgICBsZXQgbmV3RW5kTm9kZSwgbmV3RW5kT2Zmc2V0O1xuICAgIGlmICghaXNFbmRQYXJ0aWFsU2VsZWN0ZWQpIHtcbiAgICAgIHRvZ2dsZVJhbmdlQ2xhc3NOYW1lKGVuZENvbnRhaW5lci5wYXJlbnRFbGVtZW50KTtcbiAgICAgIG5ld0VuZE5vZGUgPSBlbmRDb250YWluZXI7XG4gICAgICBuZXdFbmRPZmZzZXQgPSBlbmRDb250YWluZXIubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgIC8vIGFzIHdlIGFyZSBqdXN0IHVwZGF0aW5nIHRoZSBjbGFzcyBudW1iZXJcbiAgICAgIC8vIGhlbmNlIHNlbGVjdGlvbiBkYXRhIGJlY2F1c2UgcmFuZ2Ugd2lsbCByZW1haW4gdW5jaGFuZ2VkXG4gICAgfVxuICAgIGlmIChpc0VuZFBhcnRpYWxTZWxlY3RlZCkge1xuICAgICAgY29uc3QgZW5kTm9kZSA9IHVwZGF0ZUJvbGRGb3JQYXJ0aWFsU2VsZWN0ZWROb2RlKFxuICAgICAgICBlbmRDb250YWluZXIsXG4gICAgICAgIDAsXG4gICAgICAgIGVuZE9mZnNldCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIG5ld0VuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgbmV3RW5kT2Zmc2V0ID0gZW5kTm9kZS5ub2RlVmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZW5kTm9kZTogbmV3RW5kTm9kZSxcbiAgICAgIGVuZE9mZnNldDogbmV3RW5kT2Zmc2V0LFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQm9sZEZvclBhcnRpYWxTZWxlY3RlZE5vZGUoXG4gICAgbm9kZTogYW55LFxuICAgIHN0YXJ0T2Zmc2V0OiBudW1iZXIsXG4gICAgZW5kT2Zmc2V0OiBudW1iZXIsXG4gICAgaXNTcGFuVGFnOiBib29sZWFuXG4gICkge1xuICAgIGNvbnN0IHsgbm9kZVZhbHVlLCBwYXJlbnROb2RlIH0gPSBub2RlIGFzIGFueTtcbiAgICBjb25zdCB0ZXh0QXJyYXkgPSBbXTtcbiAgICB0ZXh0QXJyYXlbMF0gPSBub2RlVmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0T2Zmc2V0KTtcbiAgICB0ZXh0QXJyYXlbMV0gPSBub2RlVmFsdWUuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQpO1xuICAgIHRleHRBcnJheVsyXSA9IG5vZGVWYWx1ZS5zdWJzdHJpbmcoZW5kT2Zmc2V0LCBub2RlVmFsdWUubGVuZ3RoKTtcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzcGFuTm9kZU5hbWUpO1xuICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzcGFuTm9kZU5hbWUpO1xuICAgIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzcGFuTm9kZU5hbWUpO1xuXG4gICAgaWYgKGlzU3BhblRhZykge1xuICAgICAgc3BhbjEuY2xhc3NMaXN0LmFkZCguLi5wYXJlbnROb2RlLmNsYXNzTGlzdCk7XG4gICAgICBzcGFuMi5jbGFzc0xpc3QuYWRkKC4uLnBhcmVudE5vZGUuY2xhc3NMaXN0KTtcbiAgICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoLi4ucGFyZW50Tm9kZS5jbGFzc0xpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHROb2RlMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRBcnJheVswXSk7XG4gICAgY29uc3QgdGV4dE5vZGUyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dEFycmF5WzFdKTtcbiAgICBjb25zdCB0ZXh0Tm9kZTMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0QXJyYXlbMl0pO1xuXG4gICAgdGV4dEFycmF5WzBdICYmIHNwYW4xLmFwcGVuZENoaWxkKHRleHROb2RlMSk7XG4gICAgdGV4dEFycmF5WzFdICYmIHNwYW4yLmFwcGVuZENoaWxkKHRleHROb2RlMik7XG4gICAgdGV4dEFycmF5WzJdICYmIHNwYW4zLmFwcGVuZENoaWxkKHRleHROb2RlMyk7XG5cbiAgICBzcGFuMi5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG5cbiAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3RFbGVtZW50SWQpO1xuICAgIGlmIChpc1NwYW5UYWcpIHtcbiAgICAgIGlmICh0ZXh0QXJyYXlbMF0pIHtcbiAgICAgICAgcm9vdEVsZW0ucmVwbGFjZUNoaWxkKHNwYW4xLCBwYXJlbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RFbGVtLnJlcGxhY2VDaGlsZChzcGFuMiwgcGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpcnN0IHRpbWUgcGFydGlhbCB0ZXh0IG5vZGUgc2VsZWN0aW9uXG4gICAgICAvLyByb290RWxlbS5maXJzdENoaWxkIHRoaXMgaXMgdGV4dE5vZGVcbiAgICAgIGlmICh0ZXh0QXJyYXlbMF0pIHtcbiAgICAgICAgcm9vdEVsZW0ucmVwbGFjZUNoaWxkKHNwYW4xLCByb290RWxlbS5maXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RFbGVtLnJlcGxhY2VDaGlsZChzcGFuMiwgcm9vdEVsZW0uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3BhbjEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgc3BhbjIpO1xuICAgIHRleHRBcnJheVsyXSAmJiBzcGFuMi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBzcGFuMyk7XG4gICAgcmV0dXJuIHNwYW4yLmZpcnN0Q2hpbGQ7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlUmFuZ2VDbGFzc05hbWUobm9kZTogYW55KSB7XG4gICAgbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVGaXJzdFRpbWVCb2xkKHNlbGVjdGlvbjogU2VsZWN0aW9uKSB7XG4gICAgLy8gZmlyc3QgdGltZSBjcmVhdGlvblxuICAgIGNvbnN0IHNwYW5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzcGFuTm9kZU5hbWUpO1xuICAgIHNwYW5Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNlbGVjdGlvbi50b1N0cmluZygpKTtcbiAgICBzcGFuTm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290RWxlbWVudElkKTtcbiAgICByb290RWxlbS5yZXBsYWNlQ2hpbGQoc3Bhbk5vZGUsIHJvb3RFbGVtLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiBzcGFuTm9kZS5maXJzdENoaWxkO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrQm9sZENsYXNzKG5vZGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBzcGFuTm9kZU5hbWUgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja0FuY2VzdG9yU3BhblRhZyhyYW5nZTogUmFuZ2UpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHBhcmVudE5vZGUgfTogYW55ID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgaWYgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IHNwYW5Ob2RlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1RleHRBbmNlc3RvcihyYW5nZTogUmFuZ2UpIHtcbiAgICBjb25zdCBjb21tb25BbmNlc3RvckNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIGlmIChcbiAgICAgIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLm5vZGVOYW1lID09PSB0ZXh0Tm9kZU5hbWUgJiZcbiAgICAgIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLm5vZGVWYWx1ZS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tQYXJ0aWFsU2VsZWN0aW9uRm9yTm9kZShcbiAgICBub2RlOiBOb2RlLFxuICAgIHN0YXJ0T2Zmc2V0OiBudW1iZXIsXG4gICAgZW5kT2Zmc2V0OiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKG5vZGUubm9kZVZhbHVlLmxlbmd0aCA9PT0gZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3Rpb25Gb3JUZXh0Tm9kZShub2RlOiBhbnkpIHtcbiAgICBjb25zdCB7IHNlbGVjdGlvbiB9ID0gZ2V0U2VsZWN0aW9uQW5kUmFnZSgpO1xuICAgIGNvbnN0IHJhbmdlID0gbmV3IFJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0aW9uRm9yRWxlbWVudE5vZGUoXG4gICAgc3RhcnROb2RlOiBhbnksXG4gICAgZW5kTm9kZTogYW55LFxuICAgIHN0YXJ0T2Zmc2V0OiBudW1iZXIsXG4gICAgZW5kT2Zmc2V0OiBudW1iZXJcbiAgKSB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb24gfSA9IGdldFNlbGVjdGlvbkFuZFJhZ2UoKTtcbiAgICBjb25zdCByYW5nZSA9IG5ldyBSYW5nZSgpO1xuICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0Tm9kZSwgc3RhcnRPZmZzZXQpO1xuICAgIHJhbmdlLnNldEVuZChlbmROb2RlLCBlbmRPZmZzZXQpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFNlbGVjdGlvbkFuZFJhZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICByZXR1cm4geyBzZWxlY3Rpb24sIHJhbmdlIH07XG4gIH1cbn1cbiIsImludGVyZmFjZSBLZXlDbGFzcyB7XG4gIGtleTogbnVtYmVyO1xuICBjbGFzczogc3RyaW5nO1xufVxuXG5jb25zdCBrZXlDbGFzc1JlbGF0aW9uOiBBcnJheTxLZXlDbGFzcz4gPSBbXG4gIHtcbiAgICBrZXk6IDY2LFxuICAgIGNsYXNzOiBcImJvbGRcIixcbiAgfSxcbiAge1xuICAgIGtleTogNzMsXG4gICAgY2xhc3M6IFwiaXRhbGljc1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQga2V5Q2xhc3NSZWxhdGlvbjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHRleHRTdHlsZUhhbmRsZXIgZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IGtleUNsYXNzUmVsYXRpb24gZnJvbSBcIi4va2V5Q2xhc3NSZWxhdGlvblwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUNsYXNzUmVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByZWxPYmogPSBrZXlDbGFzc1JlbGF0aW9uW2ldO1xuICAgIHRleHRTdHlsZUhhbmRsZXIocmVsT2JqLmtleSwgcmVsT2JqLmNsYXNzKTtcbiAgfVxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=