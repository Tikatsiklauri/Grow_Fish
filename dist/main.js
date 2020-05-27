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
      this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width); // if (xMouse < 0) {
      //     xMouse = 0;
      // }
      // if (this.xCenter > this.width / 2 + this.gameWidth) this.xCenter = 920;
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
        console.log(dist);
        debugger;

        if (this.height < fish.height) {
          fish.width += 0.5;
          fish.height += 0.5;
          this.x = this.getRandomInt(-600, -50);
          this.y = this.getRandomInt(-400, -10);
        } else if (this.x + this.width >= xMouse + fish.width / 2 && this.x <= xMouse + fish.width / 2 + fish.width && this.y + this.height >= yMouse + fish.height / 2 && this.y <= yMouse + fish.height / 2 + fish.height) {
          alert("Game Over");
          clearInterval(interval);
        }
      }
    } // if (dist < (fish.width / 2) + (this.width / 2) &&
    //     dist < (fish.height / 2) + (this.height / 2) &&
    //     this.width < fish.width && this.height < fish.height) {
    //     fish.width += 0.5;
    //     fish.height += 0.5;
    //     this.x = this.getRandomInt(-500, -50);
    //     this.y = this.getRandomInt(-300, -100);
    // } else if (dist < (fish.width / 2) + (this.width / 2) &&
    //     dist < (fish.height / 2) + (this.height / 2) &&
    //     this.width > fish.width && this.height > fish.height) {
    //     alert("Game Over");
    //     clearInterval(interval);
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb3VuZGZpc2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXJfZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRmlzaCIsImN0eCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInhNb3VzZSIsInlNb3VzZSIsInhDZW50ZXIiLCJ5Q2VudGVyIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImZpc2giLCJvdGhlckZpc2giLCJPdGhlckZpc2giLCJvdGhlckZpc2hpZXMiLCJwb3B1bGF0ZUZpc2giLCJtb3VzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZHJhdyIsImRyYXdGaXNoIiwiZm9yRWFjaCIsImYiLCJoYW5kbGVTd2ltIiwiaGFuZGxlQ29sbGlzaW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpc2hTaXplcyIsImtleXMiLCJPYmplY3QiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsInJvdW5kRmlzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIngiLCJnZXRSYW5kb21JbnQiLCJ5IiwieFZlbG9jaXR5IiwiZ2V0VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJiaW5kIiwibWluIiwibWF4IiwiY2VpbCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImRpc3QiLCJzcXJ0IiwicG93IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwiZmlzaGllcyIsIm1heGZpc2giLCJpIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsSTtBQUNqQixnQkFBWUMsR0FBWixFQUFpQkMsVUFBakIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQUE7O0FBQ3RDLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtHLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQlAsVUFBakI7QUFDQSxTQUFLUSxVQUFMLEdBQWtCUCxXQUFsQjtBQUNIOzs7O3lCQUVJUSxNLEVBQVFDLE0sRUFBUTtBQUNqQixVQUFJQyxPQUFPLEdBQUdGLE1BQU0sR0FBSSxLQUFLSCxLQUFMLEdBQWEsQ0FBckM7QUFDQSxVQUFJTSxPQUFPLEdBQUdGLE1BQU0sR0FBSSxLQUFLTCxNQUFMLEdBQWMsQ0FBdEM7QUFDQSxXQUFLTixHQUFMLENBQVNjLFNBQVQsQ0FBbUIsS0FBS1gsS0FBeEIsRUFBK0JTLE9BQS9CLEVBQXdDQyxPQUF4QyxFQUFpRCxLQUFLUCxNQUF0RCxFQUE4RCxLQUFLQyxLQUFuRSxFQUhpQixDQUtqQjtBQUNBO0FBQ0E7QUFFQTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkw7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJUSxNQUFNLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFiO0FBQ0EsSUFBSUwsR0FBRyxHQUFHZSxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBLElBQU1mLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1lLElBQUksR0FBRyxJQUFJbEIsNkNBQUosQ0FBU0MsR0FBVCxDQUFiO0FBQ0EsSUFBSWtCLFNBQVMsR0FBRyxJQUFJQyxtREFBSixDQUFjbkIsR0FBZCxDQUFoQjtBQUNBLElBQUlvQixZQUFZLEdBQUdGLFNBQVMsQ0FBQ0csWUFBVixFQUFuQjtBQUVBLElBQUlYLE1BQUo7QUFDQSxJQUFJQyxNQUFKO0FBRUEsSUFBSVcsS0FBSyxHQUFHbEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzFELE1BQUlDLElBQUksR0FBR1YsTUFBTSxDQUFDVyxxQkFBUCxFQUFYO0FBQ0FoQixRQUFNLEdBQUljLENBQUMsQ0FBQ0csT0FBRixHQUFZRixJQUFJLENBQUNHLElBQTNCLENBRjBELENBRzFEOztBQUNBakIsUUFBTSxHQUFJYSxDQUFDLENBQUNLLE9BQUYsR0FBWUosSUFBSSxDQUFDSyxHQUEzQixDQUowRCxDQUsxRDtBQUNILENBTlcsQ0FBWjs7QUFhQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRW5CL0IsS0FBRyxDQUFDZ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IvQixVQUFwQixFQUFnQ0MsV0FBaEM7QUFDQWUsTUFBSSxDQUFDZ0IsSUFBTCxDQUFVdkIsTUFBVixFQUFrQkMsTUFBbEI7QUFDQU8sV0FBUyxDQUFDZ0IsUUFBVjtBQUNBZCxjQUFZLENBQUNlLE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0YsUUFBRixFQUFKO0FBQUEsR0FBdEI7QUFDQWQsY0FBWSxDQUFDZSxPQUFiLENBQXFCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLFVBQUYsRUFBSjtBQUFBLEdBQXRCO0FBQ0FqQixjQUFZLENBQUNlLE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0UsZ0JBQUYsQ0FBbUJyQixJQUFuQixFQUF5QlAsTUFBekIsRUFBaUNDLE1BQWpDLENBQUo7QUFBQSxHQUF0QjtBQUdBNEIsdUJBQXFCLENBQUNSLFFBQUQsQ0FBckI7QUFDSCxDQVhEOztBQWdCQUEsUUFBUSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q1I7O0lBR3FCWixTO0FBQ2pCLHFCQUFZbkIsR0FBWixFQUFpQmlCLElBQWpCLEVBQXVCUCxNQUF2QixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTs7QUFDbkMsU0FBSzZCLFNBQUwsR0FBaUI7QUFBRSxVQUFJLElBQU47QUFBWSxVQUFJLElBQWhCO0FBQXNCLFVBQUksSUFBMUI7QUFBZ0MsVUFBSSxJQUFwQztBQUEwQyxVQUFJLElBQTlDO0FBQW9ELFdBQUssSUFBekQ7QUFBK0QsV0FBSyxLQUFwRTtBQUEyRSxXQUFLO0FBQWhGLEtBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQyxNQUFNLENBQUNELElBQVAsQ0FBWSxLQUFLRCxTQUFqQixDQUFaO0FBQ0EsU0FBS3hDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUsyQyxTQUFMLEdBQWlCLElBQUlDLEtBQUosRUFBakI7QUFDQSxTQUFLRCxTQUFMLENBQWVFLEdBQWYsR0FBcUJDLDZEQUFyQjtBQUNBLFNBQUt4QyxNQUFMLEdBQWMsS0FBS21DLElBQUwsQ0FBV00sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUFLUixJQUFMLENBQVVTLE1BQXJDLENBQVgsQ0FBZDtBQUNBLFNBQUszQyxLQUFMLEdBQWEsS0FBS2lDLFNBQUwsQ0FBZSxLQUFLbEMsTUFBcEIsQ0FBYjtBQUNBLFNBQUs2QyxDQUFMLEdBQVMsS0FBS0MsWUFBTCxDQUFrQixDQUFDLEdBQW5CLEVBQXdCLENBQUMsRUFBekIsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxLQUFLRCxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLENBQVQ7QUFDQSxTQUFLRSxTQUFMLEdBQWlCLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsQ0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtELFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsQ0FBakI7QUFDQSxTQUFLakIsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JtQixJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNIOzs7O2lDQUVZQyxHLEVBQUtDLEcsRUFBSztBQUNuQkQsU0FBRyxHQUFHWCxJQUFJLENBQUNhLElBQUwsQ0FBVUYsR0FBVixDQUFOO0FBQ0FDLFNBQUcsR0FBR1osSUFBSSxDQUFDQyxLQUFMLENBQVdXLEdBQVgsQ0FBTjtBQUNBLGFBQU9aLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJVLEdBQUcsR0FBR0QsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBakQ7QUFDSDs7O2dDQUVXQSxHLEVBQUtDLEcsRUFBSztBQUNsQixhQUFPWixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCVSxHQUFHLEdBQUdELEdBQXZCLENBQVgsSUFBMENBLEdBQWpEO0FBRUg7OztxQ0FFZ0J6QyxJLEVBQU1QLE0sRUFBUUMsTSxFQUFRO0FBQ25DLFVBQUlrRCxTQUFTLEdBQUduRCxNQUFNLEdBQUcsS0FBS3lDLENBQTlCO0FBQ0EsVUFBSVcsU0FBUyxHQUFHbkQsTUFBTSxHQUFHLEtBQUswQyxDQUE5QjtBQUVBLFVBQUlVLElBQUksR0FBR2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVWpCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBU0osU0FBVCxFQUFvQixDQUFwQixJQUF5QmQsSUFBSSxDQUFDa0IsR0FBTCxDQUFTSCxTQUFULEVBQW9CLENBQXBCLENBQW5DLENBQVg7O0FBRUQsVUFBSUMsSUFBSSxHQUFJOUMsSUFBSSxDQUFDVixLQUFMLEdBQWEsQ0FBckIsSUFDQ3dELElBQUksR0FBSTlDLElBQUksQ0FBQ1gsTUFBTCxHQUFjLENBRDNCLEVBQytCO0FBQzNCNEQsZUFBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDSjs7QUFDQyxZQUFLLEtBQUt6RCxNQUFMLEdBQWNXLElBQUksQ0FBQ1gsTUFBeEIsRUFBZ0M7QUFDeEJXLGNBQUksQ0FBQ1YsS0FBTCxJQUFjLEdBQWQ7QUFDQVUsY0FBSSxDQUFDWCxNQUFMLElBQWUsR0FBZjtBQUNBLGVBQUs2QyxDQUFMLEdBQVMsS0FBS0MsWUFBTCxDQUFrQixDQUFDLEdBQW5CLEVBQXdCLENBQUMsRUFBekIsQ0FBVDtBQUNBLGVBQUtDLENBQUwsR0FBUyxLQUFLRCxZQUFMLENBQWtCLENBQUMsR0FBbkIsRUFBd0IsQ0FBQyxFQUF6QixDQUFUO0FBQ1AsU0FMRCxNQUtPLElBQUksS0FBS0QsQ0FBTCxHQUFTLEtBQUs1QyxLQUFkLElBQXVCRyxNQUFNLEdBQUlPLElBQUksQ0FBQ1YsS0FBTCxHQUFhLENBQTlDLElBQ1AsS0FBSzRDLENBQUwsSUFBV3pDLE1BQU0sR0FBSU8sSUFBSSxDQUFDVixLQUFMLEdBQWEsQ0FBeEIsR0FBK0JVLElBQUksQ0FBQ1YsS0FEdkMsSUFFUCxLQUFLOEMsQ0FBTCxHQUFTLEtBQUsvQyxNQUFkLElBQXdCSyxNQUFNLEdBQUlNLElBQUksQ0FBQ1gsTUFBTCxHQUFjLENBRnpDLElBR1AsS0FBSytDLENBQUwsSUFBVzFDLE1BQU0sR0FBSU0sSUFBSSxDQUFDWCxNQUFMLEdBQWMsQ0FBekIsR0FBZ0NXLElBQUksQ0FBQ1gsTUFINUMsRUFHbUQ7QUFDbEQ4RCxlQUFLLENBQUMsV0FBRCxDQUFMO0FBQ0FDLHVCQUFhLENBQUNDLFFBQUQsQ0FBYjtBQUNIO0FBQ0o7QUFDQSxLLENBRUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7bUNBSU87QUFFWCxVQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLFVBQUlDLE9BQU8sR0FBRyxDQUFkOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsT0FBcEIsRUFBNkJDLENBQUMsRUFBOUIsRUFBa0M7QUFDOUJGLGVBQU8sQ0FBQ0csSUFBUixDQUFhLElBQUl2RCxTQUFKLENBQWMsS0FBS25CLEdBQW5CLENBQWI7QUFDSDs7QUFDRCxhQUFPdUUsT0FBUDtBQUVIOzs7K0JBRVU7QUFDUCxXQUFLdkUsR0FBTCxDQUFTYyxTQUFULENBQW1CLEtBQUs2QixTQUF4QixFQUFtQyxLQUFLUSxDQUF4QyxFQUEyQyxLQUFLRSxDQUFoRCxFQUFtRCxLQUFLL0MsTUFBeEQsRUFBZ0UsS0FBS0MsS0FBckU7QUFDSDs7O2lDQUdZO0FBQ1QsVUFBSSxLQUFLNEMsQ0FBTCxHQUFTLENBQUMsR0FBZCxFQUFtQjtBQUNmLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0MsV0FBTCxDQUFpQixHQUFqQixFQUFzQixDQUF0QixDQUFqQjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUtKLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ3JCLGFBQUtHLFNBQUwsR0FBaUIsS0FBS0MsV0FBTCxDQUFpQixDQUFDLEdBQWxCLEVBQXVCLENBQUMsQ0FBeEIsQ0FBakI7QUFDSDs7QUFBQyxVQUFJLEtBQUtGLENBQUwsR0FBUyxDQUFDLEdBQWQsRUFBbUI7QUFDakIsYUFBS0csU0FBTCxHQUFpQixLQUFLRCxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWpCO0FBQ0gsT0FGQyxNQUVLLElBQUksS0FBS0YsQ0FBTCxHQUFTLEdBQWIsRUFBa0I7QUFDckIsYUFBS0csU0FBTCxHQUFpQixLQUFLRCxXQUFMLENBQWlCLENBQUMsR0FBbEIsRUFBdUIsQ0FBQyxDQUF4QixDQUFqQjtBQUNIOztBQUNELFdBQUtKLENBQUwsSUFBVSxLQUFLRyxTQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtHLFNBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0wsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlzaCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl0dGxlRmlzaFwiKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IEdBTUVfV0lEVEg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IEdBTUVfSEVJR0hUO1xuICAgIH1cblxuICAgIGRyYXcoeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB4TW91c2UgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHlNb3VzZSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgeENlbnRlciwgeUNlbnRlciwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKHhNb3VzZSA8IDApIHtcbiAgICAgICAgLy8gICAgIHhNb3VzZSA9IDA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGlmICh0aGlzLnhDZW50ZXIgPiB0aGlzLndpZHRoIC8gMiArIHRoaXMuZ2FtZVdpZHRoKSB0aGlzLnhDZW50ZXIgPSA5MjA7XG4gICAgfVxuXG4gICBcbiAgICAgICAgXG4gICAgXG5cbiAgIFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9yb3VuZGZpc2gucG5nXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVTY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IEdBTUVfV0lEVEggPSA5MjA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDU0MDtcblxuY29uc3QgZmlzaCA9IG5ldyBGaXNoKGN0eCk7XG5sZXQgb3RoZXJGaXNoID0gbmV3IE90aGVyRmlzaChjdHgpO1xubGV0IG90aGVyRmlzaGllcyA9IG90aGVyRmlzaC5wb3B1bGF0ZUZpc2goKTtcblxubGV0IHhNb3VzZTtcbmxldCB5TW91c2U7XG5cbmxldCBtb3VzZSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHhNb3VzZSA9IChlLmNsaWVudFggLSByZWN0LmxlZnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHhNb3VzZSk7XG4gICAgeU1vdXNlID0gKGUuY2xpZW50WSAtIHJlY3QudG9wKTtcbiAgICAvLyBjb25zb2xlLmxvZyh5TW91c2UpO1xufSk7XG5cblxuXG5cblxuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgZmlzaC5kcmF3KHhNb3VzZSwgeU1vdXNlKTtcbiAgICBvdGhlckZpc2guZHJhd0Zpc2goKTtcbiAgICBvdGhlckZpc2hpZXMuZm9yRWFjaChmID0+IGYuZHJhd0Zpc2goKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZVN3aW0oKSk7XG4gICAgb3RoZXJGaXNoaWVzLmZvckVhY2goZiA9PiBmLmhhbmRsZUNvbGxpc2lvbnMoZmlzaCwgeE1vdXNlLCB5TW91c2UpKTtcbiAgICBcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59O1xuXG5cblxuXG5nYW1lTG9vcCgpO1xuXG5cbiIsImltcG9ydCByb3VuZEZpc2ggZnJvbSAnLi9pbWFnZXMvcm91bmRmaXNoLnBuZydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdGhlckZpc2gge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZmlzaCwgeE1vdXNlLCB5TW91c2UpIHtcbiAgICAgICAgdGhpcy5maXNoU2l6ZXMgPSB7IDMwOiAnMjAnLCA0MDogJzI1JywgNTA6ICczNScsIDYwOiAnNDUnLCA4MDogJzY1JywgMTAwOiAnODUnLCAxMjA6ICcxMDUnLCAxMzA6ICcxMTUnIH07XG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmlzaFNpemVzKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJvdW5kRmlzaDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmtleXNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMua2V5cy5sZW5ndGgpKV07XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmZpc2hTaXplc1t0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0UmFuZG9tSW50KC00MDAsIC0zMCk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KDIwLCA4MDApO1xuICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoMSwgMi4yKTtcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KDEsIDEuNSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ29sbGlzaW9ucyA9IHRoaXMuaGFuZGxlQ29sbGlzaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGdldFZlbG9jaXR5KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQ29sbGlzaW9ucyhmaXNoLCB4TW91c2UsIHlNb3VzZSkge1xuICAgICAgICBsZXQgeERpc3RhbmNlID0geE1vdXNlIC0gdGhpcy54O1xuICAgICAgICBsZXQgeURpc3RhbmNlID0geU1vdXNlIC0gdGhpcy55O1xuXG4gICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KE1hdGgucG93KHhEaXN0YW5jZSwgMikgKyBNYXRoLnBvdyh5RGlzdGFuY2UsIDIpKTtcblxuICAgICAgIGlmIChkaXN0IDwgKGZpc2gud2lkdGggLyAyKSAmJiBcbiAgICAgICAgICAgIGRpc3QgPCAoZmlzaC5oZWlnaHQgLyAyKSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0KVxuICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGlmICAodGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGZpc2gud2lkdGggKz0gMC41O1xuICAgICAgICAgICAgICAgIGZpc2guaGVpZ2h0ICs9IDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNjAwLCAtNTApO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KC00MDAsIC0xMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA+PSB4TW91c2UgKyAoZmlzaC53aWR0aCAvIDIpICYmXG4gICAgICAgICAgICB0aGlzLnggPD0gKHhNb3VzZSArIChmaXNoLndpZHRoIC8gMikpICArIGZpc2gud2lkdGggJiZcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IHlNb3VzZSArIChmaXNoLmhlaWdodCAvIDIpICAmJlxuICAgICAgICAgICAgdGhpcy55IDw9ICh5TW91c2UgKyAoZmlzaC5oZWlnaHQgLyAyKSkgICsgZmlzaC5oZWlnaHQpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBPdmVyXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgKGRpc3QgPCAoZmlzaC53aWR0aCAvIDIpICsgKHRoaXMud2lkdGggLyAyKSAmJlxuICAgICAgICAgICAgLy8gICAgIGRpc3QgPCAoZmlzaC5oZWlnaHQgLyAyKSArICh0aGlzLmhlaWdodCAvIDIpICYmXG4gICAgICAgICAgICAvLyAgICAgdGhpcy53aWR0aCA8IGZpc2gud2lkdGggJiYgdGhpcy5oZWlnaHQgPCBmaXNoLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gICAgIGZpc2gud2lkdGggKz0gMC41O1xuICAgICAgICAgICAgLy8gICAgIGZpc2guaGVpZ2h0ICs9IDAuNTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnggPSB0aGlzLmdldFJhbmRvbUludCgtNTAwLCAtNTApO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMueSA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMDAsIC0xMDApO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChkaXN0IDwgKGZpc2gud2lkdGggLyAyKSArICh0aGlzLndpZHRoIC8gMikgJiZcbiAgICAgICAgICAgIC8vICAgICBkaXN0IDwgKGZpc2guaGVpZ2h0IC8gMikgKyAodGhpcy5oZWlnaHQgLyAyKSAmJlxuICAgICAgICAgICAgLy8gICAgIHRoaXMud2lkdGggPiBmaXNoLndpZHRoICYmIHRoaXMuaGVpZ2h0ID4gZmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vICAgICBhbGVydChcIkdhbWUgT3ZlclwiKTtcbiAgICAgICAgICAgIC8vICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBcbiAgICBcblxuICAgIHBvcHVsYXRlRmlzaCgpIHtcbiAgICAgXG4gICAgICAgIGxldCBmaXNoaWVzID0gW107XG4gICAgICAgIGxldCBtYXhmaXNoID0gNTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhmaXNoOyBpKyspIHtcbiAgICAgICAgICAgIGZpc2hpZXMucHVzaChuZXcgT3RoZXJGaXNoKHRoaXMuY3R4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlzaGllcztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0Zpc2goKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmZpc2hJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKVxuICAgIH1cblxuXG4gICAgaGFuZGxlU3dpbSgpIHtcbiAgICAgICAgaWYgKHRoaXMueCA8IC0yMDApIHtcbiAgICAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgwLjUsIDMpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ID4gOTIwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IHRoaXMuZ2V0VmVsb2NpdHkoLTAuNSwgLTMpXG4gICAgICAgIH0gaWYgKHRoaXMueSA8IC0xMDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgwLjUsIDMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueSA+IDYwMCkge1xuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmdldFZlbG9jaXR5KC0wLjUsIC0zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsb2NpdHlcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5XG4gICAgfVxuICBcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=