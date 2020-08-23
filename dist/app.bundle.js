/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: white;\\n}\\n\\n.cell {\\n  height: 5rem;\\n  width: 5rem;\\n  font-weight: bold;\\n  font-size: 3.5rem;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar gameBoard = function () {\n  var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];\n  var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  var move = function move(symbol, cell) {\n    board[cell] = symbol;\n    return board;\n  };\n\n  var empty = function empty(cell) {\n    if (board[cell] === ' ') {\n      return true;\n    }\n\n    return false;\n  };\n\n  var winner = function winner(symbol) {\n    for (var i = 0; i < winningCombinations.length; i += 1) {\n      var c = winningCombinations[i];\n\n      if (board[c[0]] === symbol && board[c[1]] === symbol && board[c[2]] === symbol) {\n        return true;\n      }\n    }\n\n    return false;\n  };\n\n  var draw = function draw() {\n    return !board.includes(' ');\n  };\n\n  var reset = function reset() {\n    for (var i = 0; i < 9; i += 1) {\n      board[i] = ' ';\n    }\n\n    return board;\n  };\n\n  return {\n    move: move,\n    empty: empty,\n    winner: winner,\n    reset: reset,\n    draw: draw\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/gamecontrol.js":
/*!****************************!*\
  !*** ./src/gamecontrol.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uicontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uicontrol */ \"./src/uicontrol.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nvar GameControl = function () {\n  var board = _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  var p1 = null;\n  var p2 = null;\n  var currentPlayer = p1;\n  var firstPlayer = p1;\n  var enabled = true;\n\n  var createPlayers = function createPlayers(p1Name, p2Name) {\n    p1 = Object(_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p1Name, '☠️');\n    p2 = Object(_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p2Name, '🌘');\n  };\n\n  var enableBoard = function enableBoard() {\n    enabled = true;\n  };\n\n  var altScoreBoard = function altScoreBoard() {\n    _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].printScoreBoard(p1, p2, enableBoard, board.reset);\n  };\n\n  var clickEvent = function clickEvent(index) {\n    if (board.empty(index) && enabled) {\n      board.move(currentPlayer.getSymbol(), index);\n      _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setSymbolOnBoard(index, currentPlayer);\n      var wins = board.winner(currentPlayer.getSymbol());\n\n      if (wins) {\n        currentPlayer.win();\n        altScoreBoard();\n        _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].printWinMsg(currentPlayer);\n        enabled = false;\n\n        if (firstPlayer === p1) {\n          firstPlayer = p2;\n        } else {\n          firstPlayer = p1;\n        }\n\n        currentPlayer = firstPlayer;\n      } else if (board.draw()) {\n        _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameDraw();\n\n        if (firstPlayer === p1) {\n          firstPlayer = p2;\n        } else {\n          firstPlayer = p1;\n        }\n\n        currentPlayer = firstPlayer;\n      }\n\n      if (currentPlayer === p1) {\n        currentPlayer = p2;\n      } else {\n        currentPlayer = p1;\n      }\n    }\n  };\n\n  var addEvents = function addEvents() {\n    _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBoardEvents(clickEvent);\n  };\n\n  var prepareBoard = function prepareBoard() {\n    currentPlayer = p1;\n    addEvents();\n    altScoreBoard();\n  };\n\n  var initForm = function initForm() {\n    _uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].printSignUp(prepareBoard, createPlayers);\n  };\n\n  return {\n    initForm: initForm\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameControl);\n\n//# sourceURL=webpack:///./src/gamecontrol.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uicontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uicontrol */ \"./src/uicontrol.js\");\n/* harmony import */ var _gamecontrol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamecontrol */ \"./src/gamecontrol.js\");\n\n\n\n_uicontrol__WEBPACK_IMPORTED_MODULE_1__[\"default\"].printBoard();\n_gamecontrol__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initForm();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar player = function player(name, symbol) {\n  var score = 0;\n\n  var getName = function getName() {\n    return name;\n  };\n\n  var getSymbol = function getSymbol() {\n    return symbol;\n  };\n\n  var getScore = function getScore() {\n    return score;\n  };\n\n  var win = function win() {\n    score += 1;\n    return score;\n  };\n\n  return {\n    getName: getName,\n    getSymbol: getSymbol,\n    getScore: getScore,\n    win: win\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ }),

/***/ "./src/uicontrol.js":
/*!**************************!*\
  !*** ./src/uicontrol.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar UserInterfaceControl = function () {\n  var printSignUp = function printSignUp(prepareBoard, makePlayers) {\n    var signUp = document.getElementById('signup_template');\n    var clon = signUp.content.cloneNode(true);\n    document.getElementById('divGameControls').appendChild(clon);\n    document.getElementById('divHeaderControls').innerHTML = \"Players' names\";\n    document.getElementById('start_game').addEventListener('click', function () {\n      var p1Name = document.getElementById('player1').value;\n      var p2Name = document.getElementById('player2').value;\n      document.getElementById('invalid-p1').className = 'alert alert-danger d-none';\n      document.getElementById('invalid-p2').className = 'alert alert-danger d-none';\n\n      if (p1Name.length > 0 && p2Name.length > 0) {\n        makePlayers(p1Name, p2Name);\n        prepareBoard();\n        document.getElementById('divBoardCard').className = 'card mr-3';\n      } else {\n        if (p1Name.length === 0) {\n          document.getElementById('invalid-p1').className = 'alert alert-danger';\n        }\n\n        if (p2Name.length === 0) {\n          document.getElementById('invalid-p2').className = 'alert alert-danger';\n        }\n      }\n    });\n  };\n\n  var printBoard = function printBoard() {\n    var gameBoard = document.getElementById('game_board');\n    var clon = gameBoard.content.cloneNode(true);\n    document.getElementById('divGameBoard').appendChild(clon);\n    document.getElementById('divHeaderGameBoard').innerHTML = \"Let's play!\";\n  };\n\n  var printScoreBoard = function printScoreBoard(player1, player2, enable, boarReset) {\n    var score = document.getElementById('score_board');\n    score.content.querySelector('#players_match').innerHTML = \"\".concat(player1.getName(), \" V.S. \").concat(player2.getName());\n    score.content.querySelector('#player1_score').innerHTML = \"\".concat(player1.getName(), \": \").concat(player1.getScore(), \" victories.\");\n    score.content.querySelector('#player2_score').innerHTML = \"\".concat(player2.getName(), \": \").concat(player2.getScore(), \" victories.\");\n    var clon = score.content.cloneNode(true);\n    document.getElementById('divGameControls').innerHTML = '';\n    document.getElementById('divGameControls').appendChild(clon);\n    document.getElementById('btnResetBoard').addEventListener('click', function () {\n      boarReset();\n\n      for (var i = 0; i < 9; i += 1) {\n        document.getElementById(\"cell_\".concat(i)).innerHTML = ' ';\n      }\n\n      document.getElementById('divHeaderGameBoard').innerHTML = \"Let's play!!\";\n      document.getElementById('divHeaderGameBoard').className = 'card-header';\n      enable();\n    });\n    document.getElementById('divHeaderControls').innerHTML = 'Game Score';\n  };\n\n  var printWinMsg = function printWinMsg(player) {\n    document.getElementById('divHeaderGameBoard').innerHTML = \"\".concat(player.getName(), \" wins!\");\n    document.getElementById('divHeaderGameBoard').className = 'font-weight-bold text-white card-header bg-success';\n  };\n\n  var gameDraw = function gameDraw() {\n    document.getElementById('divHeaderGameBoard').innerHTML = \"It's a draw!\";\n    document.getElementById('divHeaderGameBoard').className = 'font-weight-bold card-header bg-warning';\n  };\n\n  var setSymbolOnBoard = function setSymbolOnBoard(index, player) {\n    document.getElementById(\"cell_\".concat(index)).innerHTML = player.getSymbol();\n  };\n\n  var addBoardEvents = function addBoardEvents(clickMethod) {\n    var _loop = function _loop(i) {\n      document.getElementById(\"cell_\".concat(i)).addEventListener('click', function () {\n        clickMethod(i);\n      });\n    };\n\n    for (var i = 0; i < 9; i += 1) {\n      _loop(i);\n    }\n  };\n\n  return {\n    printSignUp: printSignUp,\n    printBoard: printBoard,\n    printScoreBoard: printScoreBoard,\n    printWinMsg: printWinMsg,\n    gameDraw: gameDraw,\n    setSymbolOnBoard: setSymbolOnBoard,\n    addBoardEvents: addBoardEvents\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserInterfaceControl);\n\n//# sourceURL=webpack:///./src/uicontrol.js?");

/***/ })

/******/ });