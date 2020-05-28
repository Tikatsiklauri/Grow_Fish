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

    this.ctx = ctx;
    this.image = document.getElementById("littleFish");
    this.height = 60;
    this.width = 50;
  }

  _createClass(Fish, [{
    key: "draw",
    value: function draw(xMouse, yMouse) {
      var xCenter = xMouse - this.width / 2;
      var yCenter = yMouse - this.height / 2;

      if (xMouse < 0) {
        xCenter = xCenter - xCenter;
      }

      if (xMouse >= 920) {
        xCenter = 920 - this.width;
      }

      if (yMouse < 0) {
        yCenter = yCenter - yCenter;
      }

      if (yMouse >= 540) {
        yCenter = 540 - (this.height - 10);
      }

      this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width);
    }
  }]);

  return Fish;
}();



/***/ }),

/***/ "./src/images/roundfish-flip.png":
/*!***************************************!*\
  !*** ./src/images/roundfish-flip.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/roundfish-flip.png");

/***/ }),

/***/ "./src/images/roundfish.png":
/*!**********************************!*\
  !*** ./src/images/roundfish.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/roundfish.png");

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
  xMouse = e.clientX - rect.left; // console.log(xMouse);

  yMouse = e.clientY - rect.top; // console.log(yMouse);
});
var score = 0;

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
    if (f.handleCollisions(fish, xMouse, yMouse)) score += 1;
  });
  console.log(score);
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
/* harmony import */ var _images_roundfish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/roundfish.png */ "./src/images/roundfish.png");
/* harmony import */ var _images_roundfish_flip_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/roundfish-flip.png */ "./src/images/roundfish-flip.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var OtherFish = /*#__PURE__*/function () {
  function OtherFish(ctx, fish, xMouse, yMouse) {
    _classCallCheck(this, OtherFish);

    this.fishSizes = {
      40: '25',
      50: '35',
      60: '45',
      80: '65',
      100: '85',
      120: '105',
      130: '115',
      140: '125'
    };
    this.keys = Object.keys(this.fishSizes);
    this.ctx = ctx;
    this.fishImage = new Image();
    this.fishImage.src = _images_roundfish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.height = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.width = this.fishSizes[this.height];
    this.x = this.getRandomInt(-500, -100);
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
      var xCenter = xMouse - fish.width / 2;
      var yCenter = yMouse - fish.height / 2;
      var vectorX = xCenter + fish.width / 2 - (this.x + this.width / 2);
      var vectorY = yCenter + fish.height / 2 - (this.y + this.height / 2);
      var halfWidth = (fish.width / 2 + this.width / 2) / 1.3; // make up for abnormality in image sizing

      var halfHeight = (fish.height / 2 + this.height / 2) / 1.5; //^

      if (Math.abs(vectorX) < halfWidth && Math.abs(vectorY) < halfHeight) {
        if (this.width < fish.width && this.height < fish.height) {
          fish.width += 2;
          fish.height += 2;
          this.x = this.getRandomInt(-500, -50);
          this.y = this.getRandomInt(-300, -100);
          return true;
        } else {
          alert("Game Over");
          clearInterval(interval);
          return false;
        }
      }
    }
  }, {
    key: "populateFish",
    value: function populateFish() {
      var fishies = [];
      var maxfish = 5;

      for (var i = 0; i < maxfish; i++) {
        fishies.push(new OtherFish(this.ctx));
      }

      return fishies;
    }
  }, {
    key: "drawFish",
    value: function drawFish() {
      // this.ctx.fillRect(this.x, this.y, this.height, this.width)
      this.ctx.drawImage(this.fishImage, this.x, this.y, this.height, this.width);
    }
  }, {
    key: "handleSwim",
    value: function handleSwim() {
      if (this.x <= -100) {
        this.fishImage.src = _images_roundfish_flip_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.xVelocity = this.getVelocity(0.5, 3);
      } else if (this.x > 920) {
        this.fishImage.src = _images_roundfish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.xVelocity = this.getVelocity(-0.5, -3);
      }

      if (this.y < -100) {
        this.yVelocity = this.getVelocity(0.5, 2.5);
      } else if (this.y > 600) {
        this.yVelocity = this.getVelocity(-0.5, -2.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXJfZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRmlzaCIsImN0eCIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwieE1vdXNlIiwieU1vdXNlIiwieENlbnRlciIsInlDZW50ZXIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZmlzaCIsIm90aGVyRmlzaCIsIk90aGVyRmlzaCIsIm90aGVyRmlzaGllcyIsInBvcHVsYXRlRmlzaCIsIm1vdXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwic2NvcmUiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3RmlzaCIsImZvckVhY2giLCJmIiwiaGFuZGxlU3dpbSIsImhhbmRsZUNvbGxpc2lvbnMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmlzaFNpemVzIiwia2V5cyIsIk9iamVjdCIsImZpc2hJbWFnZSIsIkltYWdlIiwic3JjIiwicm91bmRGaXNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwieCIsImdldFJhbmRvbUludCIsInkiLCJ4VmVsb2NpdHkiLCJnZXRWZWxvY2l0eSIsInlWZWxvY2l0eSIsImJpbmQiLCJtaW4iLCJtYXgiLCJjZWlsIiwidmVjdG9yWCIsInZlY3RvclkiLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwiYWJzIiwiYWxlcnQiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJmaXNoaWVzIiwibWF4ZmlzaCIsImkiLCJwdXNoIiwicm91bmRGaXNoRmxpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakZxQkEsSTtBQUVqQixnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRUg7Ozs7eUJBRUlDLE0sRUFBUUMsTSxFQUFRO0FBQ2pCLFVBQUlDLE9BQU8sR0FBR0YsTUFBTSxHQUFJLEtB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Q1A7QUFDQSxXQUFLdEUsR0FBTCxDQUFTVSxTQUFULENBQW1CLEtBQUtrQyxTQUF4QixFQUFtQyxLQUFLUSxDQUF4QyxFQUEyQyxLQUFLRSxDQUFoRCxFQUFtRCxLQUFLbEQsTUFBeEQsRUFBZ0UsS0FBS0MsS0FBckU7QUFDSDs7O2lDQUdZO0FBQ1QsVUFBSSxLQUFLK0MsQ0FBTCxJQUFVLENBQUMsR0FBZixFQUFvQjtBQUNoQixhQUFLUixTQUFMLENBQWVFLEdBQWYsR0FBcUI0QixrRUFBckI7QUFDQSxhQUFLbkIsU0FBTCxHQUFpQixLQUFLQyxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWpCO0FBQ0gsT0FIRCxNQUdPLElBQUksS0FBS0osQ0FBTCxHQUFTLEdBQWIsRUFBa0I7QUFDckIsYUFBS1IsU0FBTCxDQUFlRSxHQUFmLEdBQXFCQyw2REFBckI7QUFDQSxhQUFLUSxTQUFMLEdBQWlCLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBQyxHQUFsQixFQUF1QixDQUFDLENBQXhCLENBQWpCO0FBQ0g7O0FBQUMsVUFBSSxLQUFLRixDQUFMLEdBQVMsQ0FBQyxHQUFkLEVBQW1CO0FBQ2pCLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0QsV0FBTCxDQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUFqQjtBQUNILE9BRkMsTUFFSyxJQUFJLEtBQUtGLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ3JCLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0QsV0FBTCxDQUFpQixDQUFDLEdBQWxCLEVBQXVCLENBQUMsR0FBeEIsQ0FBakI7QUFDSDs7QUFDRCxXQUFLSixDQUFMLElBQVUsS0FBS0csU0FBZjtBQUNBLFdBQUtELENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlzaCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdHRsZUZpc2hcIik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjA7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB4TW91c2UgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHlNb3VzZSAtICh0aGlzLmhlaWdodCAvIDIpO1xuXG4gICAgICAgIGlmICh4TW91c2UgPCAwICkge1xuICAgICAgICAgICAgeENlbnRlciA9IHhDZW50ZXIgLSB4Q2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4TW91c2UgPj0gOTIwKSB7XG4gICAgICAgICAgICB4Q2VudGVyID0gOTIwIC0gdGhpcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeU1vdXNlIDwgMCkge1xuICAgICAgICAgICAgeUNlbnRlciA9IHlDZW50ZXIgLSB5Q2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5TW91c2UgPj0gNTQwKSB7XG4gICAgICAgICAgICB5Q2VudGVyID0gNTQwIC0gKHRoaXMuaGVpZ2h0IC0gMTApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4Q2VudGVyLCB5Q2VudGVyLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgICAgIFxuICAgIFxuXG4gICBcblxufSIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvcm91bmRmaXNoLWZsaXAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9yb3VuZGZpc2gucG5nXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVTY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IEdBTUVfV0lEVEggPSA5MjA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDU0MDtcblxuY29uc3QgZmlzaCA9IG5ldyBGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoID0gbmV3IE90aGVyRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcbmxldCB4TW91c2U7XG5sZXQgeU1vdXNlO1xuXG5sZXQgbW91c2UgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB4TW91c2UgPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh4TW91c2UpO1xuICAgIHlNb3VzZSA9IChlLmNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgLy8gY29uc29sZS5sb2coeU1vdXNlKTtcbn0pO1xuXG5cblxuXG5cbmxldCBzY29yZSA9IDA7XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBmaXNoLmRyYXcoeE1vdXNlLCB5TW91c2UpO1xuICAgIG90aGVyRmlzaC5kcmF3RmlzaCgpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5kcmF3RmlzaCgpKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuaGFuZGxlU3dpbSgpKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgIGlmIChmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpKSBzY29yZSArPSAxO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59O1xuXG5cblxuXG5nYW1lTG9vcCgpO1xuXG5cbiIsImltcG9ydCByb3VuZEZpc2ggZnJvbSAnLi9pbWFnZXMvcm91bmRmaXNoLnBuZyc7XG5pbXBvcnQgcm91bmRGaXNoRmxpcCBmcm9tICcuL2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyRmlzaCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICB0aGlzLmZpc2hTaXplcyA9IHsgNDA6ICcyNScsIDUwOiAnMzUnLCA2MDogJzQ1JywgODA6ICc2NScsIDEwMDogJzg1JywgMTIwOiAnMTA1JywgMTMwOiAnMTE1JywgMTQwOiAnMTI1JyB9O1xuICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpc2hTaXplcyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSByb3VuZEZpc2g7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5rZXlzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmtleXMubGVuZ3RoKSldO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5maXNoU2l6ZXNbdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtMTAwKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nZXRSYW5kb21JbnQoMjAsIDgwMCk7XG4gICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgxLCAyLjIpO1xuICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMS41KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDb2xsaXNpb25zID0gdGhpcy5oYW5kbGVDb2xsaXNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuXG4gICAgZ2V0VmVsb2NpdHkobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIGxldCB4Q2VudGVyID0geE1vdXNlIC0gKGZpc2gud2lkdGggLyAyKTtcbiAgICAgICAgbGV0IHlDZW50ZXIgPSB5TW91c2UgLSAoZmlzaC5oZWlnaHQgLyAyKTtcbiAgICAgICAgY29uc3QgdmVjdG9yWCA9ICh4Q2VudGVyICsgZmlzaC53aWR0aCAvIDIpIC0gKHRoaXMueCArIHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3QgdmVjdG9yWSAgPSAoeUNlbnRlciArIGZpc2guaGVpZ2h0IC8gMikgLSAodGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gKChmaXNoLndpZHRoIC8gMikgKyAodGhpcy53aWR0aCAvIDIpKSAvIDEuMzsgLy8gbWFrZSB1cCBmb3IgYWJub3JtYWxpdHkgaW4gaW1hZ2Ugc2l6aW5nXG4gICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSAoKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSkgLyAxLjU7ICAvL15cbiAgICAgICAgICAgIGlmICgoTWF0aC5hYnModmVjdG9yWCkgPCBoYWxmV2lkdGgpICYmIChNYXRoLmFicyh2ZWN0b3JZKSA8IGhhbGZIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBmaXNoLndpZHRoICYmIHRoaXMuaGVpZ2h0IDwgZmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlzaC53aWR0aCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBmaXNoLmhlaWdodCArPSAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtNTApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgtMzAwLCAtMTAwKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBPdmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIHBvcHVsYXRlRmlzaCgpIHtcbiAgICAgXG4gICAgICAgIGxldCBmaXNoaWVzID0gW107XG4gICAgICAgIGxldCBtYXhmaXNoID0gNTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhmaXNoOyBpKyspIHtcbiAgICAgICAgICAgIGZpc2hpZXMucHVzaChuZXcgT3RoZXJGaXNoKHRoaXMuY3R4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlzaGllcztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0Zpc2goKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZmlzaEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG4gICAgfVxuXG5cbiAgICBoYW5kbGVTd2ltKCkge1xuICAgICAgICBpZiAodGhpcy54IDw9IC0xMDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJvdW5kRmlzaEZsaXBcbiAgICAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgwLjUsIDMpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ID4gOTIwKSB7XG4gICAgICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSByb3VuZEZpc2g7XG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoLTAuNSwgLTMpXG4gICAgICAgIH0gaWYgKHRoaXMueSA8IC0xMDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgwLjUsIDIuNSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55ID4gNjAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoLTAuNSwgLTIuNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eVxuICAgIH1cbiAgXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9