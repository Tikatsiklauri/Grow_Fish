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

/***/ "./src/images/water-background.jpg":
/*!*****************************************!*\
  !*** ./src/images/water-background.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/water-background.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: setState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish */ "./src/fish.js");
/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other_fish */ "./src/other_fish.js");
/* harmony import */ var _images_water_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/water-background.jpg */ "./src/images/water-background.jpg");




var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 920;
var GAME_HEIGHT = 540;
var fish = new _fish__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
var otherFish = new _other_fish__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
var otherFishies;
var xMouse;
var yMouse;
var mouse = document.addEventListener('mousemove', function (e) {
  var rect = canvas.getBoundingClientRect();
  xMouse = e.clientX - rect.left;
  yMouse = e.clientY - rect.top;
});
var SAVE_KEY_SCORE = "highScore"; //save key of local storage of high score

var gameState;
function setState(state) {
  gameState = state;
}
var score = 0;
var highScore;
var scoreStr = localStorage.getItem(SAVE_KEY_SCORE);

if (scoreStr === null) {
  highScore = 0;
} else {
  highScore = parseInt(scoreStr);
}

function drawScore(score) {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#a8e5e5";
  ctx.fillText(score + " cm", 40, 70);
}

function drawHighScore(score) {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#a8e5e5";
  ctx.fillText("Top size: " + score + " cm", 70, 40);
}

var gameStart = false;
document.body.addEventListener('keydown', function (e) {
  if (e.keyCode === 32 && gameStart === false) {
    gameStart = true;
    otherFishies = otherFish.populateFish();
    score = 0;
    gameLoop();
  }
});

var introScreen = function introScreen() {
  ctx.fillStyle = "#484747ab";
  ctx.fillRect(262, canvas.height / 2 - 25, 400, 120);
  ctx.font = "900 25px Lato";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("Eat fish that are smaller than you.", canvas.width / 2, canvas.height / 2);
  ctx.fillText("Avoid fish that are bigger than you.", canvas.width / 2, canvas.height / 2 + 40);
  ctx.font = "20px Lato";
  ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 80);
};

var gameLoop = function gameLoop() {
  if (gameStart) {
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
      if (f.handleCollisions(fish, xMouse, yMouse)) {
        score += 2;
      } else if (f.handleCollisions(fish, xMouse, yMouse) === false) {
        gameStart = false;
        fish.width = 50;
        fish.height = 60;
        introScreen();
      }

      if (score > highScore) {
        highScore = score;
        localStorage.setItem(SAVE_KEY_SCORE, highScore);
      }
    });
    drawHighScore(highScore);
    drawScore(score);
    requestAnimationFrame(gameLoop);
  }
};

introScreen();

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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
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
          return false;
        }
      }
    }
  }, {
    key: "populateFish",
    value: function populateFish() {
      var fishies = [];
      var maxfish = 20;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2F0ZXItYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vdGhlcl9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJGaXNoIiwiY3R4IiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4TW91c2UiLCJ5TW91c2UiLCJ4Q2VudGVyIiwieUNlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmaXNoIiwib3RoZXJGaXNoIiwiT3RoZXJGaXNoIiwib3RoZXJGaXNoaWVzIiwibW91c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJTQVZFX0tFWV9TQ09SRSIsImdhbWVTdGF0ZSIsInNldFN0YXRlIiwic3RhdGUiLCJzY29yZSIsImhpZ2hTY29yZSIsInNjb3JlU3RyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwiZHJhd1Njb3JlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiZHJhd0hpZ2hTY29yZSIsImdhbWVTdGFydCIsImJvZHkiLCJrZXlDb2RlIiwicG9wdWxhdGVGaXNoIiwiZ2FtZUxvb3AiLCJpbnRyb1NjcmVlbiIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwiY2xlYXJSZWN0IiwiZHJhdyIsImRyYXdGaXNoIiwiZm9yRWFjaCIsImYiLCJoYW5kbGVTd2ltIiwiaGFuZGxlQ29sbGlzaW9ucyIsInNldEl0ZW0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaXNoU2l6ZXMiLCJrZXlzIiwiT2JqZWN0IiwiZmlzaEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJyb3VuZEZpc2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ4IiwiZ2V0UmFuZG9tSW50IiwieSIsInhWZWxvY2l0eSIsImdldFZlbG9jaXR5IiwieVZlbG9jaXR5IiwiYmluZCIsIm1pbiIsIm1heCIsImNlaWwiLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJhYnMiLCJmaXNoaWVzIiwibWF4ZmlzaCIsImkiLCJwdXNoIiwicm91bmRGaXNoRmxpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lD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QUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWpCO0FBQ0gsT0FGQyxNQUVLLElBQUksS0FBS0YsQ0FBTCxHQUFTLEdBQWIsRUFBa0I7QUFDckIsYUFBS0csU0FBTCxHQUFpQixLQUFLRCxXQUFMLENBQWlCLENBQUMsR0FBbEIsRUFBdUIsQ0FBQyxHQUF4QixDQUFqQjtBQUNIOztBQUNELFdBQUtKLENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtHLFNBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkwsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl0dGxlRmlzaFwiKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgXG4gICAgfVxuXG4gICAgZHJhdyh4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeENlbnRlciA9IHhNb3VzZSAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIGxldCB5Q2VudGVyID0geU1vdXNlIC0gKHRoaXMuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgaWYgKHhNb3VzZSA8IDAgKSB7XG4gICAgICAgICAgICB4Q2VudGVyID0geENlbnRlciAtIHhDZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHhNb3VzZSA+PSA5MjApIHtcbiAgICAgICAgICAgIHhDZW50ZXIgPSA5MjAgLSB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5TW91c2UgPCAwKSB7XG4gICAgICAgICAgICB5Q2VudGVyID0geUNlbnRlciAtIHlDZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHlNb3VzZSA+PSA1NDApIHtcbiAgICAgICAgICAgIHlDZW50ZXIgPSA1NDAgLSAodGhpcy5oZWlnaHQgLSAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHhDZW50ZXIsIHlDZW50ZXIsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICBcbiAgICAgICAgXG4gICAgXG5cbiAgIFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL3JvdW5kZmlzaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL3dhdGVyLWJhY2tncm91bmQuanBnXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgd2F0ZXJCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL3dhdGVyLWJhY2tncm91bmQuanBnJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgR0FNRV9XSURUSCA9IDkyMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNTQwO1xuXG5cbmNvbnN0IGZpc2ggPSBuZXcgRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaCA9IG5ldyBPdGhlckZpc2goY3R4KTtcbmxldCBvdGhlckZpc2hpZXM7XG5sZXQgeE1vdXNlO1xubGV0IHlNb3VzZTtcblxubGV0IG1vdXNlID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeE1vdXNlID0gKGUuY2xpZW50WCAtIHJlY3QubGVmdCk7XG4gICAgeU1vdXNlID0gKGUuY2xpZW50WSAtIHJlY3QudG9wKTtcbn0pO1xuXG5cblxuY29uc3QgU0FWRV9LRVlfU0NPUkUgPSBcImhpZ2hTY29yZVwiIC8vc2F2ZSBrZXkgb2YgbG9jYWwgc3RvcmFnZSBvZiBoaWdoIHNjb3JlXG5cbmxldCBnYW1lU3RhdGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGdhbWVTdGF0ZSA9IHN0YXRlO1xufVxubGV0IHNjb3JlID0gMDtcbmxldCBoaWdoU2NvcmU7XG5cbmxldCBzY29yZVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNBVkVfS0VZX1NDT1JFKTtcbmlmIChzY29yZVN0ciA9PT0gbnVsbCkge1xuICAgICBoaWdoU2NvcmUgPSAwO1xufSBlbHNlIHtcbiAgICBoaWdoU2NvcmUgPSBwYXJzZUludChzY29yZVN0cik7XG59XG5mdW5jdGlvbiBkcmF3U2NvcmUoc2NvcmUpIHtcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNhOGU1ZTVcIjtcbiAgICBjdHguZmlsbFRleHQoc2NvcmUgKyBcIiBjbVwiLCA0MCwgNzApO1xufVxuXG5mdW5jdGlvbiBkcmF3SGlnaFNjb3JlKHNjb3JlKSB7XG4gICAgY3R4LmZvbnQgPSBcIjE4cHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjYThlNWU1XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiVG9wIHNpemU6IFwiICsgc2NvcmUgKyBcIiBjbVwiLCA3MCwgNDApO1xufVxuXG5cbmxldCBnYW1lU3RhcnQgPSBmYWxzZTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiBnYW1lU3RhcnQgPT09IGZhbHNlICkge1xuICAgICAgIGdhbWVTdGFydCA9IHRydWU7XG4gICAgICAgIG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgIGdhbWVMb29wKCk7XG4gICAgfVxuICAgIFxuXG59KVxuXG5cblxuY29uc3QgaW50cm9TY3JlZW4gPSAoKSA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzQ4NDc0N2FiXCJcbiAgICBjdHguZmlsbFJlY3QoMjYyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LCA0MDAsIDEyMClcbiAgICBjdHguZm9udCA9IFwiOTAwIDI1cHggTGF0b1wiXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJFYXQgZmlzaCB0aGF0IGFyZSBzbWFsbGVyIHRoYW4geW91LlwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgY3R4LmZpbGxUZXh0KFwiQXZvaWQgZmlzaCB0aGF0IGFyZSBiaWdnZXIgdGhhbiB5b3UuXCIsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgIFxuICAgIGN0eC5mb250ID0gXCIyMHB4IExhdG9cIjtcbiAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBTcGFjZSB0byBTdGFydFwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiArIDgwKTtcblxufVxuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgICBpZiAoZ2FtZVN0YXJ0KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgZmlzaC5kcmF3KHhNb3VzZSwgeU1vdXNlKTtcbiAgICBvdGhlckZpc2guZHJhd0Zpc2goKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuZHJhd0Zpc2goKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZVN3aW0oKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICBpZiAoZi5oYW5kbGVDb2xsaXNpb25zKGZpc2gsIHhNb3VzZSwgeU1vdXNlKSkgeyBcbiAgICAgICAgICAgICBzY29yZSArPSAyO1xuICAgICAgICAgfSBlbHNlIGlmIChmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgZ2FtZVN0YXJ0ID0gZmFsc2VcbiAgICAgICAgICAgIGZpc2gud2lkdGggPSA1MDtcbiAgICAgICAgICAgIGZpc2guaGVpZ2h0ID0gNjA7XG4gICAgICAgICAgICAgaW50cm9TY3JlZW4oKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmIChzY29yZSA+IGhpZ2hTY29yZSkge1xuICAgICAgICAgICAgIGhpZ2hTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNBVkVfS0VZX1NDT1JFLCBoaWdoU2NvcmUpXG4gICAgICAgICB9XG4gICAgfSk7XG4gICAgZHJhd0hpZ2hTY29yZShoaWdoU2NvcmUpO1xuICAgIGRyYXdTY29yZShzY29yZSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbn07XG5cblxuXG5cblxuaW50cm9TY3JlZW4oKTtcblxuXG5cbiIsImltcG9ydCByb3VuZEZpc2ggZnJvbSAnLi9pbWFnZXMvcm91bmRmaXNoLnBuZyc7XG5pbXBvcnQgcm91bmRGaXNoRmxpcCBmcm9tICcuL2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmcnO1xuaW1wb3J0IHtzZXRTdGF0ZX0gZnJvbSAnLi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGZpc2gsIHhNb3VzZSwgeU1vdXNlKSB7XG4gICAgICAgIHRoaXMuZmlzaFNpemVzID0geyA0MDogJzI1JywgNTA6ICczNScsIDYwOiAnNDUnLCA4MDogJzY1JywgMTAwOiAnODUnLCAxMjA6ICcxMDUnLCAxMzA6ICcxMTUnLCAxNDA6ICcxMjUnIH07XG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmlzaFNpemVzKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJvdW5kRmlzaDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmtleXNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMua2V5cy5sZW5ndGgpKV07XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmZpc2hTaXplc1t0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0UmFuZG9tSW50KC01MDAsIC0xMDApO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJhbmRvbUludCgyMCwgODAwKTtcbiAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDIuMik7XG4gICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgxLCAxLjUpO1xuICAgICAgICB0aGlzLmhhbmRsZUNvbGxpc2lvbnMgPSB0aGlzLmhhbmRsZUNvbGxpc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICBnZXRWZWxvY2l0eShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB4TW91c2UgLSAoZmlzaC53aWR0aCAvIDIpO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHlNb3VzZSAtIChmaXNoLmhlaWdodCAvIDIpO1xuICAgICAgICBjb25zdCB2ZWN0b3JYID0gKHhDZW50ZXIgKyBmaXNoLndpZHRoIC8gMikgLSAodGhpcy54ICsgdGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCB2ZWN0b3JZICA9ICh5Q2VudGVyICsgZmlzaC5oZWlnaHQgLyAyKSAtICh0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICBjb25zdCBoYWxmV2lkdGggPSAoKGZpc2gud2lkdGggLyAyKSArICh0aGlzLndpZHRoIC8gMikpIC8gMS4zOyAvLyBtYWtlIHVwIGZvciBhYm5vcm1hbGl0eSBpbiBpbWFnZSBzaXppbmdcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9ICgoZmlzaC5oZWlnaHQgLyAyKSArICh0aGlzLmhlaWdodCAvIDIpKSAvIDEuNTsgIC8vXlxuICAgICAgICAgICAgaWYgKChNYXRoLmFicyh2ZWN0b3JYKSA8IGhhbGZXaWR0aCkgJiYgKE1hdGguYWJzKHZlY3RvclkpIDwgaGFsZkhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBmaXNoLndpZHRoICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIGZpc2guaGVpZ2h0ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0UmFuZG9tSW50KC01MDAsIC01MCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMDAsIC0xMDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlRmlzaCgpIHtcbiAgICAgXG4gICAgICAgIGxldCBmaXNoaWVzID0gW107XG4gICAgICAgIGxldCBtYXhmaXNoID0gMjA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4ZmlzaDsgaSsrKSB7XG4gICAgICAgICAgICBmaXNoaWVzLnB1c2gobmV3IE90aGVyRmlzaCh0aGlzLmN0eCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpc2hpZXM7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdGaXNoKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5maXNoSW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgICB9XG5cblxuICAgIGhhbmRsZVN3aW0oKSB7XG4gICAgICAgIGlmICh0aGlzLnggPD0gLTEwMCkge1xuICAgICAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gcm91bmRGaXNoRmxpcFxuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDAuNSwgMylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPiA5MjApIHtcbiAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJvdW5kRmlzaDtcbiAgICAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMC41LCAtMylcbiAgICAgICAgfSBpZiAodGhpcy55IDwgLTEwMCkge1xuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDAuNSwgMi41KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgtMC41LCAtMi41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsb2NpdHlcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5XG4gICAgfVxuICBcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=