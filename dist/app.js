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

eval("$(document).ready(function () {\n    $('.menu_point_link').click(function () {\n        var screen = $(this).attr('href');\n        var scrollTo = $(screen).offset().top;\n        console.log(screen);\n        console.log(scrollTo);\n\n        $('html, body').animate({\n            scrollTop: scrollTo\n        }, 1000);\n    });\n\n    $(window).scroll(function () {\n        if ($(this).scrollTop() > 140) {\n            $('.header').addClass('fixed');\n        } else {\n            $('.header').removeClass('fixed');\n        }\n    });\n\n    $('.img_slider').slick({\n        slidesToShow: 3,\n        prevArrow: '<div class=\"slick-prev\"><div class=\"slick-prev_wrap\"></div></div>',\n        nextArrow: '<div class=\"slick-next\"><div class=\"slick-next_wrap\"></div></div>',\n        responsive: [{\n                breakpoint: 1023,\n                settings: {\n                    slidesToShow: 2\n                }\n            }, {\n                breakpoint: 767,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    });\n\n    $('.video_slider').slick({\n        prevArrow: '<div class=\"slick-prev\"><div class=\"slick-prev_wrap\"></div></div>',\n        nextArrow: '<div class=\"slick-next\"><div class=\"slick-next_wrap\"></div></div>'\n    });\n\n    $('.partners_slider').slick({\n        slidesToShow: 6,\n        slidesToScroll: 1,\n        autoplay: true,\n        arrows: false,\n        responsive: [{\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 4\n                }\n            }, {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 2\n                }\n            }, {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    });\n\n    $('.popup-youtube').magnificPopup({\n        disableOn: 700,\n        type: 'iframe',\n        mainClass: 'mfp-fade',\n        removalDelay: 160,\n        preloader: false,\n\n        fixedContentPos: false\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/counters.js":
/*!****************************!*\
  !*** ./js/app/counters.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n        var dials = document.getElementsByClassName(\"counter\");\n        var lineWidth = 3;\n        var borderColor = '#535353';\n        var color = '#f4d476';\n        var dayText = document.getElementById('days');\n        var hoursText = document.getElementById('hours');\n        var minutesText = document.getElementById('minutes');\n        var secondText = document.getElementById('seconds');\n\n    function percentage (number, max) {\n        return (number/max) * 100;\n    }\n\n    setInterval(function () {\n        var date = new Date();\n        var seconds = 60 - date.getSeconds();\n        var minutes = 60 - date.getMinutes();\n        var hours = 24 - date.getHours();\n        var days = date.getDate();\n        dayText.innerText = days;\n        hoursText.innerText = hours;\n        minutesText.innerText = minutes;\n        secondText.innerText = seconds;\n\n\n        var numberA = [days, hours, minutes, seconds],\n            maxA = [31, 24, 60, 60];\n\n        for (i = 0; i < dials.length; i++) {\n            var width = dials[i].querySelector('.diagram').offsetWidth - lineWidth;\n            var procent = percentage (numberA[i], maxA[i]);\n            var canvas = dials[i].querySelector('.diagram_circle');\n            var context = canvas.getContext(\"2d\");\n            var radian = 2 * Math.PI * procent / 100;\n            context.clearRect(0, 0, width + lineWidth, width + lineWidth);\n            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 0, 2 * Math.PI, false);\n            context.lineWidth = lineWidth;\n            context.strokeStyle = borderColor;\n            context.stroke();\n            context.beginPath();\n            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 1.5 * Math.PI, radian + 1.5 * Math.PI, false);\n            context.strokeStyle = color;\n            context.stroke();\n            context.beginPath();\n        }\n    }, 1000);\n});\n\n\n//# sourceURL=webpack:///./js/app/counters.js?");

/***/ }),

/***/ "./js/app/ymaps.js":
/*!*************************!*\
  !*** ./js/app/ymaps.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    var mapBlock = document.getElementById('map');\r\n\r\n    if (mapBlock) {\r\n        ymaps.ready(init);\r\n        var map,\r\n            Placemark;\r\n\r\n        function init() {\r\n            map = new ymaps.Map(\"map\", {\r\n                center: [53.890977, 27.563152],\r\n                zoom: 17\r\n            });\r\n\r\n            map.behaviors.disable('scrollZoom');\r\n\r\n            Placemark = new ymaps.Placemark([53.890977, 27.563152], {\r\n                hintContent: 'PRIME EVENT',\r\n                balloonContent: 'PRIME EVENT'\r\n            });\r\n\r\n            map.geoObjects.add(Placemark);\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/ymaps.js?");

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/counters.js ./js/app/ymaps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/counters.js */\"./js/app/counters.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/ymaps.js */\"./js/app/ymaps.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/counters.js_./js/app/ymaps.js?");

/***/ })

/******/ });
