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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nbRows: 20,\n  nbColumns: 32,\n  size: 18,\n  refreshRate: 100,\n  bgColor: '#4a4a61',\n  colors: {\n    t: '#8bc34a',\n    o: '#ffef64',\n    i: '#ff9800',\n    s: '#03a9f4',\n    z: '#03a9f4',\n    l: '#f44336'\n  },\n  blocks: {\n    /**\n     * ⬜⬜\n     * ⬜⬜\n     */\n    o: [\n      [[1, 1], [1, 2], [2, 1], [2, 2]]\n    ],\n    /**\n     * ⬜⬜⬜⬜\n     */\n    i: [\n      [[0, 1], [1, 1], [2, 1], [3, 1]],\n      [[2, 0], [2, 1], [2, 2], [2, 3]]\n    ],\n    /**\n     *    ⬜⬜\n     * ⬜⬜\n     */\n    s: [\n      [[1, 2], [2, 1], [2, 2], [3, 1]],\n      [[2, 0], [2, 1], [3, 1], [3, 2]]\n    ],\n    /**\n     * ⬜⬜\n     *    ⬜⬜\n     */\n    z: [\n      [[1, 1], [2, 1], [2, 2], [3, 2]],\n      [[2, 1], [2, 2], [3, 0], [3, 1]]\n    ],\n    /**\n     * ⬜⬜⬜\n     * ⬜\n     */\n    l: [\n      [[1, 1], [1, 2], [2, 1], [3, 1]],\n      [[2, 0], [2, 1], [2, 2], [3, 2]],\n      [[1, 1], [2, 1], [3, 1], [3, 0]],\n      [[1, 0], [2, 0], [2, 1], [2, 2]]\n    ],\n    /**\n     * ⬜⬜⬜\n     *      ⬜\n     */\n    j: [\n      [[1, 1], [2, 1], [3, 1], [3, 2]],\n      [[2, 0], [2, 1], [2, 2], [3, 0]],\n      [[0, 1], [1, 1], [2, 1], [3, 1]],\n      [[1, 2], [2, 0], [2, 1], [2, 2]]\n    ],\n    /**\n     * ⬜⬜⬜\n     *   ⬜\n     */\n    t: [\n      [[1, 1], [2, 1], [3, 1], [2, 2]],\n      [[2, 0], [2, 1], [2, 2], [3, 1]],\n      [[1, 1], [2, 1], [3, 1], [2, 0]],\n      [[1, 1], [2, 0], [2, 1], [2, 2]]\n    ]\n  }\n});\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: drawBoard, drawPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBoard\", function() { return drawBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPiece\", function() { return drawPiece; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nconst { bgColor, blocks, size } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\nconst canvas = document.getElementById('canvas')\nconst ctx = canvas.getContext('2d')\n\n/**\n * Draws a single square block\n *\n * @param {Integer} x      X position\n * @param {Integer} y      Y position\n * @param {String}  color  Color\n */\nconst drawBlock = (x, y, color) => {\n  ctx.beginPath()\n  ctx.rect(x * size, y * size, size, size)\n  ctx.fillStyle = color || bgColor\n  ctx.fill()\n  ctx.closePath()\n}\n\n/**\n * Draws the board composed of background and fixed pieces\n *\n * @param {Array} board  Board matrix\n */\nconst drawBoard = board => {\n  for (const x in board)\n    for (const y in board[x])\n      drawBlock(x, y, board[x][y])\n}\n\n/**\n * Draws a piece\n *\n * @param {Piece} piece Piece object\n */\nconst drawPiece = piece => {\n  for (const [x, y] of blocks[piece.type][piece.rotation])\n    drawBlock(piece.x + x, piece.y + y, piece.color)\n}\n\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ \"./src/draw.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\n\nconst { nbRows, nbColumns, refreshRate, blocks } = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\nlet piece\nlet time = new Date().getTime()\n// let board = new Array(nbRows).fill(\n//   new Array(nbColumns).fill(null)\n// )\nlet board = new Array(nbRows)\nfor (let i = 0; i < nbColumns; ++i) board[i] = new Array(nbColumns).fill(null)\n\nconst render = () => {\n  if (piece && piece.isCollided(board)) setPiece()\n  if (!piece) piece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  Object(_draw__WEBPACK_IMPORTED_MODULE_1__[\"drawBoard\"])(board)\n  Object(_draw__WEBPACK_IMPORTED_MODULE_1__[\"drawPiece\"])(piece)\n}\n\n/**\n * Main game loop\n */\nconst loop = () => {\n  const now = new Date().getTime()\n  const dt = now - (time || now)\n  requestAnimationFrame(loop)\n  if (dt > refreshRate) {\n    time = now\n    piece.move(0, 1)\n  }\n  render()\n}\n\nloop()\n\n/**\n * Sets the piece on the board\n * Then it cannot be moved anymore\n */\nconst setPiece = () => {\n  for (const [x, y] of blocks[piece.type][piece.rotation])\n    board[piece.x + x][piece.y + y - 1] = piece.color\n  piece = null\n}\n\n/**\n * Keyboard commands:\n * - Left arrow   -> move left\n * - Top arrow    -> rotate piece\n * - Right arrow  -> move right\n * - Bottom arrow -> move down faster\n */\ndocument.addEventListener('keydown', event => {\n  if (event.keyCode === 37) piece.move(-1, 0)\n  else if (event.keyCode === 38) piece.rotate()\n  else if (event.keyCode === 39) piece.move(1, 0)\n  else if (event.keyCode === 40) piece.move(0, 1)\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Piece; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nconst { nbRows, nbColumns, colors, blocks } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n/**\n * Returning a random item from an array\n *\n * @param  {Array} array  an array\n * @return {item}         a random item from the array\n */\nconst pickRandom = (array) => array[Math.floor(Math.random() * array.length)]\n\nclass Piece {\n  constructor () {\n    this.x = nbRows / 2\n    this.y = 0\n    this.rotation = 0\n    this.type = pickRandom(Object.keys(blocks))\n    this.color = colors[this.type]\n    this.isActive = true\n  }\n\n  move (x = 0, y = 0) {\n    this.x += x\n    this.y += y\n  }\n\n  rotate () {\n    if (blocks[this.type][this.rotation + 1]) this.rotation++\n    else this.rotation = 0\n  }\n\n  isCollided (board) {\n    if (this.y > nbColumns - 7) return true\n    for (const [blockX, blockY] of blocks[this.type][this.rotation])\n      if (!board[this.x + blockX] || board[this.x + blockX][this.y + blockY]) return true\n    return false\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });