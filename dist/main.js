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
  function Fish(ctx, GAME_WIDTH, GAME_HEIGHT) {
    _classCallCheck(this, Fish);

    this.ctx = ctx;
    this.image = document.getElementById("littleFish");
    this.height = 50;
    this.width = 40;
    this.gameWidth = GAME_WIDTH;
    this.gameHeight = GAME_HEIGHT;
  }

  _createClass(Fish, [{
    key: "draw",
    value: function draw(xMouse, yMouse) {
      var xCenter = xMouse - this.width / 2;
      var yCenter = yMouse - this.height / 2;
      this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width);

      if (xMouse < 0) {
        xMouse = 0;
      } // if (this.xCenter > this.width / 2 + this.gameWidth) this.xCenter = 920;

    }
  }]);

  return Fish;
}();



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
/* harmony import */ var _images_roundfish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/roundfish.png */ "./src/images/roundfish.png");
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
    this.fishImage.src = _images_roundfish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.height = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.width = this.fishSizes[this.height];
    this.x = this.getRandomInt(-400, -30);
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

      if (dist < fish.width / 2 && dist < fish.height / 2) {
        console.log(dist); //    debugger;

        if (this.height < fish.height) {
          fish.width += 0.5;
          fish.height += 0.5;
          this.x = this.getRandomInt(-600, -50);
          this.y = this.getRandomInt(-400, -10);
        } else {// alert("Game Over");
          // clearInterval(interval);
        }
      } //    if (dist < (fish.width / 2) + (this.width / 2) &&
      //        dist < (fish.height / 2) + (this.height / 2) &&
      //        this.width < fish.width && this.height < fish.height) {
      //        fish.width += 0.5;
      //        fish.height += 0.5;
      //        this.x = this.getRandomInt(-500, -50);
      //        this.y = this.getRandomInt(-300, -100);
      //    } else if (dist < (fish.width / 2) + (this.width / 2) &&
      //        dist < (fish.height / 2) + (this.height / 2) &&
      //        this.width > fish.width && this.height > fish.height) {
      //        alert("Game Over");
      //        clearInterval(interval);
      //    }

    }
  }, {
    key: "populateFish",
    value: function populateFish() {
      var fishies = [];
      var maxfish = 10;

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
        this.xVelocity = this.getVelocity(0.5, 3);
      } else if (this.x > 920) {
        this.xVelocity = this.getVelocity(-0.5, -3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXJfZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRmlzaCIsImN0eCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInhNb3VzZSIsInlNb3VzZSIsInhDZW50ZXIiLCJ5Q2VudGVyIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImZpc2giLCJvdGhlckZpc2giLCJPdGhlckZpc2giLCJvdGhlckZpc2hpZXMiLCJwb3B1bGF0ZUZpc2giLCJtb3VzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZHJhdyIsImRyYXdGaXNoIiwiZm9yRWFjaCIsImYiLCJoYW5kbGVTd2ltIiwiaGFuZGxlQ29sbGlzaW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpc2hTaXplcyIsImtleXMiLCJPYmplY3QiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsInJvdW5kRmlzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIngiLCJnZXRSYW5kb21JbnQiLCJ5IiwieFZlbG9jaXR5IiwiZ2V0VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJiaW5kIiwibWluIiwibWF4IiwiY2VpbCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImRpc3QiLCJzcXJ0IiwicG93IiwiY29uc29sZSIsImxvZyIsImZpc2hpZXMiLCJtYXhmaXNoIiwiaSIsInB1c2giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLEk7QUFDakIsZ0JBQVlDLEdBQVosRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixFQUEwQztBQUFBOztBQUN0QyxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJQLFVBQWpCO0FBQ0EsU0FBS1EsVUFBTCxHQUFrQlAsV0FBbEI7QUFDSDs7Ozt5QkFFSVEsTSxFQUFRQyxNLEVBQVE7QUFDakIsVUFBSUMsT0FBTyxHQUFHRixNQUFNLEdBQUksS0FB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L0ZMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdHRsZUZpc2hcIik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBHQU1FX1dJRFRIO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICB9XG5cbiAgICBkcmF3KHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIGxldCB4Q2VudGVyID0geE1vdXNlIC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgbGV0IHlDZW50ZXIgPSB5TW91c2UgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHhDZW50ZXIsIHlDZW50ZXIsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh4TW91c2UgPCAwKSB7XG4gICAgICAgICAgICB4TW91c2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAodGhpcy54Q2VudGVyID4gdGhpcy53aWR0aCAvIDIgKyB0aGlzLmdhbWVXaWR0aCkgdGhpcy54Q2VudGVyID0gOTIwO1xuICAgIH1cblxuICAgXG4gICAgICAgIFxuICAgIFxuXG4gICBcblxufSIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvcm91bmRmaXNoLnBuZ1wiOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgRmlzaCBmcm9tICcuL2Zpc2gnO1xuaW1wb3J0IE90aGVyRmlzaCBmcm9tICcuL290aGVyX2Zpc2gnO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU2NyZWVuXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBHQU1FX1dJRFRIID0gOTIwO1xuY29uc3QgR0FNRV9IRUlHSFQgPSA1NDA7XG5cbmNvbnN0IGZpc2ggPSBuZXcgRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaCA9IG5ldyBPdGhlckZpc2goY3R4KTtcbmxldCBvdGhlckZpc2hpZXMgPSBvdGhlckZpc2gucG9wdWxhdGVGaXNoKCk7XG5cbmxldCB4TW91c2U7XG5sZXQgeU1vdXNlO1xuXG5sZXQgbW91c2UgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB4TW91c2UgPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh4TW91c2UpO1xuICAgIHlNb3VzZSA9IChlLmNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgLy8gY29uc29sZS5sb2coeU1vdXNlKTtcbn0pO1xuXG5cblxuXG5cblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGZpc2guZHJhdyh4TW91c2UsIHlNb3VzZSk7XG4gICAgb3RoZXJGaXNoLmRyYXdGaXNoKCk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmRyYXdGaXNoKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVTd2ltKCkpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5oYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSk7XG4gICAgXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufTtcblxuXG5cblxuZ2FtZUxvb3AoKTtcblxuXG4iLCJpbXBvcnQgcm91bmRGaXNoIGZyb20gJy4vaW1hZ2VzL3JvdW5kZmlzaC5wbmcnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGZpc2gsIHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIHRoaXMuZmlzaFNpemVzID0geyAzMDogJzIwJywgNDA6ICcyNScsIDUwOiAnMzUnLCA2MDogJzQ1JywgODA6ICc2NScsIDEwMDogJzg1JywgMTIwOiAnMTA1JywgMTMwOiAnMTE1JyB9O1xuICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpc2hTaXplcyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSByb3VuZEZpc2g7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5rZXlzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmtleXMubGVuZ3RoKSldO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5maXNoU2l6ZXNbdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNDAwLCAtMzApO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgyMCwgODAwKTtcbiAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDIuMik7XG4gICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgxLCAxLjUpO1xuICAgICAgICB0aGlzLmhhbmRsZUNvbGxpc2lvbnMgPSB0aGlzLmhhbmRsZUNvbGxpc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICBnZXRWZWxvY2l0eShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgbGV0IHhEaXN0YW5jZSA9IHhNb3VzZSAtIHRoaXMueDtcbiAgICAgICAgbGV0IHlEaXN0YW5jZSA9IHlNb3VzZSAtIHRoaXMueTtcblxuICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChNYXRoLnBvdyh4RGlzdGFuY2UsIDIpICsgTWF0aC5wb3coeURpc3RhbmNlLCAyKSk7XG5cbiAgICAgICBpZiAoZGlzdCA8IChmaXNoLndpZHRoIC8gMikgJiYgXG4gICAgICAgICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coZGlzdClcbiAgICAgICAgLy8gICAgZGVidWdnZXI7XG4gICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IGZpc2guaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgZmlzaC53aWR0aCArPSAwLjU7XG4gICAgICAgICAgICAgICAgZmlzaC5oZWlnaHQgKz0gMC41O1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0UmFuZG9tSW50KC02MDAsIC01MCk7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5nZXRSYW5kb21JbnQoLTQwMCwgLTEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJHYW1lIE92ZXJcIik7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgICBpZiAoZGlzdCA8IChmaXNoLndpZHRoIC8gMikgKyAodGhpcy53aWR0aCAvIDIpICYmXG4gICAgICAgIC8vICAgICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSAmJlxuICAgICAgICAvLyAgICAgICAgdGhpcy53aWR0aCA8IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgICAgZmlzaC53aWR0aCArPSAwLjU7XG4gICAgICAgIC8vICAgICAgICBmaXNoLmhlaWdodCArPSAwLjU7XG4gICAgICAgIC8vICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtNTApO1xuICAgICAgICAvLyAgICAgICAgdGhpcy55ID0gdGhpcy5nZXRSYW5kb21JbnQoLTMwMCwgLTEwMCk7XG4gICAgICAgIC8vICAgIH0gZWxzZSBpZiAoZGlzdCA8IChmaXNoLndpZHRoIC8gMikgKyAodGhpcy53aWR0aCAvIDIpICYmXG4gICAgICAgIC8vICAgICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSAmJlxuICAgICAgICAvLyAgICAgICAgdGhpcy53aWR0aCA+IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPiBmaXNoLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgICAgYWxlcnQoXCJHYW1lIE92ZXJcIik7XG4gICAgICAgIC8vICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHBvcHVsYXRlRmlzaCgpIHtcbiAgICAgXG4gICAgICAgIGxldCBmaXNoaWVzID0gW107XG4gICAgICAgIGxldCBtYXhmaXNoID0gMTA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4ZmlzaDsgaSsrKSB7XG4gICAgICAgICAgICBmaXNoaWVzLnB1c2gobmV3IE90aGVyRmlzaCh0aGlzLmN0eCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpc2hpZXM7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdGaXNoKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5maXNoSW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgICB9XG5cblxuICAgIGhhbmRsZVN3aW0oKSB7XG4gICAgICAgIGlmICh0aGlzLnggPCAtMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAzKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA+IDkyMCkge1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0wLjUsIC0zKVxuICAgICAgICB9IGlmICh0aGlzLnkgPCAtMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMC41LCAtMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eVxuICAgIH1cbiAgXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9