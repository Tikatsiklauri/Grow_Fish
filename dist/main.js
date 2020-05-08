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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fish; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fish = /*#__PURE__*/function () {
  function Fish(ctx) {
    _classCallCheck(this, Fish);

    this.ctx = ctx, this.image = document.getElementById("littleFish"), this.height = 50, this.width = 35;
  }

  _createClass(Fish, [{
    key: "draw",
    value: function draw(xMouse, yMouse) {
      // this.ctx.fillStyle = "red"
      var xCenter = xMouse - this.width / 2;
      var yCenter = yMouse - this.height / 2;
      this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width); // this.ctx.fillRect(xMouse, yMouse, this.image.height, this.image.width)

      if (this.xMouse < 0) this.xMouse = 0;
    }
  }]);

  return Fish;
}();



/***/ }),

/***/ "./src/images/newfish.png":
/*!********************************!*\
  !*** ./src/images/newfish.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/newfish.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish */ "./src/fish.js");
/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other_fish */ "./src/other_fish.js");
 // import './images/newfishsmallflip (1).png';



var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 920;
var GAME_HEIGHT = 540;
var fish = new _fish__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
var otherFish = new _other_fish__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
var otherFishies = otherFish.populateFish();
var xMouse;
var yMouse;
var mouse = document.addEventListener('mousemove', function (e) {
  var rect = canvas.getBoundingClientRect();
  xMouse = e.clientX - rect.left;
  yMouse = e.clientY - rect.top;
});

var gameLoop = function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  fish.draw(xMouse, yMouse);
  otherFish.drawFish();
  otherFishies.forEach(function (f) {
    return f.drawFish();
  });
  otherFishies.forEach(function (f) {
    return f.handleSwim();
  });
  otherFishies.forEach(function (f) {
    return f.handleCollisions(fish, xMouse, yMouse);
  });
  requestAnimationFrame(gameLoop);
};

gameLoop();

/***/ }),

/***/ "./src/other_fish.js":
/*!***************************!*\
  !*** ./src/other_fish.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OtherFish; });
/* harmony import */ var _images_newfish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/newfish.png */ "./src/images/newfish.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var OtherFish = /*#__PURE__*/function () {
  function OtherFish(ctx, fish, xMouse, yMouse) {
    _classCallCheck(this, OtherFish);

    this.fishSizes = {
      30: '20',
      40: '25',
      50: '35',
      60: '45',
      80: '65',
      100: '85',
      120: '105',
      130: '115'
    };
    this.keys = Object.keys(this.fishSizes);
    this.ctx = ctx;
    this.fishImage = new Image();
    this.fishImage.src = _images_newfish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.height = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.width = this.fishSizes[this.height];
    this.x = this.getRandomInt(-300, -30);
    this.y = this.getRandomInt(20, 800);
    this.xVelocity = this.getVelocity(1, 2.2);
    this.yVelocity = this.getVelocity(1, 1.5);
    this.handleCollisions = this.handleCollisions.bind(this);
  }

  _createClass(OtherFish, [{
    key: "getRandomInt",
    value: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: "getVelocity",
    value: function getVelocity(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: "handleCollisions",
    value: function handleCollisions(fish, xMouse, yMouse) {
      var xDistance = xMouse - this.x;
      var yDistance = yMouse - this.y;
      var dist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

      if (dist < fish.width / 2) {
        console.log(dist); //    debugger;
        //        if (this.height < fish.height) {
        //             fish.width += 0.5;
        //             fish.height += 0.5;
        //             this.x = this.getRandomInt(-500, -50);
        //             this.y = this.getRandomInt(-300, -100);
        //    } else {
        //             alert("Game Over");
        //             clearInterval(interval);
        //         }
      }
    }
  }, {
    key: "populateFish",
    value: function populateFish() {
      var fishies = [];
      var maxfish = 3;

      for (var i = 0; i < maxfish; i++) {
        fishies.push(new OtherFish(this.ctx));
      }

      return fishies;
    }
  }, {
    key: "drawFish",
    value: function drawFish() {
      this.ctx.drawImage(this.fishImage, this.x, this.y, this.height, this.width);
    }
  }, {
    key: "handleSwim",
    value: function handleSwim() {
      if (this.x < -200) {
        this.xVelocity = this.getVelocity(1, 1.2);
      } else if (this.x > 920) {
        this.xVelocity = this.getVelocity(-1, -1.2);
      }

      if (this.y < -100) {
        this.yVelocity = this.getVelocity(0.5, 1);
      } else if (this.y > 600) {
        this.yVelocity = this.getVelocity(-0.5, -1);
      }

      this.x += this.xVelocity;
      this.y += this.yVelocity;
    }
  }]);

  return OtherFish;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9uZXdmaXNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL290aGVyX2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkZpc2giLCJjdHgiLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aWR0aCIsInhNb3VzZSIsInlNb3VzZSIsInhDZW50ZXIiLCJ5Q2VudGVyIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImZpc2giLCJvdGhlckZpc2giLCJPdGhlckZpc2giLCJvdGhlckZpc2hpZXMiLCJwb3B1bGF0ZUZpc2giLCJtb3VzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZHJhdyIsImRyYXdGaXNoIiwiZm9yRWFjaCIsImYiLCJoYW5kbGVTd2ltIiwiaGFuZGxlQ29sbGlzaW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpc2hTaXplcyIsImtleXMiLCJPYmplY3QiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsImZpc2hJbWFnZVNvdXJjZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIngiLCJnZXRSYW5kb21JbnQiLCJ5IiwieFZlbG9jaXR5IiwiZ2V0VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJiaW5kIiwibWluIiwibWF4IiwiY2VpbCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImRpc3QiLCJzcXJ0IiwicG93IiwiY29u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QWIsRUFBa0I7QUFDckIsYUFBS0csU0FBTCxHQUFpQixLQUFLQyxXQUFMLENBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxHQUF0QixDQUFqQjtBQUNIOztBQUFDLFVBQUksS0FBS0YsQ0FBTCxHQUFTLENBQUMsR0FBZCxFQUFtQjtBQUNqQixhQUFLRyxTQUFMLEdBQWlCLEtBQUtELFdBQUwsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBakI7QUFDSCxPQUZDLE1BRUssSUFBSSxLQUFLRixDQUFMLEdBQVMsR0FBYixFQUFrQjtBQUNyQixhQUFLRyxTQUFMLEdBQWlCLEtBQUtELFdBQUwsQ0FBaUIsQ0FBQyxHQUFsQixFQUF1QixDQUFDLENBQXhCLENBQWpCO0FBQ0g7O0FBQ0QsV0FBS0osQ0FBTCxJQUFVLEtBQUtHLFNBQWY7QUFDQSxXQUFLRCxDQUFMLElBQVUsS0FBS0csU0FBZjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlFTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHgsXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdHRsZUZpc2hcIiksXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTAsXG4gICAgICAgIHRoaXMud2lkdGggPSAzNVxuICAgIH1cblxuICAgIGRyYXcoeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICBcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB4TW91c2UgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHlNb3VzZSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeENlbnRlciwgeUNlbnRlciwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG5cbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoeE1vdXNlLCB5TW91c2UsIHRoaXMuaW1hZ2UuaGVpZ2h0LCB0aGlzLmltYWdlLndpZHRoKVxuICAgICAgICBpZiAodGhpcy54TW91c2UgPCAwKSB0aGlzLnhNb3VzZSA9IDA7XG5cbiAgICB9XG5cbiAgIFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9uZXdmaXNoLnBuZ1wiOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG4vLyBpbXBvcnQgJy4vaW1hZ2VzL25ld2Zpc2hzbWFsbGZsaXAgKDEpLnBuZyc7XG5pbXBvcnQgRmlzaCBmcm9tICcuL2Zpc2gnO1xuaW1wb3J0IE90aGVyRmlzaCBmcm9tICcuL290aGVyX2Zpc2gnO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU2NyZWVuXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBHQU1FX1dJRFRIID0gOTIwO1xuY29uc3QgR0FNRV9IRUlHSFQgPSA1NDA7XG5cbmNvbnN0IGZpc2ggPSBuZXcgRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaCA9IG5ldyBPdGhlckZpc2goY3R4KTtcbmxldCBvdGhlckZpc2hpZXMgPSBvdGhlckZpc2gucG9wdWxhdGVGaXNoKCk7XG5cbmxldCB4TW91c2U7XG5sZXQgeU1vdXNlO1xuXG5sZXQgbW91c2UgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB4TW91c2UgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgeU1vdXNlID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG59KVxuXG5cblxuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgZmlzaC5kcmF3KHhNb3VzZSwgeU1vdXNlKTtcbiAgICBvdGhlckZpc2guZHJhd0Zpc2goKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuZHJhd0Zpc2goKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZVN3aW0oKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpKTtcbiAgICBcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cblxuXG5cbmdhbWVMb29wKCk7XG5cblxuIiwiaW1wb3J0IGZpc2hJbWFnZVNvdXJjZSBmcm9tICcuL2ltYWdlcy9uZXdmaXNoLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyRmlzaCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICB0aGlzLmZpc2hTaXplcyA9IHsgMzA6ICcyMCcsIDQwOiAnMjUnLCA1MDogJzM1JywgNjA6ICc0NScsIDgwOiAnNjUnLCAxMDA6ICc4NScsIDEyMDogJzEwNScsIDEzMDogJzExNScgfTtcbiAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModGhpcy5maXNoU2l6ZXMpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gZmlzaEltYWdlU291cmNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMua2V5c1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5rZXlzLmxlbmd0aCkpXTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZmlzaFNpemVzW3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nZXRSYW5kb21JbnQoLTMwMCwgLTMwKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nZXRSYW5kb21JbnQoMjAsIDgwMCk7XG4gICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgxLCAyLjIpO1xuICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMS41KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDb2xsaXNpb25zID0gdGhpcy5oYW5kbGVDb2xsaXNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuXG4gICAgZ2V0VmVsb2NpdHkobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIGxldCB4RGlzdGFuY2UgPSB4TW91c2UgLSB0aGlzLng7XG4gICAgICAgIGxldCB5RGlzdGFuY2UgPSB5TW91c2UgLSB0aGlzLnk7XG5cbiAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoTWF0aC5wb3coeERpc3RhbmNlLCAyKSArIE1hdGgucG93KHlEaXN0YW5jZSwgMikpO1xuXG4gICAgICAgaWYgKGRpc3QgPCAoZmlzaC53aWR0aCAvIDIpKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKGRpc3QpXG4gICAgICAgIC8vICAgIGRlYnVnZ2VyO1xuICAgIC8vICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgIC8vICAgICAgICAgICAgIGZpc2gud2lkdGggKz0gMC41O1xuICAgIC8vICAgICAgICAgICAgIGZpc2guaGVpZ2h0ICs9IDAuNTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtNTApO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMDAsIC0xMDApO1xuICAgIC8vICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoXCJHYW1lIE92ZXJcIik7XG4gICAgLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaXNoKCkge1xuICAgICBcbiAgICAgICAgbGV0IGZpc2hpZXMgPSBbXTtcbiAgICAgICAgbGV0IG1heGZpc2ggPSAzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heGZpc2g7IGkrKykge1xuICAgICAgICAgICAgZmlzaGllcy5wdXNoKG5ldyBPdGhlckZpc2godGhpcy5jdHgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXNoaWVzO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3RmlzaCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZmlzaEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTd2ltKCkge1xuICAgICAgICBpZiAodGhpcy54IDwgLTIwMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDEuMilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPiA5MjApIHtcbiAgICAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMSwgLTEuMilcbiAgICAgICAgfSBpZiAodGhpcy55IDwgLTEwMCkge1xuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDAuNSwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55ID4gNjAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoLTAuNSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnhWZWxvY2l0eVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy55VmVsb2NpdHlcbiAgICB9XG4gIFxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==