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

function gameLoop() {
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
}

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
    }, this.keys = Object.keys(this.fishSizes), this.ctx = ctx, this.fishImage = new Image(), this.fishImage.src = "../assets/images/newfishsmall.png", this.height = this.keys[Math.floor(Math.random() * this.keys.length)], this.width = this.fishSizes[this.height], this.x = this.getRandomInt(-300, -30), this.y = this.getRandomInt(20, 800), this.xVelocity = this.getVelocity(1, 2.2);
    this.yVelocity = this.getVelocity(1, 1.5);
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

      if (dist < fish.width / 2 + this.width / 2 && dist < fish.height / 2 + this.height / 2 && this.width < fish.width && this.height < fish.height) {
        fish.width += 0.5;
        fish.height += 0.5;
        this.x = this.getRandomInt(-500, -50);
        this.y = this.getRandomInt(-300, -100);
      } else if (dist < fish.width / 2 + this.width / 2 && dist < fish.height / 2 + this.height / 2 && this.width > fish.width && this.height > fish.height) {
        alert("Game Over");
        clearInterval(interval);
      }
    }
  }, {
    key: "populateFish",
    value: function populateFish() {
      var fishies = [];
      var maxfish = 30;

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
        this.xVelocity = this.getVelocity(3.5, 4.2);
      } else if (this.x > 920) {
        this.xVelocity = this.getVelocity(-3, -4.2);
      }

      if (this.y < -100) {
        this.yVelocity = this.getVelocity(0.5, 3);
      } else if (this.y > 600) {
        this.yVelocity = this.getVelocity(-0.5, -3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vdGhlcl9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJGaXNoIiwiY3R4IiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4TW91c2UiLCJ5TW91c2UiLCJ4Q2VudGVyIiwieUNlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmaXNoIiwib3RoZXJGaXNoIiwiT3RoZXJGaXNoIiwib3RoZXJGaXNoaWVzIiwicG9wdWxhdGVGaXNoIiwibW91c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3RmlzaCIsImZvckVhY2giLCJmIiwiaGFuZGxlU3dpbSIsImhhbmRsZUNvbGxpc2lvbnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaXNoU2l6ZXMiLCJrZXlzIiwiT2JqZWN0IiwiZmlzaEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ4IiwiZ2V0UmFuZG9tSW50IiwieSIsInhWZWxvY2l0eSIsImdldFZlbG9jaXR5IiwieVZlbG9jaXR5IiwibWluIiwibWF4IiwiY2VpbCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImRpc3QiLCJzcXJ0IiwicG93IiwiYWxlcnQiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJmaXNoaWVzIiwibWF4ZmlzaCIsImkiLCJwdXNoIl0s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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHgsXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdHRsZUZpc2hcIiksXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTAsXG4gICAgICAgIHRoaXMud2lkdGggPSAzNVxuICAgIH1cblxuICAgIGRyYXcoeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICBcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB4TW91c2UgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHlNb3VzZSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeENlbnRlciwgeUNlbnRlciwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG5cbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoeE1vdXNlLCB5TW91c2UsIHRoaXMuaW1hZ2UuaGVpZ2h0LCB0aGlzLmltYWdlLndpZHRoKVxuICAgICAgICBpZiAodGhpcy54TW91c2UgPCAwKSB0aGlzLnhNb3VzZSA9IDA7XG5cbiAgICB9XG5cbiAgIFxuXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVTY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IEdBTUVfV0lEVEggPSA5MjA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDU0MDtcblxuY29uc3QgZmlzaCA9IG5ldyBGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoID0gbmV3IE90aGVyRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcblxubGV0IHhNb3VzZTtcbmxldCB5TW91c2U7XG5cbmxldCBtb3VzZSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHhNb3VzZSA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICB5TW91c2UgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcbn0pXG5cblxuXG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBmaXNoLmRyYXcoeE1vdXNlLCB5TW91c2UpXG4gICAgb3RoZXJGaXNoLmRyYXdGaXNoKCk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmRyYXdGaXNoKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVTd2ltKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSk7XG4gICAgXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cblxuXG5cbmdhbWVMb29wKCk7XG5cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdGhlckZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgdGhpcy5maXNoU2l6ZXMgPSB7IDMwOiAnMjAnLCA0MDogJzI1JywgNTA6ICczNScsIDYwOiAnNDUnLCA4MDogJzY1JywgMTAwOiAnODUnLCAxMjA6ICcxMDUnLCAxMzA6ICcxMTUnIH0sXG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmlzaFNpemVzKSxcbiAgICAgICAgdGhpcy5jdHggPSBjdHgsXG4gICAgICAgIHRoaXMuZmlzaEltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9uZXdmaXNoc21hbGwucG5nXCIsXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5rZXlzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmtleXMubGVuZ3RoKSldLFxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5maXNoU2l6ZXNbdGhpcy5oZWlnaHRdLFxuICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtMzAwLCAtMzApLFxuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgyMCwgODAwKSxcbiAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDIuMilcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDEuNSlcbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICBnZXRWZWxvY2l0eShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgbGV0IHhEaXN0YW5jZSA9IHhNb3VzZSAtIHRoaXMueDtcbiAgICAgICAgbGV0IHlEaXN0YW5jZSA9IHlNb3VzZSAtIHRoaXMueTtcblxuICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChNYXRoLnBvdyh4RGlzdGFuY2UsIDIpICsgTWF0aC5wb3coeURpc3RhbmNlLCAyKSk7XG5cbiAgICAgICBpZiAoZGlzdCA8IChmaXNoLndpZHRoIC8gMikgKyAodGhpcy53aWR0aCAvIDIpICAmJlxuICAgICAgICAgICAgZGlzdCA8IChmaXNoLmhlaWdodCAvIDIpICsgKHRoaXMuaGVpZ2h0IC8gMikgJiZcbiAgICAgICAgICAgIHRoaXMud2lkdGggPCBmaXNoLndpZHRoICYmIHRoaXMuaGVpZ2h0IDwgZmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBmaXNoLndpZHRoICs9IDAuNTtcbiAgICAgICAgICAgICAgICBmaXNoLmhlaWdodCArPSAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nZXRSYW5kb21JbnQoLTUwMCwgLTUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgtMzAwLCAtMTAwKTtcbiAgICAgICB9IGVsc2UgaWYgKGRpc3QgPCAoZmlzaC53aWR0aCAvIDIpICsgKHRoaXMud2lkdGggLyAyKSAmJlxuICAgICAgICAgICAgZGlzdCA8IChmaXNoLmhlaWdodCAvIDIpICsgKHRoaXMuaGVpZ2h0IC8gMikgJiZcbiAgICAgICAgICAgIHRoaXMud2lkdGggPiBmaXNoLndpZHRoICYmIHRoaXMuaGVpZ2h0ID4gZmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkdhbWUgT3ZlclwiKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpc2goKSB7XG4gICAgIFxuICAgICAgICBsZXQgZmlzaGllcyA9IFtdO1xuICAgICAgICBsZXQgbWF4ZmlzaCA9IDMwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heGZpc2g7IGkrKykge1xuICAgICAgICAgICAgZmlzaGllcy5wdXNoKG5ldyBPdGhlckZpc2godGhpcy5jdHgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXNoaWVzO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3RmlzaCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZmlzaEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTd2ltKCkge1xuICAgICAgICBpZiAodGhpcy54IDwgLTIwMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDMuNSwgNC4yKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA+IDkyMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0zLCAtNC4yKVxuICAgICAgICB9IGlmICh0aGlzLnkgPCAtMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMC41LCAtMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eVxuICAgIH1cbiAgXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9