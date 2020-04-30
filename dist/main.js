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
}); //array of fish objects 

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  fish.draw(xMouse, yMouse);
  otherFish.drawFish();
  otherFishies.forEach(function (f) {
    return f.drawFish();
  });
  otherFishies.forEach(function (f) {
    return f.handleSwim();
  }); // console.log(otherFishies)

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
  function OtherFish(ctx) {
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
    }, this.keys = Object.keys(this.fishSizes), this.ctx = ctx, this.fishImage = new Image(), this.fishImage.src = "../assets/images/newfishsmall.png", this.height = this.keys[Math.floor(Math.random() * this.keys.length)], this.width = this.fishSizes[this.height], this.x = this.getRandomInt(-300, -30), this.y = this.getRandomInt(20, 800), this.velocity = this.getVelocity(1, 2.2);
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
      if (this.x < -100) {
        this.velocity = this.getVelocity(3, 4.2);
        this.y = this.getRandomInt(20, 800);
      } else if (this.x > 920) {
        this.velocity = this.getVelocity(-3, -4.2);
        this.y = this.getRandomInt(20, 800);
      } // this.fishImage.src = "../assets/images/newfishsmall.png"


      this.x += this.velocity;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vdGhlcl9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJGaXNoIiwiY3R4IiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4TW91c2UiLCJ5TW91c2UiLCJ4Q2VudGVyIiwieUNlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmaXNoIiwib3RoZXJGaXNoIiwiT3RoZXJGaXNoIiwib3RoZXJGaXNoaWVzIiwicG9wdWxhdGVGaXNoIiwibW91c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3RmlzaCIsImZvckVhY2giLCJmIiwiaGFuZGxlU3dpbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpc2hTaXplcyIsImtleXMiLCJPYmplY3QiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIngiLCJnZXRSYW5kb21JbnQiLCJ5IiwidmVsb2NpdHkiLCJnZXRWZWxvY2l0eSIsIm1pbiIsIm1heCIsImNlaWwiLCJmaXNoaWVzIiwibWF4ZmlzaCIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxJO0FBQ2pCLGdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2IsU0FBS0EsR0FBTCxHQUFXQSxHQUFYLEVBQ0EsS0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FEYixFQUVBLEtBQUtDLE1BQUwsR0FBYyxFQUZkLEVBR0EsS0FBS0MsS0FBTCxHQUFhLEVBSGI7QUFJSDs7Ozt5QkFFSUMsTSxFQUFRQyxNLEVBQVE7QUFDakI7QUFFQSxVQUFJQyxPQUFPLEdBQUdGLE1BQU0sR0FBSSxLQUFLRCxLQUFMLEdBQWEsQ0FBckM7QUFDQSxVQUFJSSxPQUFPLEdBQUdGLE1BQU0sR0FBSSxLQUFLSCxNQUFMLEdBQWMsQ0FBdEM7QUFDQSxXQUFLSixHQUFMLENBQVNVLFNBQVQsQ0FBbUIsS0FBS1QsS0FBeEIsRUFBK0JPLE9BQS9CLEVBQXdDQyxPQUF4QyxFQUFpRCxLQUFLTCxNQUF0RCxFQUE4RCxLQUFLQyxLQUFuRSxFQUxpQixDQU9qQjtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlNLE1BQU0sR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxJQUFJSCxHQUFHLEdBQUdXLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUloQiw2Q0FBSixDQUFTQyxHQUFULENBQWI7QUFDQSxJQUFJZ0IsU0FBUyxHQUFHLElBQUlDLG1EQUFKLENBQWNqQixHQUFkLENBQWhCO0FBQ0EsSUFBSWtCLFlBQVksR0FBR0YsU0FBUyxDQUFDRyxZQUFWLEVBQW5CO0FBRUEsSUFBSWIsTUFBSjtBQUNBLElBQUlDLE1BQUo7QUFFQSxJQUFJYSxLQUFLLEdBQUdsQixRQUFRLENBQUNtQixnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFTQyxDQUFULEVBQVc7QUFDMUQsTUFBSUMsSUFBSSxHQUFHWixNQUFNLENBQUNhLHFCQUFQLEVBQVg7QUFDQWxCLFFBQU0sR0FBR2dCLENBQUMsQ0FBQ0csT0FBRixHQUFZRixJQUFJLENBQUNHLElBQTFCO0FBQ0FuQixRQUFNLEdBQUdlLENBQUMsQ0FBQ0ssT0FBRixHQUFZSixJQUFJLENBQUNLLEdBQTFCO0FBQ0gsQ0FKVyxDQUFaLEMsQ0FNQTs7QUFHQSxTQUFTQyxRQUFULEdBQW9CO0FBRWhCN0IsS0FBRyxDQUFDOEIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JqQixVQUFwQixFQUFnQ0MsV0FBaEM7QUFDQUMsTUFBSSxDQUFDZ0IsSUFBTCxDQUFVekIsTUFBVixFQUFrQkMsTUFBbEI7QUFDQVMsV0FBUyxDQUFDZ0IsUUFBVjtBQUNBZCxjQUFZLENBQUNlLE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0YsUUFBRixFQUFKO0FBQUEsR0FBdEI7QUFDQWQsY0FBWSxDQUFDZSxPQUFiLENBQXFCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLFVBQUYsRUFBSjtBQUFBLEdBQXRCLEVBTmdCLENBUWhCOztBQUdBQyx1QkFBcUIsQ0FBQ1AsUUFBRCxDQUFyQjtBQUNIOztBQUtEQSxRQUFRLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekNhWixTO0FBQ2pCLHFCQUFZakIsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtxQyxTQUFMLEdBQWlCO0FBQUUsVUFBSSxJQUFOO0FBQVksVUFBSSxJQUFoQjtBQUFzQixVQUFJLElBQTFCO0FBQWdDLFVBQUksSUFBcEM7QUFBMEMsVUFBSSxJQUE5QztBQUFvRCxXQUFLLElBQXpEO0FBQStELFdBQUssS0FBcEU7QUFBMkUsV0FBSztBQUFoRixLQUFqQixFQUNBLEtBQUtDLElBQUwsR0FBWUMsTUFBTSxDQUFDRCxJQUFQLENBQVksS0FBS0QsU0FBakIsQ0FEWixFQUVBLEtBQUtyQyxHQUFMLEdBQVdBLEdBRlgsRUFHQSxLQUFLd0MsU0FBTCxHQUFpQixJQUFJQyxLQUFKLEVBSGpCLEVBSUEsS0FBS0QsU0FBTCxDQUFlRSxHQUFmLEdBQXFCLG1DQUpyQixFQUtBLEtBQUt0QyxNQUFMLEdBQWMsS0FBS2tDLElBQUwsQ0FBV0ssSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUFLUCxJQUFMLENBQVVRLE1BQXJDLENBQVgsQ0FMZCxFQU1BLEtBQUt6QyxLQUFMLEdBQWEsS0FBS2dDLFNBQUwsQ0FBZSxLQUFLakMsTUFBcEIsQ0FOYixFQU9BLEtBQUsyQyxDQUFMLEdBQVMsS0FBS0MsWUFBTCxDQUFrQixDQUFDLEdBQW5CLEVBQXdCLENBQUMsRUFBekIsQ0FQVCxFQVFBLEtBQUtDLENBQUwsR0FBUyxLQUFLRCxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLENBUlQsRUFTQSxLQUFLRSxRQUFMLEdBQWdCLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsQ0FUaEI7QUFVSDs7OztpQ0FFWUMsRyxFQUFLQyxHLEVBQUs7QUFDbkJELFNBQUcsR0FBR1QsSUFBSSxDQUFDVyxJQUFMLENBQVVGLEdBQVYsQ0FBTjtBQUNBQyxTQUFHLEdBQUdWLElBQUksQ0FBQ0MsS0FBTCxDQUFXUyxHQUFYLENBQU47QUFDQSxhQUFPVixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCUSxHQUFHLEdBQUdELEdBQXZCLENBQVgsSUFBMENBLEdBQWpEO0FBQ0g7OztnQ0FFV0EsRyxFQUFLQyxHLEVBQUs7QUFDbEIsYUFBT1YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQlEsR0FBRyxHQUFHRCxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNIOzs7bUNBRWM7QUFDWCxVQUFJRyxPQUFPLEdBQUcsRUFBZDtBQUNBLFVBQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsT0FBcEIsRUFBNkJDLENBQUMsRUFBOUIsRUFBa0M7QUFDOUJGLGVBQU8sQ0FBQ0csSUFBUixDQUFhLElBQUl6QyxTQUFKLENBQWMsS0FBS2pCLEdBQW5CLENBQWI7QUFDSDs7QUFDRCxhQUFPdUQsT0FBUDtBQUNIOzs7K0JBRVU7QUFDUCxXQUFLdkQsR0FBTCxDQUFTVSxTQUFULENBQW1CLEtBQUs4QixTQUF4QixFQUFtQyxLQUFLTyxDQUF4QyxFQUEyQyxLQUFLRSxDQUFoRCxFQUFtRCxLQUFLN0MsTUFBeEQsRUFBZ0UsS0FBS0MsS0FBckU7QUFDSDs7O2lDQUVZO0FBQ1QsVUFBSSxLQUFLMEMsQ0FBTCxHQUFTLENBQUMsR0FBZCxFQUFtQjtBQUNuQixhQUFLRyxRQUFMLEdBQWdCLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsQ0FBaEI7QUFDQSxhQUFLRixDQUFMLEdBQVMsS0FBS0QsWUFBTCxDQUFrQixFQUFsQixFQUFzQixHQUF0QixDQUFUO0FBQ0MsT0FIRCxNQUdPLElBQUksS0FBS0QsQ0FBTCxHQUFTLEdBQWIsRUFBa0I7QUFDckIsYUFBS0csUUFBTCxHQUFnQixLQUFLQyxXQUFMLENBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxHQUF0QixDQUFoQjtBQUNBLGFBQUtGLENBQUwsR0FBUyxLQUFLRCxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLENBQVQ7QUFDSCxPQVBRLENBUVQ7OztBQUNBLFdBQUtELENBQUwsSUFBVSxLQUFLRyxRQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eCxcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl0dGxlRmlzaFwiKSxcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MCxcbiAgICAgICAgdGhpcy53aWR0aCA9IDM1XG4gICAgfVxuXG4gICAgZHJhdyh4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIFxuICAgICAgICBsZXQgeENlbnRlciA9IHhNb3VzZSAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIGxldCB5Q2VudGVyID0geU1vdXNlIC0gKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4Q2VudGVyLCB5Q2VudGVyLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcblxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh4TW91c2UsIHlNb3VzZSwgdGhpcy5pbWFnZS5oZWlnaHQsIHRoaXMuaW1hZ2Uud2lkdGgpXG5cblxuICAgIH1cblxuICAgXG5cbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEZpc2ggZnJvbSAnLi9maXNoJztcbmltcG9ydCBPdGhlckZpc2ggZnJvbSAnLi9vdGhlcl9maXNoJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgR0FNRV9XSURUSCA9IDkyMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNTQwO1xuXG5jb25zdCBmaXNoID0gbmV3IEZpc2goY3R4KTtcbmxldCBvdGhlckZpc2ggPSBuZXcgT3RoZXJGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoaWVzID0gb3RoZXJGaXNoLnBvcHVsYXRlRmlzaCgpO1xuXG5sZXQgeE1vdXNlO1xubGV0IHlNb3VzZTtcblxubGV0IG1vdXNlID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeE1vdXNlID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgIHlNb3VzZSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xufSlcblxuLy9hcnJheSBvZiBmaXNoIG9iamVjdHMgXG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGZpc2guZHJhdyh4TW91c2UsIHlNb3VzZSlcbiAgICBvdGhlckZpc2guZHJhd0Zpc2goKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuZHJhd0Zpc2goKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZVN3aW0oKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhvdGhlckZpc2hpZXMpXG4gIFxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG5cblxuXG5nYW1lTG9vcCgpO1xuXG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5maXNoU2l6ZXMgPSB7IDMwOiAnMjAnLCA0MDogJzI1JywgNTA6ICczNScsIDYwOiAnNDUnLCA4MDogJzY1JywgMTAwOiAnODUnLCAxMjA6ICcxMDUnLCAxMzA6ICcxMTUnIH0sXG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmlzaFNpemVzKSxcbiAgICAgICAgdGhpcy5jdHggPSBjdHgsXG4gICAgICAgIHRoaXMuZmlzaEltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9uZXdmaXNoc21hbGwucG5nXCIsXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5rZXlzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmtleXMubGVuZ3RoKSldLFxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5maXNoU2l6ZXNbdGhpcy5oZWlnaHRdLFxuICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtMzAwLCAtMzApLFxuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgyMCwgODAwKSxcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMi4yKVxuICAgIH1cblxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGdldFZlbG9jaXR5KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaXNoKCkge1xuICAgICAgICBsZXQgZmlzaGllcyA9IFtdO1xuICAgICAgICBsZXQgbWF4ZmlzaCA9IDMwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heGZpc2g7IGkrKykge1xuICAgICAgICAgICAgZmlzaGllcy5wdXNoKG5ldyBPdGhlckZpc2godGhpcy5jdHgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXNoaWVzO1xuICAgIH1cblxuICAgIGRyYXdGaXNoKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5maXNoSW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgICB9XG5cbiAgICBoYW5kbGVTd2ltKCkge1xuICAgICAgICBpZiAodGhpcy54IDwgLTEwMCkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgzLCA0LjIpXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KDIwLCA4MDApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ID4gOTIwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMywgLTQuMilcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KDIwLCA4MDApXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL25ld2Zpc2hzbWFsbC5wbmdcIlxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eVxuICAgIH1cbiAgXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9