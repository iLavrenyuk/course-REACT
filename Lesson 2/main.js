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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./1script.js":
/*!********************!*\
  !*** ./1script.js ***!
  \********************/
/*! exports provided: employers, employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employers", function() { return employers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employersNames", function() { return employersNames; });
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = [];

for (var i = 0; i < employers.length; i++) {
  if (employers[i].length > 0 && employers[i].length != '') {
    employersNames.push(employers[i]);
  }
}

for (var _i = 0; _i < employersNames.length; _i++) {
  employersNames[_i] = employersNames[_i].toLowerCase().trim();
}



/***/ }),

/***/ "./2script.js":
/*!********************!*\
  !*** ./2script.js ***!
  \********************/
/*! exports provided: sponsors, money, calcCash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sponsors", function() { return sponsors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "money", function() { return money; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCash", function() { return calcCash; });
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var everyCash = Array.prototype.slice.call(arguments),
      total = own;

  for (var i = 0; i < everyCash[1].length; i++) {
    total += +everyCash[1][i];
  }

  return total;
}

var money = calcCash(null, sponsors.cash);


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1script */ "./1script.js");
/* harmony import */ var _2script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2script */ "./2script.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MakeBusiness = function MakeBusiness(owner, cash, emp) {
  var director = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Victor';

  _classCallCheck(this, MakeBusiness);

  var sumSponsors = _2script__WEBPACK_IMPORTED_MODULE_1__["sponsors"].eu.concat(_2script__WEBPACK_IMPORTED_MODULE_1__["sponsors"].rus, 'unexpected sponsor');
  console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' + emp);
  console.log('And we have a sponsors: ');
  console.log.apply(null, sumSponsors);
  console.log('Note. Be careful with ' + _2script__WEBPACK_IMPORTED_MODULE_1__["sponsors"].eu[0] + ". It's a huge risk.");
};

var test = new MakeBusiness('Sam', _2script__WEBPACK_IMPORTED_MODULE_1__["money"], _1script__WEBPACK_IMPORTED_MODULE_0__["employersNames"]);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map