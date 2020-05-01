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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vdGhlcl9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJGaXNoIiwiY3R4IiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4TW91c2UiLCJ5TW91c2UiLCJ4Q2VudGVyIiwieUNlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmaXNoIiwib3RoZXJGaXNoIiwiT3RoZXJGaXNoIiwib3RoZXJGaXNoaWVzIiwicG9wdWxhdGVGaXNoIiwibW91c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3RmlzaCIsImZvckVhY2giLCJmIiwiaGFuZGxlU3dpbSIsImhhbmRsZUNvbGxpc2lvbnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaXNoU2l6ZXMiLCJrZXlzIiwiT2JqZWN0IiwiZmlzaEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ4IiwiZ2V0UmFuZG9tSW50IiwieSIsInhWZWxvY2l0eSIsImdldFZlbG9jaXR5IiwieVZlbG9jaXR5IiwibWluIiwibWF4IiwiY2VpbCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImRpc3QiLCJzcXJ0IiwicG93IiwiZmlzaGllcyIsIm1heGZpc2giLCJpIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7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QyxHQUFkLEVBQW1CO0FBQ2pCLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0QsV0FBTCxDQUFpQixHQUFqQixFQUFzQixDQUF0QixDQUFqQjtBQUNILE9BRkMsTUFFSyxJQUFJLEtBQUtGLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ3JCLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0QsV0FBTCxDQUFpQixDQUFDLEdBQWxCLEVBQXVCLENBQUMsQ0FBeEIsQ0FBakI7QUFDSDs7QUFDRCxXQUFLSixDQUFMLElBQVUsS0FBS0csU0FBZjtBQUNBLFdBQUtELENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eCxcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl0dGxlRmlzaFwiKSxcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MCxcbiAgICAgICAgdGhpcy53aWR0aCA9IDM1XG4gICAgfVxuXG4gICAgZHJhdyh4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIFxuICAgICAgICBsZXQgeENlbnRlciA9IHhNb3VzZSAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIGxldCB5Q2VudGVyID0geU1vdXNlIC0gKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4Q2VudGVyLCB5Q2VudGVyLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcblxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh4TW91c2UsIHlNb3VzZSwgdGhpcy5pbWFnZS5oZWlnaHQsIHRoaXMuaW1hZ2Uud2lkdGgpXG5cblxuICAgIH1cblxuICAgXG5cbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEZpc2ggZnJvbSAnLi9maXNoJztcbmltcG9ydCBPdGhlckZpc2ggZnJvbSAnLi9vdGhlcl9maXNoJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgR0FNRV9XSURUSCA9IDkyMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNTQwO1xuXG5jb25zdCBmaXNoID0gbmV3IEZpc2goY3R4KTtcbmxldCBvdGhlckZpc2ggPSBuZXcgT3RoZXJGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoaWVzID0gb3RoZXJGaXNoLnBvcHVsYXRlRmlzaCgpO1xuXG5sZXQgeE1vdXNlO1xubGV0IHlNb3VzZTtcblxubGV0IG1vdXNlID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeE1vdXNlID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgIHlNb3VzZSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xufSlcblxuXG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGZpc2guZHJhdyh4TW91c2UsIHlNb3VzZSlcbiAgICBvdGhlckZpc2guZHJhd0Zpc2goKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuZHJhd0Zpc2goKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZVN3aW0oKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpKTtcbiAgICBcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuXG5cblxuZ2FtZUxvb3AoKTtcblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyRmlzaCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICB0aGlzLmZpc2hTaXplcyA9IHsgMzA6ICcyMCcsIDQwOiAnMjUnLCA1MDogJzM1JywgNjA6ICc0NScsIDgwOiAnNjUnLCAxMDA6ICc4NScsIDEyMDogJzEwNScsIDEzMDogJzExNScgfSxcbiAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModGhpcy5maXNoU2l6ZXMpLFxuICAgICAgICB0aGlzLmN0eCA9IGN0eCxcbiAgICAgICAgdGhpcy5maXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL25ld2Zpc2hzbWFsbC5wbmdcIixcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmtleXNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMua2V5cy5sZW5ndGgpKV0sXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmZpc2hTaXplc1t0aGlzLmhlaWdodF0sXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMDAsIC0zMCksXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KDIwLCA4MDApLFxuICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMi4yKVxuICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMS41KVxuICAgIH1cblxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGdldFZlbG9jaXR5KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuXG4gICAgaGFuZGxlQ29sbGlzaW9ucyhmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeERpc3RhbmNlID0geE1vdXNlIC0gdGhpcy54O1xuICAgICAgICBsZXQgeURpc3RhbmNlID0geU1vdXNlIC0gdGhpcy55O1xuXG4gICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoTWF0aC5wb3coeERpc3RhbmNlLCAyKSArIE1hdGgucG93KHlEaXN0YW5jZSwgMikpO1xuXG4gICAgICAgaWYgKGRpc3QgPCAoZmlzaC53aWR0aCAvIDIpICsgKHRoaXMud2lkdGggLyAyKSAgJiZcbiAgICAgICAgICAgIGRpc3QgPCAoZmlzaC5oZWlnaHQgLyAyKSArICh0aGlzLmhlaWdodCAvIDIpICYmXG4gICAgICAgICAgICB0aGlzLndpZHRoIDwgZmlzaC53aWR0aCAmJiB0aGlzLmhlaWdodCA8IGZpc2guaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgZmlzaC53aWR0aCArPSAwLjU7XG4gICAgICAgICAgICAgICAgZmlzaC5oZWlnaHQgKz0gMC41O1xuICAgICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpc2goKSB7XG4gICAgIFxuICAgICAgICBsZXQgZmlzaGllcyA9IFtdO1xuICAgICAgICBsZXQgbWF4ZmlzaCA9IDMwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heGZpc2g7IGkrKykge1xuICAgICAgICAgICAgZmlzaGllcy5wdXNoKG5ldyBPdGhlckZpc2godGhpcy5jdHgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXNoaWVzO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3RmlzaCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZmlzaEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTd2ltKCkge1xuICAgICAgICBpZiAodGhpcy54IDwgLTIwMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDMuNSwgNC4yKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA+IDkyMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0zLCAtNC4yKVxuICAgICAgICB9IGlmICh0aGlzLnkgPCAtMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMC41LCAtMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eVxuICAgIH1cbiAgXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9