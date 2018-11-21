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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.img_slider').slick({\n        slidesToShow: 3,\n        prevArrow: '<div class=\"slick-prev\"><div class=\"slick-prev_wrap\"></div></div>',\n        nextArrow: '<div class=\"slick-next\"><div class=\"slick-next_wrap\"></div></div>'\n    });\n\n    $('.video_slider').slick({\n        prevArrow: '<div class=\"slick-prev\"><div class=\"slick-prev_wrap\"></div></div>',\n        nextArrow: '<div class=\"slick-next\"><div class=\"slick-next_wrap\"></div></div>'\n    });\n\n    $('.popup-youtube').magnificPopup({\n\t\tdisableOn: 700,\n\t\ttype: 'iframe',\n\t\tmainClass: 'mfp-fade',\n\t\tremovalDelay: 160,\n\t\tpreloader: false,\n\n\t\tfixedContentPos: false\n\t});\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/counters.js":
/*!****************************!*\
  !*** ./js/app/counters.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n        var dials = document.getElementsByClassName(\"counter\");\r\n        var lineWidth = 3;\r\n        var borderColor = '#535353';\r\n        var color = '#f4d476';\r\n        var dayText = document.getElementById('days');\r\n        var hoursText = document.getElementById('hours');\r\n        var minutesText = document.getElementById('minutes');\r\n        var secondText = document.getElementById('seconds');\r\n    \r\n    function percentage (number, max) {\r\n        return (number/max) * 100;\r\n    }\r\n    \r\n    setInterval(function () {\r\n        var date = new Date();\r\n        var seconds = date.getSeconds();\r\n        var minutes = date.getMinutes();\r\n        var hours = date.getHours();\r\n        var days = date.getDate();\r\n        \r\n        dayText.innerText = days;\r\n        hoursText.innerText = hours;\r\n        minutesText.innerText = minutes;\r\n        secondText.innerText = seconds;\r\n        \r\n        \r\n        var numberA = [days, hours, minutes, seconds],\r\n            maxA = [31, 24, 60, 60];\r\n\r\n        for (i = 0; i < dials.length; i++) {\r\n            var width = dials[i].querySelector('.diagram').offsetWidth - lineWidth;\r\n            var procent = percentage (numberA[i], maxA[i]);\r\n            var canvas = dials[i].querySelector('.diagram_circle');\r\n            var context = canvas.getContext(\"2d\");\r\n            var radian = 2 * Math.PI * procent / 100;\r\n            context.clearRect(0, 0, width + lineWidth, width + lineWidth);\r\n            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 0, 2 * Math.PI, false);\r\n            context.lineWidth = lineWidth;\r\n            context.strokeStyle = borderColor;\r\n            context.stroke();\r\n            context.beginPath();\r\n            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 1.5 * Math.PI, radian + 1.5 * Math.PI, false);\r\n            context.strokeStyle = color;\r\n            context.stroke();\r\n            context.beginPath();\r\n        }\r\n    }, 1000);\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/counters.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./js/app/app.js ./js/app/counters.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/counters.js */\"./js/app/counters.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/counters.js?");

/***/ })

/******/ });
