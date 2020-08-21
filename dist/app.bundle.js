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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uicontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uicontrol */ \"./src/uicontrol.js\");\n/* harmony import */ var _gamecontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamecontrol */ \"./src/gamecontrol.js\");\n\n\n_uicontrol__WEBPACK_IMPORTED_MODULE_0__[\"default\"].printBoard();\n_gamecontrol__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initForm();\n\n//# sourceURL=webpack:///./src/index.js?");

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