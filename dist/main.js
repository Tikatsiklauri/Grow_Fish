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

/***/ "./src/images/newfishsmall.png":
/*!*************************************!*\
  !*** ./src/images/newfishsmall.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/newfishsmall.png");

/***/ }),

/***/ "./src/images/newfishsmallflip (1).png":
/*!*********************************************!*\
  !*** ./src/images/newfishsmallflip (1).png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/newfishsmallflip (1).png");

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
/* harmony import */ var _images_newfishsmallflip_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/newfishsmallflip (1).png */ "./src/images/newfishsmallflip (1).png");
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish */ "./src/fish.js");
/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other_fish */ "./src/other_fish.js");




var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 920;
var GAME_HEIGHT = 540;
var fish = new _fish__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
var otherFish = new _other_fish__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);
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
/* harmony import */ var _images_newfishsmall_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/newfishsmall.png */ "./src/images/newfishsmall.png");
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
    this.fishImage.src = _images_newfishsmall_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.height = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.width = this.fishSizes[this.height];
    this.x = this.getRandomInt(-300, -30);
    this.y = this.getRandomInt(20, 800);
    this.xVelocity = this.getVelocity(1, 2.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9uZXdmaXNoc21hbGwucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbmV3ZmlzaHNtYWxsZmxpcCAoMSkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXJfZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRmlzaCIsImN0eCIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwieE1vdXNlIiwieU1vdXNlIiwieENlbnRlciIsInlDZW50ZXIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZmlzaCIsIm90aGVyRmlzaCIsIk90aGVyRmlzaCIsIm90aGVyRmlzaGllcyIsInBvcHVsYXRlRmlzaCIsIm1vdXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJkcmF3IiwiZHJhd0Zpc2giLCJmb3JFYWNoIiwiZiIsImhhbmRsZVN3aW0iLCJoYW5kbGVDb2xsaXNpb25zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmlzaFNpemVzIiwia2V5cyIsIk9iamVjdCIsImZpc2hJbWFnZSIsIkltYWdlIiwic3JjIiwiZmlzaEltYWdlU291cmNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwieCIsImdldFJhbmRvbUludCIsInkiLCJ4VmVsb2NpdHkiLCJnZXRWZWxvY2l0eSIsInlWZWxvY2l0eSIsIm1pbiIsIm1heCIsImNlaWwiLCJ4RGlzdGFuY2UiLCJ5RGlzdGFuY2UiLCJkaXN0Iiwic3FydCIsInBvdyIsImFsZXJ0IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwiZmlzaGllcyIsIm1heGZpc2giLCJpIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsSTtBQUNqQixnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLEdBQUwsR0FBV0EsR0FBWCxFQUNBLEtBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRGIsRUFFQSxLQUFLQyxNQUFMLEdBQWMsRUFGZCxFQUdBLEtBQUtDLEtBQUwsR0FBYSxFQUhiO0FBSUg7Ozs7eUJBRUlDLE0sRUFBUUMsTSxFQUFRO0FBQ2pCO0FBRUEsVUFBSUMsT0FBTyxHQUFHRixNQUFNLEdBQUksS0FBS0QsS0FBTCxHQUFhLENBQXJDO0FBQ0EsVUFBSUksT0FB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R0FBbEIsRUFBdUIsQ0FBQyxDQUF4QixDQUFqQjtBQUNIOztBQUNELFdBQUtKLENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtHLFNBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUwsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlzaCB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4LFxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXR0bGVGaXNoXCIpLFxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwLFxuICAgICAgICB0aGlzLndpZHRoID0gMzVcbiAgICB9XG5cbiAgICBkcmF3KHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgXG4gICAgICAgIGxldCB4Q2VudGVyID0geE1vdXNlIC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgbGV0IHlDZW50ZXIgPSB5TW91c2UgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHhDZW50ZXIsIHlDZW50ZXIsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKVxuXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHhNb3VzZSwgeU1vdXNlLCB0aGlzLmltYWdlLmhlaWdodCwgdGhpcy5pbWFnZS53aWR0aClcbiAgICAgICAgaWYgKHRoaXMueE1vdXNlIDwgMCkgdGhpcy54TW91c2UgPSAwO1xuXG4gICAgfVxuXG4gICBcblxufSIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvbmV3ZmlzaHNtYWxsLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvbmV3ZmlzaHNtYWxsZmxpcCAoMSkucG5nXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvbmV3ZmlzaHNtYWxsZmxpcCAoMSkucG5nJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVTY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IEdBTUVfV0lEVEggPSA5MjA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDU0MDtcblxuY29uc3QgZmlzaCA9IG5ldyBGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoID0gbmV3IE90aGVyRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcblxubGV0IHhNb3VzZTtcbmxldCB5TW91c2U7XG5cbmxldCBtb3VzZSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHhNb3VzZSA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICB5TW91c2UgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcbn0pXG5cblxuXG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBmaXNoLmRyYXcoeE1vdXNlLCB5TW91c2UpXG4gICAgb3RoZXJGaXNoLmRyYXdGaXNoKCk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmRyYXdGaXNoKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVTd2ltKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSk7XG4gICAgXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cblxuXG5cbmdhbWVMb29wKCk7XG5cblxuIiwiaW1wb3J0IGZpc2hJbWFnZVNvdXJjZSBmcm9tICcuL2ltYWdlcy9uZXdmaXNoc21hbGwucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGZpc2gsIHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIHRoaXMuZmlzaFNpemVzID0geyAzMDogJzIwJywgNDA6ICcyNScsIDUwOiAnMzUnLCA2MDogJzQ1JywgODA6ICc2NScsIDEwMDogJzg1JywgMTIwOiAnMTA1JywgMTMwOiAnMTE1JyB9O1xuICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpc2hTaXplcyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBmaXNoSW1hZ2VTb3VyY2U7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5rZXlzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmtleXMubGVuZ3RoKSldO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5maXNoU2l6ZXNbdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtMzAwLCAtMzApO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgyMCwgODAwKTtcbiAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDIuMik7XG4gICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgxLCAxLjUpO1xuICAgIH1cblxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGdldFZlbG9jaXR5KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuXG4gICAgaGFuZGxlQ29sbGlzaW9ucyhmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeERpc3RhbmNlID0geE1vdXNlIC0gdGhpcy54O1xuICAgICAgICBsZXQgeURpc3RhbmNlID0geU1vdXNlIC0gdGhpcy55O1xuXG4gICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KE1hdGgucG93KHhEaXN0YW5jZSwgMikgKyBNYXRoLnBvdyh5RGlzdGFuY2UsIDIpKTtcblxuICAgICAgIGlmIChkaXN0IDwgKGZpc2gud2lkdGggLyAyKSArICh0aGlzLndpZHRoIC8gMikgICYmXG4gICAgICAgICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSAmJlxuICAgICAgICAgICAgdGhpcy53aWR0aCA8IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGZpc2gud2lkdGggKz0gMC41O1xuICAgICAgICAgICAgICAgIGZpc2guaGVpZ2h0ICs9IDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtNTApO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMDAsIC0xMDApO1xuICAgICAgIH0gZWxzZSBpZiAoZGlzdCA8IChmaXNoLndpZHRoIC8gMikgKyAodGhpcy53aWR0aCAvIDIpICYmXG4gICAgICAgICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSAmJlxuICAgICAgICAgICAgdGhpcy53aWR0aCA+IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPiBmaXNoLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBPdmVyXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlRmlzaCgpIHtcbiAgICAgXG4gICAgICAgIGxldCBmaXNoaWVzID0gW107XG4gICAgICAgIGxldCBtYXhmaXNoID0gMzA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4ZmlzaDsgaSsrKSB7XG4gICAgICAgICAgICBmaXNoaWVzLnB1c2gobmV3IE90aGVyRmlzaCh0aGlzLmN0eCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpc2hpZXM7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdGaXNoKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5maXNoSW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgICB9XG5cblxuICAgIGhhbmRsZVN3aW0oKSB7XG4gICAgICAgIGlmICh0aGlzLnggPCAtMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMy41LCA0LjIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ID4gOTIwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoLTMsIC00LjIpXG4gICAgICAgIH0gaWYgKHRoaXMueSA8IC0xMDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgwLjUsIDMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueSA+IDYwMCkge1xuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0wLjUsIC0zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsb2NpdHlcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5XG4gICAgfVxuICBcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=