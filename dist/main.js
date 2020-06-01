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

/***/ "./src/images/fish_background.png":
/*!****************************************!*\
  !*** ./src/images/fish_background.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/fish_background.png");

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
/* harmony import */ var _images_fish_background_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fish_background.png */ "./src/images/fish_background.png");





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
  ctx.fillStyle = "#dbd5d591";
  ctx.fillRect(262, canvas.height / 2 - 25, 400, 120);
  ctx.font = "900 25px 'Piedra', cursive";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText("Eat fish that are smaller than you.", canvas.width / 2, canvas.height / 2);
  ctx.fillText("Avoid fish that are bigger than you.", canvas.width / 2, canvas.height / 2 + 40);
  var img = new Image();
  img.src = _images_fish_background_png__WEBPACK_IMPORTED_MODULE_4__["default"];

  img.onload = function () {
    ctx.drawImage(img, 560, 60);
  };

  ctx.font = "20px 'Piedra', cursive";
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
          fish.width += 1;
          fish.height += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9maXNoX2JhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm91bmRmaXNoLWZsaXAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm91bmRmaXNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3dhdGVyLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXJfZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRmlzaCIsImN0eCIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwieE1vdXNlIiwieU1vdXNlIiwieENlbnRlciIsInlDZW50ZXIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZmlzaCIsIm90aGVyRmlzaCIsIk90aGVyRmlzaCIsIm90aGVyRmlzaGllcyIsIm1vdXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiU0FWRV9LRVlfU0NPUkUiLCJnYW1lU3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzY29yZVN0ciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImRyYXdIaWdoU2NvcmUiLCJnYW1lU3RhcnQiLCJib2R5Iiwia2V5Q29kZSIsInBvcHVsYXRlRmlzaCIsImdhbWVMb29wIiwiaW50cm9TY3JlZW4iLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsImltZyIsIkltYWdlIiwic3JjIiwiZmlzaEJhY2tncm91bmQiLCJvbmxvYWQiLCJjbGVhclJlY3QiLCJkcmF3IiwiZHJhd0Zpc2giLCJmb3JFYWNoIiwiZiIsImhhbmRsZVN3aW0iLCJoYW5kbGVDb2xsaXNpb25zIiwic2V0SXRlbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpc2hTaXplcyIsImtleXMiLCJPYmplY3QiLCJmaXNoSW1hZ2UiLCJyb3VuZEZpc2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ4IiwiZ2V0UmFuZG9tSW50IiwieSIsInhWZWxvY2l0eSIsImdldFZlbG9jaXR5IiwieVZlbG9jaXR5IiwiYmluZCIsIm1pbiIsIm1heCIsImNlaWwiLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJhYnMiLCJmaXNoaWVzIiwibWF4ZmlzaCIsImkiLCJwdXNoIiwicm91bmRGaXNoRmxpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFD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O0FBQ0EsYUFBS2hCLFNBQUwsR0FBaUIsS0FBS0MsV0FBTCxDQUFpQixHQUFqQixFQUFzQixDQUF0QixDQUFqQjtBQUNILE9BSEQsTUFHTyxJQUFJLEtBQUtKLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ3JCLGFBQUtOLFNBQUwsQ0FBZWYsR0FBZixHQUFxQmdCLDZEQUFyQjtBQUNBLGFBQUtRLFNBQUwsR0FBaUIsS0FBS0MsV0FBTCxDQUFpQixDQUFDLEdBQWxCLEVBQXVCLENBQUMsQ0FBeEIsQ0FBakI7QUFDSDs7QUFBQyxVQUFJLEtBQUtGLENBQUwsR0FBUyxDQUFDLEdBQWQsRUFBbUI7QUFDakIsYUFBS0csU0FBTCxHQUFpQixLQUFLRCxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWpCO0FBQ0gsT0FGQyxNQUVLLElBQUksS0FBS0YsQ0FBTCxHQUFTLEdBQWIsRUFBa0I7QUFDckIsYUFBS0csU0FBTCxHQUFpQixLQUFLRCxXQUFMLENBQWlCLENBQUMsR0FBbEIsRUFBdUIsQ0FBQyxHQUF4QixDQUFqQjtBQUNIOztBQUNELFdBQUtKLENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtHLFNBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkwsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl0dGxlRmlzaFwiKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgXG4gICAgfVxuXG4gICAgZHJhdyh4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeENlbnRlciA9IHhNb3VzZSAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIGxldCB5Q2VudGVyID0geU1vdXNlIC0gKHRoaXMuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgaWYgKHhNb3VzZSA8IDAgKSB7XG4gICAgICAgICAgICB4Q2VudGVyID0geENlbnRlciAtIHhDZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHhNb3VzZSA+PSA5MjApIHtcbiAgICAgICAgICAgIHhDZW50ZXIgPSA5MjAgLSB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5TW91c2UgPCAwKSB7XG4gICAgICAgICAgICB5Q2VudGVyID0geUNlbnRlciAtIHlDZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHlNb3VzZSA+PSA1NDApIHtcbiAgICAgICAgICAgIHlDZW50ZXIgPSA1NDAgLSAodGhpcy5oZWlnaHQgLSAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHhDZW50ZXIsIHlDZW50ZXIsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICBcbiAgICAgICAgXG4gICAgXG5cbiAgIFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9maXNoX2JhY2tncm91bmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9yb3VuZGZpc2gtZmxpcC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL3JvdW5kZmlzaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL3dhdGVyLWJhY2tncm91bmQuanBnXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgd2F0ZXJCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL3dhdGVyLWJhY2tncm91bmQuanBnJztcbmltcG9ydCBmaXNoQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9maXNoX2JhY2tncm91bmQucG5nJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgR0FNRV9XSURUSCA9IDkyMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNTQwO1xuXG5cbmNvbnN0IGZpc2ggPSBuZXcgRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaCA9IG5ldyBPdGhlckZpc2goY3R4KTtcbmxldCBvdGhlckZpc2hpZXM7XG5sZXQgeE1vdXNlO1xubGV0IHlNb3VzZTtcblxubGV0IG1vdXNlID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeE1vdXNlID0gKGUuY2xpZW50WCAtIHJlY3QubGVmdCk7XG4gICAgeU1vdXNlID0gKGUuY2xpZW50WSAtIHJlY3QudG9wKTtcbn0pO1xuXG5cblxuY29uc3QgU0FWRV9LRVlfU0NPUkUgPSBcImhpZ2hTY29yZVwiIC8vc2F2ZSBrZXkgb2YgbG9jYWwgc3RvcmFnZSBvZiBoaWdoIHNjb3JlXG5cbmxldCBnYW1lU3RhdGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGdhbWVTdGF0ZSA9IHN0YXRlO1xufVxubGV0IHNjb3JlID0gMDtcbmxldCBoaWdoU2NvcmU7XG5cbmxldCBzY29yZVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNBVkVfS0VZX1NDT1JFKTtcbmlmIChzY29yZVN0ciA9PT0gbnVsbCkge1xuICAgICBoaWdoU2NvcmUgPSAwO1xufSBlbHNlIHtcbiAgICBoaWdoU2NvcmUgPSBwYXJzZUludChzY29yZVN0cik7XG59XG5mdW5jdGlvbiBkcmF3U2NvcmUoc2NvcmUpIHtcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNhOGU1ZTVcIjtcbiAgICBjdHguZmlsbFRleHQoc2NvcmUgKyBcIiBjbVwiLCA0MCwgNzApO1xufVxuXG5mdW5jdGlvbiBkcmF3SGlnaFNjb3JlKHNjb3JlKSB7XG4gICAgY3R4LmZvbnQgPSBcIjE4cHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjYThlNWU1XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiVG9wIHNpemU6IFwiICsgc2NvcmUgKyBcIiBjbVwiLCA3MCwgNDApO1xufVxuXG5cbmxldCBnYW1lU3RhcnQgPSBmYWxzZTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiBnYW1lU3RhcnQgPT09IGZhbHNlICkge1xuICAgICAgIGdhbWVTdGFydCA9IHRydWU7XG4gICAgICAgIG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgIGdhbWVMb29wKCk7XG4gICAgfVxuICAgIFxuXG59KVxuXG5cblxuY29uc3QgaW50cm9TY3JlZW4gPSAoKSA9PiB7XG4gICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZGJkNWQ1OTFcIlxuICAgIGN0eC5maWxsUmVjdCgyNjIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsIDQwMCwgMTIwKVxuICAgIGN0eC5mb250ID0gXCI5MDAgMjVweCAnUGllZHJhJywgY3Vyc2l2ZVwiXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQoXCJFYXQgZmlzaCB0aGF0IGFyZSBzbWFsbGVyIHRoYW4geW91LlwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgY3R4LmZpbGxUZXh0KFwiQXZvaWQgZmlzaCB0aGF0IGFyZSBiaWdnZXIgdGhhbiB5b3UuXCIsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IGZpc2hCYWNrZ3JvdW5kO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7IGN0eC5kcmF3SW1hZ2UoaW1nLCA1NjAsIDYwKX1cbiAgICBcbiAgICBjdHguZm9udCA9IFwiMjBweCAnUGllZHJhJywgY3Vyc2l2ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIlByZXNzIFNwYWNlIHRvIFN0YXJ0XCIsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgODApO1xuXG59XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICAgIGlmIChnYW1lU3RhcnQpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBmaXNoLmRyYXcoeE1vdXNlLCB5TW91c2UpO1xuICAgIG90aGVyRmlzaC5kcmF3RmlzaCgpO1xuICAgIG90aGVyRmlzaGllcy5mb3JFYWNoKGYgPT4gZi5kcmF3RmlzaCgpKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuaGFuZGxlU3dpbSgpKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgIGlmIChmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpKSB7IFxuICAgICAgICAgICAgIHNjb3JlICs9IDI7XG4gICAgICAgICB9IGVsc2UgaWYgKGYuaGFuZGxlQ29sbGlzaW9ucyhmaXNoLCB4TW91c2UsIHlNb3VzZSkgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICBnYW1lU3RhcnQgPSBmYWxzZVxuICAgICAgICAgICAgZmlzaC53aWR0aCA9IDUwO1xuICAgICAgICAgICAgZmlzaC5oZWlnaHQgPSA2MDtcbiAgICAgICAgICAgICBpbnRyb1NjcmVlbigpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYgKHNjb3JlID4gaGlnaFNjb3JlKSB7XG4gICAgICAgICAgICAgaGlnaFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0FWRV9LRVlfU0NPUkUsIGhpZ2hTY29yZSlcbiAgICAgICAgIH1cbiAgICB9KTtcbiAgICBkcmF3SGlnaFNjb3JlKGhpZ2hTY29yZSk7XG4gICAgZHJhd1Njb3JlKHNjb3JlKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxufTtcblxuXG5cblxuXG5pbnRyb1NjcmVlbigpO1xuXG5cblxuIiwiaW1wb3J0IHJvdW5kRmlzaCBmcm9tICcuL2ltYWdlcy9yb3VuZGZpc2gucG5nJztcbmltcG9ydCByb3VuZEZpc2hGbGlwIGZyb20gJy4vaW1hZ2VzL3JvdW5kZmlzaC1mbGlwLnBuZyc7XG5pbXBvcnQge3NldFN0YXRlfSBmcm9tICcuL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdGhlckZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgdGhpcy5maXNoU2l6ZXMgPSB7IDQwOiAnMjUnLCA1MDogJzM1JywgNjA6ICc0NScsIDgwOiAnNjUnLCAxMDA6ICc4NScsIDEyMDogJzEwNScsIDEzMDogJzExNScsIDE0MDogJzEyNScgfTtcbiAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModGhpcy5maXNoU2l6ZXMpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gcm91bmRGaXNoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMua2V5c1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5rZXlzLmxlbmd0aCkpXTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZmlzaFNpemVzW3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nZXRSYW5kb21JbnQoLTUwMCwgLTEwMCk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KDIwLCA4MDApO1xuICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMi4yKTtcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDEuNSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ29sbGlzaW9ucyA9IHRoaXMuaGFuZGxlQ29sbGlzaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGdldFZlbG9jaXR5KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQ29sbGlzaW9ucyhmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeENlbnRlciA9IHhNb3VzZSAtIChmaXNoLndpZHRoIC8gMik7XG4gICAgICAgIGxldCB5Q2VudGVyID0geU1vdXNlIC0gKGZpc2guaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IHZlY3RvclggPSAoeENlbnRlciArIGZpc2gud2lkdGggLyAyKSAtICh0aGlzLnggKyB0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IHZlY3RvclkgID0gKHlDZW50ZXIgKyBmaXNoLmhlaWdodCAvIDIpIC0gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9ICgoZmlzaC53aWR0aCAvIDIpICsgKHRoaXMud2lkdGggLyAyKSkgLyAxLjM7IC8vIG1ha2UgdXAgZm9yIGFibm9ybWFsaXR5IGluIGltYWdlIHNpemluZ1xuICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gKChmaXNoLmhlaWdodCAvIDIpICsgKHRoaXMuaGVpZ2h0IC8gMikpIC8gMS41OyAgLy9eXG4gICAgICAgICAgICBpZiAoKE1hdGguYWJzKHZlY3RvclgpIDwgaGFsZldpZHRoKSAmJiAoTWF0aC5hYnModmVjdG9yWSkgPCBoYWxmSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgZmlzaC53aWR0aCAmJiB0aGlzLmhlaWdodCA8IGZpc2guaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpc2gud2lkdGggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgZmlzaC5oZWlnaHQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nZXRSYW5kb21JbnQoLTUwMCwgLTUwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5nZXRSYW5kb21JbnQoLTMwMCwgLTEwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaXNoKCkge1xuICAgICBcbiAgICAgICAgbGV0IGZpc2hpZXMgPSBbXTtcbiAgICAgICAgbGV0IG1heGZpc2ggPSAyMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhmaXNoOyBpKyspIHtcbiAgICAgICAgICAgIGZpc2hpZXMucHVzaChuZXcgT3RoZXJGaXNoKHRoaXMuY3R4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlzaGllcztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0Zpc2goKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmZpc2hJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKVxuICAgIH1cblxuXG4gICAgaGFuZGxlU3dpbSgpIHtcbiAgICAgICAgaWYgKHRoaXMueCA8PSAtMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSByb3VuZEZpc2hGbGlwXG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAzKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA+IDkyMCkge1xuICAgICAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gcm91bmRGaXNoO1xuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0wLjUsIC0zKVxuICAgICAgICB9IGlmICh0aGlzLnkgPCAtMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMC41LCAyLjUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueSA+IDYwMCkge1xuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0wLjUsIC0yLjUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnhWZWxvY2l0eVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy55VmVsb2NpdHlcbiAgICB9XG4gIFxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==