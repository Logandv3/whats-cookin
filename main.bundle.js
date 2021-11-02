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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  color: white; }\n\nbutton,\nimg,\n.grid-container,\nh3,\ninput {\n  cursor: pointer; }\n\nbutton:disabled {\n  cursor: not-allowed; }\n\nbody {\n  background: #822e2e;\n  background: linear-gradient(0deg, #822e2e 0%, black 75%);\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-content: center; }\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nheader > h1 {\n  color: red;\n  font-size: 4em;\n  margin: 0px 0px 15px 0px;\n  text-shadow: 2px 2px grey; }\n\nnav {\n  width: 80%;\n  display: flex;\n  justify-content: space-evenly;\n  align-self: center; }\n\nbutton {\n  background: none;\n  width: 20%;\n  font-size: 1.2em;\n  margin: 3px;\n  padding: 5px 0px 5px 0px;\n  border-radius: 5px; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.search-box {\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.search-options {\n  padding: 25px 0px 25px 0px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center; }\n\n.checkbox {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  place-self: center; }\n\n.tag-checkbox {\n  width: 10%; }\n\n.text-input {\n  width: 55%;\n  display: flex;\n  flex-direction: column; }\n\n.text-input-align {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.input-text {\n  align-self: baseline;\n  padding: 10px 10px 5px 0px;\n  color: red;\n  font-size: 1.2em;\n  font-weight: 800; }\n\n.text-input-box {\n  align-self: flex-end;\n  padding: 10px 0px 10px 10px;\n  width: 40%;\n  background: none;\n  border: none; }\n\n.submit-button {\n  width: 100%; }\n\n.recipe-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.error-messages {\n  font-size: 1.5em;\n  font-weight: 900;\n  color: red;\n  text-shadow: 0.5px 0.5px grey; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em; }\n\n.card-head {\n  display: flex;\n  justify-content: center; }\n\n.card-body img {\n  height: 100%;\n  width: 100%; }\n\n.individual-recipe {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.left-recipe, .right-recipe {\n  width: 50%;\n  margin: 0px 20px 0px 20px; }\n\n.left-recipe {\n  align-self: flex-start;\n  width: 30%;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 15% 10% 60% 15%; }\n\n.left-recipe > h2 {\n  grid-column: span 2;\n  grid-row: 2; }\n\n.left-recipe > img {\n  grid-column: span 2;\n  grid-row: 3;\n  height: 100%;\n  width: 100%; }\n\n.back-to-main-btn {\n  grid-column: 1;\n  width: 100%; }\n\n.cook-this-now-btn {\n  grid-column: 2;\n  width: 100%; }\n\n.list-btns {\n  width: 100%; }\n\n.favs {\n  grid-column: 1; }\n\n.to-cook {\n  grid-column: 2; }\n\n.pantry-item {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly; }\n\n.left-pantry {\n  align-self: flex-start;\n  display: grid;\n  grid-gap: 1em;\n  grid-column-templates: 50% 50%;\n  grid-row-templates: minmax(50%, auto); }\n\n.add-to-pantry-input {\n  background: none;\n  font-size: 1.1em;\n  grid-column: 1; }\n\n.add-to-pantry {\n  background: none;\n  font-size: 1.1em;\n  grid-column: 2; }\n\n.submit-to-pantry {\n  align-self: center;\n  width: 100%;\n  grid-column: span 2;\n  grid-row: 2; }\n\n.table-titles {\n  font-size: 1.1em; }\n\ntable {\n  width: 800px; }\n\ntr {\n  padding: 5px 20px 5px 20px; }\n\ntd {\n  padding: 5px 20px 5px 20px; }\n\n.text-transform {\n  text-transform: capitalize; }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACC,YAAY,EAAA;;AAGb;;;;;EAKC,eAAe,EAAA;;AAGhB;EACC,mBAAmB,EAAA;;AAGpB;EACC,mBAA0B;EAC1B,wDAA0E;EAC1E,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,qBAAqB,EAAA;;AAGtB;EACC,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGpB;EACC,UAAU;EACV,cAAc;EACd,wBAAwB;EACxB,yBAAyB,EAAA;;AAG1B;EACC,UAAU;EACV,aAAa;EACb,6BAA6B;EAC7B,kBAAkB,EAAA;;AAGnB;EACC,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,WAAW;EACX,wBAAwB;EACxB,kBAAkB,EAAA;;AAGnB;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;;AAGpB;EACC,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGpB;EACC,0BAA0B;EAC1B,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB,EAAA;;AAGpB;EACC,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,kBAAkB,EAAA;;AAGnB;EACC,UAAU,EAAA;;AAGX;EACC,UAAU;EACV,aAAa;EACb,sBAAsB,EAAA;;AAGvB;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;;AAGxB;EACC,oBAAoB;EACpB,0BAA0B;EAC1B,UAAU;EACV,gBAAgB;EAChB,gBAAgB,EAAA;;AAGjB;EACC,oBAAoB;EACpB,2BAA2B;EAC3B,UAAU;EACV,gBAAgB;EAChB,YAAY,EAAA;;AAGb;EACC,WAAW,EAAA;;AAGZ;EACC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAGpB;EACC,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,6BAA6B,EAAA;;AAG9B;EACC,aAAa;EACb,qCAAqC;EACrC,aAAa,EAAA;;AAGd;EACC,aAAa;EACb,uBAAuB,EAAA;;AAGxB;EACC,YAAY;EACZ,WAAW,EAAA;;AAGZ;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB,EAAA;;AAGpB;EACC,UAAU;EACV,yBAAyB,EAAA;;AAG1B;EACC,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,mCAAmC,EAAA;;AAGpC;EACC,mBAAmB;EACnB,WAAW,EAAA;;AAGZ;EACC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,WAAW,EAAA;;AAGZ;EACC,cAAc;EACd,WAAW,EAAA;;AAGZ;EACC,cAAc;EACd,WAAW,EAAA;;AAGZ;EACC,WAAW,EAAA;;AAGZ;EACC,cAAc,EAAA;;AAGf;EACC,cAAc,EAAA;;AAGf;EACC,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B,EAAA;;AAG9B;EACC,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,qCAAqC,EAAA;;AAGtC;EACC,gBAAgB;EAChB,gBAAgB;EAChB,cAAc,EAAA;;AAGf;EACC,gBAAgB;EAChB,gBAAgB;EAChB,cAAc,EAAA;;AAGf;EACC,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,WAAW,EAAA;;AAGZ;EACC,gBAAgB,EAAA;;AAGjB;EACC,YAAY,EAAA;;AAGb;EACC,0BAA0B,EAAA;;AAG3B;EACC,0BAA0B,EAAA;;AAG3B;EACC,0BAA0B,EAAA;;AAG3B;EACC,aAAa,EAAA","sourcesContent":["* {\n\tcolor: white;\n}\n\nbutton,\nimg,\n.grid-container,\nh3,\ninput {\n\tcursor: pointer;\n}\n\nbutton:disabled {\n\tcursor: not-allowed;\n}\n\nbody {\n\tbackground: rgb(130,46,46);\n\tbackground: linear-gradient(0deg, rgba(130,46,46,1) 0%, rgba(0,0,0,1) 75%);\n\theight: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-content: center;\n}\n\nheader {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nheader > h1 {\n\tcolor: red;\n\tfont-size: 4em;\n\tmargin: 0px 0px 15px 0px;\n\ttext-shadow: 2px 2px grey;\n}\n\nnav {\n\twidth: 80%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-self: center;\n}\n\nbutton {\n\tbackground: none;\n\twidth: 20%;\n\tfont-size: 1.2em;\n\tmargin: 3px;\n\tpadding: 5px 0px 5px 0px;\n\tborder-radius: 5px;\n}\n\nmain {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.search-box {\n\twidth: 70%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.search-options {\n\tpadding: 25px 0px 25px 0px;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.checkbox {\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\tplace-self: center;\n}\n\n.tag-checkbox {\n\twidth: 10%;\n}\n\n.text-input {\n\twidth: 55%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.text-input-align {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n}\n\n.input-text {\n\talign-self: baseline;\n\tpadding: 10px 10px 5px 0px;\n\tcolor: red;\n\tfont-size: 1.2em;\n\tfont-weight: 800;\n}\n\n.text-input-box {\n\talign-self: flex-end;\n\tpadding: 10px 0px 10px 10px;\n\twidth: 40%;\n\tbackground: none;\n\tborder: none;\n}\n\n.submit-button {\n\twidth: 100%;\n}\n\n.recipe-box {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.error-messages {\n\tfont-size: 1.5em;\n\tfont-weight: 900;\n\tcolor: red;\n\ttext-shadow: 0.5px 0.5px grey;\n}\n\n.grid-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-gap: 1em;\n}\n\n.card-head {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.card-body img {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.individual-recipe {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.left-recipe, .right-recipe {\n\twidth: 50%;\n\tmargin: 0px 20px 0px 20px;\n}\n\n.left-recipe {\n\talign-self: flex-start;\n\twidth: 30%;\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-template-rows: 15% 10% 60% 15%;\n}\n\n.left-recipe > h2 {\n\tgrid-column: span 2;\n\tgrid-row: 2;\n}\n\n.left-recipe > img {\n\tgrid-column: span 2;\n\tgrid-row: 3;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.back-to-main-btn {\n\tgrid-column: 1;\n\twidth: 100%;\n}\n\n.cook-this-now-btn {\n\tgrid-column: 2;\n\twidth: 100%;\n}\n\n.list-btns {\n\twidth: 100%;\n}\n\n.favs {\n\tgrid-column: 1;\n}\n\n.to-cook {\n\tgrid-column: 2;\n}\n\n.pantry-item {\n\twidth: 50%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.left-pantry {\n\talign-self: flex-start;\n\tdisplay: grid;\n\tgrid-gap: 1em;\n\tgrid-column-templates: 50% 50%;\n\tgrid-row-templates: minmax(50%, auto);\n}\n\n.add-to-pantry-input {\n\tbackground: none;\n\tfont-size: 1.1em;\n\tgrid-column: 1;\n}\n\n.add-to-pantry {\n\tbackground: none;\n\tfont-size: 1.1em;\n\tgrid-column: 2;\n}\n\n.submit-to-pantry {\n\talign-self: center;\n\twidth: 100%;\n\tgrid-column: span 2;\n\tgrid-row: 2;\n}\n\n.table-titles {\n\tfont-size: 1.1em;\n}\n\ntable {\n\twidth: 800px;\n}\n\ntr {\n\tpadding: 5px 20px 5px 20px;\n}\n\ntd {\n\tpadding: 5px 20px 5px 20px;\n}\n\n.text-transform {\n\ttext-transform: capitalize;\n}\n\n.hidden {\n\tdisplay: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: ingredientPromise, recipePromise, userPromise, userPantry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientPromise", function() { return ingredientPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipePromise", function() { return recipePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPromise", function() { return userPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPantry", function() { return userPantry; });
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");


const ingredientPromise = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
};

const recipePromise = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
};

const userPromise = () => {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
};

const userPantry = (pantryUpdate) => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pantryUpdate),
  })
    .then(response => response.json())
    .then(ingred => Object(_scripts_js__WEBPACK_IMPORTED_MODULE_0__["getUpdatedPantry"])())
    .catch(err => console.log(`We got a POST error ${err}`))
};


/***/ }),

/***/ "./src/classes/Ingredient.js":
/*!***********************************!*\
  !*** ./src/classes/Ingredient.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.estimatedCostInCents = ingredientData.estimatedCostInCents;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Ingredient);


/***/ }),

/***/ "./src/classes/Pantry.js":
/*!*******************************!*\
  !*** ./src/classes/Pantry.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiCalls */ "./src/apiCalls.js");


class Pantry {
  constructor(currentUser, ingredientsData) {
    this.pantry = currentUser.pantry;
    this.ingredientsData = ingredientsData;
    this.pantryItemInfo = [];
    this.createItemInfo = this.getPantryItemInfo();
  };

  getPantryItemInfo () {
    this.pantryItemInfo = [];

    this.pantry.forEach((item) => {
      this.ingredientsData.forEach((ingredient) => {
        if (item.ingredient === ingredient.id) {
          this.pantryItemInfo.push({
            name: ingredient.name,
            amount: item.amount
          });
        };
      });
    });
    return this.pantryItemInfo;
  };

  checkCookability(recipe, currentUser) {
    let ingredientStatus = recipe.checkPantryForIngredientAmounts(currentUser);
    let notEnoughInPantry = ingredientStatus.filter(ingredient => ingredient.difference < 0);

    return !notEnoughInPantry.length ? true : false;
  };

  removeFromPantry(recipe, currentUser) {
    let thisPantry = recipe.ingredientInfo.filter(ingred => {
      this.pantry.forEach(ingredient => {
        if (ingredient.ingredient === ingred.id) {
          // ingredient.amount -= ingred.quantity;
          let pantryUpdate = {
            userID: currentUser.id,
            ingredientID: ingred.id,
            ingredientModification: -Math.abs(ingred.quantity)
          }
          Object(_apiCalls__WEBPACK_IMPORTED_MODULE_0__["userPantry"])(pantryUpdate);
        };
      });
      return this.pantry;
    });
  };

  addToPantry(inputValue, ingredientId, currentUser) {
    event.preventDefault();
    let pantryUpdate;

    let pantryIngredientIds = this.pantry.reduce((acc, ingredient) => {
      acc.push(ingredient.ingredient);
      return acc;
    }, []);

    this.pantry.forEach(ingredient => {
      if (ingredient.ingredient === ingredientId) {
        pantryUpdate = {
          userID: currentUser.id,
          ingredientID: ingredientId,
          ingredientModification: Math.abs(inputValue)
        }
        ingredient.amount += inputValue;
      }
    });

    if (!pantryIngredientIds.includes(ingredientId)) {
        this.pantry.push({ ingredient: ingredientId, amount: inputValue });
        pantryUpdate = {
          userID: currentUser.id,
          ingredientID: ingredientId,
          ingredientModification: Math.abs(inputValue)
        }
    }

    this.getPantryItemInfo();
    Object(_apiCalls__WEBPACK_IMPORTED_MODULE_0__["userPantry"])(pantryUpdate);
    return this.pantry;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipeData, ingredientsData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.ingredientsData = ingredientsData;
    this.ingredientInfo = [];
    this.moreIngredientInfo = this.getIngredientInfo();
  }

  getIngredientInfo() {
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.forEach(ingred => {
        if (ingredient.id === ingred.id) {
          this.ingredientInfo.push({
            id: ingredient.id,
            name: ingred.name,
            quantity: ingredient.quantity.amount,
            unit: ingredient.quantity.unit,
            estimatedCostInCents: ingred.estimatedCostInCents
          });
        };
      });
    });
    return this.ingredientInfo;
  };

  getIngredientNames() {
    let ingredientsNamesForRecipe = [];

    this.ingredients.map((ingredient) => {
      let ingrID = this.ingredientsData.find(ing => ing.id === ingredient.id);
      ingredientsNamesForRecipe.push(ingrID.name);
    });
    return ingredientsNamesForRecipe;
  };

  getIngredientCosts() {
    let total = this.ingredientInfo.reduce((acc, currentIng) => {
      acc += Math.round((currentIng.quantity *
        currentIng.estimatedCostInCents) / 100);
      return acc;
    }, 0);
    return total;
  };

  getRecipeInstructions() {
    let instructionDetail = [];
    this.instructions.forEach(instruction => {
      let detail = instruction.instruction;
      let number = instruction.number;
      instructionDetail.push(`<li>${detail}<br>`);
    });
    return instructionDetail.join(' ');
  };

  checkPantryForIngredientAmounts(currentUser) {
    let pantryDiff = [];

    this.ingredientInfo.forEach(ingredient => {
      currentUser.pantry.forEach(pantryItem => {
        if (pantryItem.ingredient === ingredient.id) {
          pantryDiff.push(
            {
              recipeAmount: ingredient.quantity,
              pantryAmount: pantryItem.amount,
              difference: parseFloat((pantryItem.amount - ingredient.quantity).toFixed(2))
            });
        };
        if (!pantryItem.ingredient === ingredient.id) {
          pantryDiff.push(
            {
              recipeAmount: ingredient.quantity,
              pantryAmount: 0,
              difference: parseFloat((0 - ingredient.quantity).toFixed(2))
            });
        };
      });
    });
    
    return pantryDiff;
  };

};

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
    this.tags = this.getTags();
  };

  getTags() {
    let allTags = [];
    this.recipes.forEach(recipe => {
      recipe.tags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        };
      });
    });

    return allTags;
  };

  filterByTag(inputTag) {
    let tagged = this.recipes.filter(recipe => recipe.tags.includes(inputTag));
    return tagged;
  };

  searchRecipes(searchInput) {
    let nameSearched = this.searchByName(searchInput);
    let ingredientSearched = this.searchByIngredient(searchInput);
    let recipesWithSearched = nameSearched;

    if (!nameSearched.length) {
      return ingredientSearched;
    } else {
      nameSearched.forEach(nameResult => {
        ingredientSearched.forEach(ingredientResult => {
          if (!nameSearched.includes(ingredientResult)) {
            recipesWithSearched.push(ingredientResult);
          };
        });
      });
      return recipesWithSearched;
    };
  };

  searchByName(searchInput) {
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLowerCase()));
  };

  searchByIngredient(searchInput) {
    let lowerCaseSearch = searchInput.toLowerCase();

    let ingredientSearched = this.ingredients.filter(ingredient => {
      if (!ingredient.name) {
        ingredient.name = 'Not Found';
      }
      return ingredient.name.includes(lowerCaseSearch);
    });

    let searchedIngredientIds = ingredientSearched.map(ingredient => {
      return ingredient.id;
    });

    let matchedRecipes = [];
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (searchedIngredientIds.includes(ingredient.id) && !matchedRecipes.includes(recipe)) {
          matchedRecipes.push(recipe);
        };
      });
    });
    return matchedRecipes;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(name, id, pantry, ingredientsData) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.ingredientsData = ingredientsData;
  };

  addToFavoriteRecipes(recipeAdd) {
    if (!this.favoriteRecipes.includes(recipeAdd)) {
      this.favoriteRecipes.push(recipeAdd);
    };
  };

  removeFromFavoriteRecipes(recipeOut) {
    this.favoriteRecipes.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipeOut), 1);
      };
    });
  };

  addToRecipesToCook(recipeAdd) {
    if (!this.recipesToCook.includes(recipeAdd)) {
      this.recipesToCook.push(recipeAdd);
    };
  };

  removeFromRecipesToCook(recipeOut) {
    this.recipesToCook.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.recipesToCook.splice(this.recipesToCook.indexOf(recipeOut), 1);
      };
    });
  };

  filterFavoriteRecipeTags(inputTag) {
    let tagged = this.favoriteRecipes.filter(recipe => recipe.tags.includes(inputTag));
    return tagged;
  };

  filterFavoriteRecipeByName(searchInput) {
    let matchName = [];
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
        matchName.push(recipe);
      };
    });
    return matchName;
  };

  searchFavorites(searchInput) {
    let nameSearched = this.filterFavoriteRecipeByName(searchInput);
    let ingredientSearched = this.filterFavoriteRecipeByIngred(searchInput);
    let recipesWithSearched = nameSearched.concat(ingredientSearched);
    let favsWithoutDup = [...new Set(recipesWithSearched)];

    return favsWithoutDup;
  };

  filterFavoriteRecipeByIngred(searchInput) {
    let matchIngred = [];

    let matchedName = this.ingredientsData.filter(ingred => {
      if (!ingred.name) {
        ingred.name = 'Not Found';
      };
      return ingred.name.includes(searchInput.toLowerCase());
    });

    this.favoriteRecipes.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        matchedName.forEach(id => {
          if (ingredient.id === id.id) {
            return matchIngred.push(recipe);
          }});
        });
      });
    return matchIngred;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  displayUserName(currentUser) {
    pageTitle.innerText = `What's Cookin' ${currentUser.name}!?`
  },

  populateTags(allRecipes) {
    tagCheckbox.innerHTML = ``;
    allRecipes.tags.forEach(tag => {
      tagCheckbox.innerHTML += `<div><input type="checkbox" id="checkbox-${tag}" class="tag-checkbox" name="checkbox" value="${tag}"> <label for="checkbox-${tag}">${tag.toUpperCase()}</label></div>`;
    });
  },

  displayMessages(error) {
    switch (error) {
      case 1:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage3);
        domUpdates.hide(errorMessage4);
        break;
      case 2:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage2);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage3);
        domUpdates.hide(errorMessage4);
        break;
      case 3:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage3);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage4);
        break;
      case 4:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage4);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage3);
        break;
      case 5:
        domUpdates.hide(errorMessages);
        break;
      default:
        domUpdates.hide(errorMessages);
    };
  },

  populateAllRecipes(allRecipes) {
    domUpdates.show(submitBtn);
    domUpdates.hide(submitFavoriteBtn);
    domUpdates.hideIndividualRecipe();
    domUpdates.hidePantry();

    gridContainer.innerHTML = '';

    allRecipes.recipes.forEach(recipe => {
      gridContainer.innerHTML += `<section tabindex="0" class="grid-item" role="region" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  addRecipeInfo(currentUser, indRecipe) {
    recipeTitle.innerText = indRecipe.name;
    indRecipeImage.src = indRecipe.image;

    ingredientListItems.innerHTML = '<tr class="table-titles"><td>Needed for Recipe</td><td>Amount In Pantry</td></tr>';

    let inPantry = [];

    let pantryMatches = indRecipe.ingredientInfo.map(ingredient => {
      inPantry = currentUser.pantry.find(item => ingredient.id === item.ingredient);
      if (inPantry) {
        return {id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, pantryAmount: inPantry.amount};
      } else {
        return {id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, pantryAmount: 0};
      }
    });

    pantryMatches.forEach(item => {
      ingredientListItems.innerHTML += `<tr><td>${item.name}: ${item.quantity} ${item.unit}</td><td>${item.pantryAmount}</td></tr>`;
    });

    instructionListItems.innerText = '';
    instructionListItems.innerHTML += `${indRecipe.getRecipeInstructions()}`;
    recipeCost.innerText = `Cost:  $${indRecipe.getIngredientCosts()}`;
  },

  hideIndividualRecipe() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.hide(pantryView);
    domUpdates.show(recipeBox);
  },

  populateRecipes(recipes) {
    domUpdates.hideIndividualRecipe();
    domUpdates.hidePantry();

    gridContainer.innerHTML = '';
    recipes.forEach(recipe => {
      gridContainer.innerHTML += `<section class="grid-item" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  filterByFavorites(currentUser) {
    domUpdates.hide(submitBtn);
    domUpdates.show(submitFavoriteBtn);
    domUpdates.hideIndividualRecipe();

    gridContainer.innerHTML = '';

    currentUser.favoriteRecipes.forEach(recipe => {
      gridContainer.innerHTML += `<section class="grid-item" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  filterByCookingList(currentUser) {
    domUpdates.hide(submitFavoriteBtn);
    domUpdates.show(submitBtn);
    domUpdates.hideIndividualRecipe();

    gridContainer.innerHTML = '';

    currentUser.recipesToCook.forEach(recipe => {
      gridContainer.innerHTML += `<section class="grid-item" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  showPantry() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.hide(recipeBox);
    domUpdates.show(pantryView);
  },

  hidePantry() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.show(recipeBox);
    domUpdates.hide(pantryView);
  },

  populatePantryItems(pantry, ingredientsData) {
    domUpdates.showPantry();

    pantry.pantryItemInfo.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    pantryBox.innerHTML = '';

    pantry.pantryItemInfo.forEach((item) => {
      pantryBox.innerHTML += `
      <tr>
        <td class="text-transform">${item.name}</td>
        <td class="text-transform">${item.amount}</td>
      </tr>`;
    });

    domUpdates.populateDropdownMenu(ingredientsData);
  },

  populateDropdownMenu(ingredientsData) {
    ingredientsData.sort((a, b) => {
      if (!a.name) {
        a.name = 'undefined';
      }
      if (!b.name) {
        b.name = 'undefined';
      }
      return a.name.localeCompare(b.name);
    });

    let undefinedIngredients = ingredientsData.reduce((acc, ingredient) => {
      if (ingredient.name === 'undefined') {
        acc.push(ingredientsData.indexOf(ingredient));
      }
      return acc;
    }, []);

    undefinedIngredients.forEach(index => ingredientsData.splice(index, 1));

    ingredientsData.forEach((ingredient) => {
      addToPantry.innerHTML += `<option value="${ingredient.id}">${ingredient.name}</option>`;
    });
  },

  showSearchTerms(search, tags, errorMessage) {
    errorMessage.innerHTML = 'Search results for: ';

    if (tags.length) {
      let joined = tags.join(', ');
      errorMessage.innerHTML += `${joined}`;
    };

    if (search) {
      errorMessage.innerHTML += `${search}`;
    };
  },

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! exports provided: getUpdatedPantry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedPantry", function() { return getUpdatedPantry; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/RecipeRepository */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_Recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Recipe */ "./src/classes/Recipe.js");
/* harmony import */ var _classes_Ingredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Ingredient */ "./src/classes/Ingredient.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");
/* harmony import */ var _classes_Pantry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/Pantry */ "./src/classes/Pantry.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");









let allRecipes = [];
let selectedTags = [];
let currentUser, ingredientsData, recipeData, usersData, pantry, currentRecipe;

const pageTitle = document.getElementById('pageTitle');
const userName = document.getElementById('userName');
const allRecipesBtn = document.getElementById('allRecipesBtn');
const favoriteRecipes = document.getElementById('favoriteRecipes');
const whatToCook = document.getElementById('whatToCook');
const pantryBtn = document.getElementById('pantry');
const addToPantryBtn = document.getElementById('addToPantryBtn');

const form = document.getElementById('form');
const searchBar = document.getElementById('searchBar');
const tagCheckbox = document.getElementById('tagCheckbox');
const submitBtn = document.getElementById('submitBtn');
const submitFavoriteBtn = document.getElementById('submitFavoriteBtn');
const errorMessages = document.getElementById('errorMessages');
const errorMessage = document.getElementById('errorMessage');
const errorMessage2 = document.getElementById('errorMessage2');
const errorMessage3 = document.getElementById('errorMessage3');
const errorMessage4 = document.getElementById('errorMessage4');
const recipeBox = document.getElementById('recipeBox');
const gridContainer = document.getElementById('gridContainer');
const pantryView = document.getElementById('pantryView');
const pantryBox = document.getElementById('pantryBox');

const individualRecipe = document.getElementById('individualRecipe');
const cookThisNowBtn = document.getElementById('cookThisNowBtn');
const backToMainBtn = document.getElementById('backToMainBtn');
const pantryInputNumber = document.getElementById('pantryInputNumber');
const addToPantry = document.getElementById('addToPantry');
const addToFavoriteList = document.getElementById('addToFavoriteList');
const onFavoriteList = document.getElementById('onFavoriteList');
const addToCookingList = document.getElementById('addToCookingList');
const onCookingList = document.getElementById('onCookingList');
const recipeTitle = document.getElementById('recipeTitle');
const indRecipeImage = document.getElementById('indRecipeImage');
const ingredientListItems = document.getElementById('ingredientListItems');
const instructionListItems = document.getElementById('instructionListItems');
const recipeCost = document.getElementById('recipeCost');

window.addEventListener('load', getData);
allRecipesBtn.addEventListener('click', function () {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(5);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(allRecipes);
});
favoriteRecipes.addEventListener('click', function () {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(5);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].filterByFavorites(currentUser);
});
whatToCook.addEventListener('click', function () {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(5);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].filterByCookingList(currentUser);
});
pantryBtn.addEventListener('click', function () {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(5);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populatePantryItems(pantry, ingredientsData);
});
addToPantryBtn.addEventListener('click', function () {
  pantry.addToPantry(parseInt(pantryInputNumber.value), parseInt(addToPantry.value), currentUser)
});
cookThisNowBtn.addEventListener('click', function () {
  pantry.removeFromPantry(currentRecipe, currentUser)
});
tagCheckbox.addEventListener('click', checkCheckboxes);
submitBtn.addEventListener('click', checkSearchConditions);
submitFavoriteBtn.addEventListener('click', checkFavSearchCondtitions);
backToMainBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hideIndividualRecipe);
addToFavoriteList.addEventListener('click', addRecipeToFavorite);
onFavoriteList.addEventListener('click', removeRecipeFromFavorite);
addToCookingList.addEventListener('click', addRecipeToCookingList);
onCookingList.addEventListener('click', removeRecipeFromCookingList);
recipeBox.addEventListener('click', showIndividualRecipe);

function getData() {
  gatherData();
};

function gatherData() {
  let apiIngredientData = Object(_apiCalls__WEBPACK_IMPORTED_MODULE_6__["ingredientPromise"])()
    .then(data => data)
    .catch(error => console.log(`API ingredient error: ${error.message}`))
  let apiRecipeData = Object(_apiCalls__WEBPACK_IMPORTED_MODULE_6__["recipePromise"])()
    .then(data => data)
    .catch(error => console.log(`API recipe error: ${error.message}`))
  let apiUserData = Object(_apiCalls__WEBPACK_IMPORTED_MODULE_6__["userPromise"])()
    .then(data => data)
    .catch(error => console.log(`API user error: ${error.message}`))
  Promise.all([apiIngredientData, apiRecipeData, apiUserData])
    .then(data => initData(data))
};

function initData(data) {
  ingredientsData = data[0];
  recipeData = data[1];
  usersData = data[2];
  const recipeInstances = instantiateRecipe();
  const ingredientInstances = instantiateIngredient();

  instantiateRandomUser();
  populateRepository(recipeInstances, ingredientInstances);
  instantiatePantry();
};

function instantiateRandomUser() {
  let randomUser = usersData[Math.round(Math.random() * usersData.length)];
  currentUser = new _classes_User__WEBPACK_IMPORTED_MODULE_4__["default"](randomUser.name,
    randomUser.id,
    randomUser.pantry,
    ingredientsData);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayUserName(currentUser);
};

function instantiatePantry() {
  pantry = new _classes_Pantry__WEBPACK_IMPORTED_MODULE_5__["default"](currentUser, ingredientsData);
}

function instantiateRecipe() {
  let recipes = [];

  recipeData.forEach(recipe => {
    let newRecipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_2__["default"](recipe, ingredientsData);
    recipes.push(newRecipe);
  });
  return recipes;
};

function instantiateIngredient() {
  let ingredients = [];
  ingredientsData.forEach(ingredient => {
    let newIngredient = new _classes_Ingredient__WEBPACK_IMPORTED_MODULE_3__["default"](ingredient);
    ingredients.push(newIngredient);
  });
  return ingredients;
};

function populateRepository(recipeInstances, ingredientInstances) {
  allRecipes = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_1__["default"](recipeInstances, ingredientInstances);

  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateTags(allRecipes);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(allRecipes);
};

const getUpdatedPantry = () => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populatePantryItems(pantry, ingredientsData);
};

function findRecipeById(indRecipeId) {
  return allRecipes.recipes.find(recipe => parseInt(indRecipeId) === recipe.id);
};

function showIndividualRecipe(event) {
  event.preventDefault();

  let indRecipeId = event.target.closest('section').id;
  currentRecipe = findRecipeById(indRecipeId);

  pantry.checkCookability(currentRecipe, currentUser) ? cookThisNowBtn.removeAttribute('disabled') : cookThisNowBtn.setAttribute('disabled', true);

  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(individualRecipe);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(recipeBox);

  currentUser.favoriteRecipes.forEach(recipe => {
    if (recipe.id === currentRecipe.id) {
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(onFavoriteList);
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(addToFavoriteList);
    };
  });

  currentUser.recipesToCook.forEach(recipe => {
    if (recipe.id === currentRecipe.id) {
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(onCookingList);
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(addToCookingList);
    };
  });

  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].addRecipeInfo(currentUser, currentRecipe);
};

function checkCheckboxes(event) {
  let selected = event.target.value;
  if (!selected) {
    return;
  } else {
    if (event.target.checked) {
      selectedTags.push(selected);
    };
    if (!event.target.checked) {
      selectedTags.splice(selectedTags.indexOf(selected), 1);
    };
  };
};

function checkSearchConditions(event) {
  event.preventDefault();

  if (!searchBar.value && !selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(1);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(allRecipes);
  };
  if (searchBar.value) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(4);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateRecipes(allRecipes.searchRecipes(searchBar.value));
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].showSearchTerms(searchBar.value, 0, errorMessage4);
  };
  if (selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(4);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].showSearchTerms(0, selectedTags, errorMessage4);

    let taggedRecipes = [];
    selectedTags.forEach(tag => {
      taggedRecipes.push(allRecipes.filterByTag(tag));
    });
    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];
    selectedTags.length ? _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateRecipes(withoutDuplicates) : _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes();
  };
  if (searchBar.value && selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(2);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(allRecipes);
  };

  form.reset();
  selectedTags = [];
};

function checkFavSearchCondtitions(event) {
  event.preventDefault();

  if (!searchBar.value && !selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(1);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(currentUser.favoriteRecipes);
  };
  if (searchBar.value) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(4);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateRecipes(allRecipes.searchFavorites(searchBar.value));
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].showSearchTerms(searchBar.value, 0, errorMessage4);
  };
  if (selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(4);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].showSearchTerms(0, selectedTags, errorMessage4);

    let taggedRecipes = [];
    selectedTags.forEach(tag => {
      taggedRecipes.push(allRecipes.filterFavoriteRecipeTags(tag));
    });
    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];
    selectedTags.length ? _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateRecipes(withoutDuplicates) : _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateRecipes(currentUser.favoriteRecipes);
  };
  if (searchBar.value && selectedTags.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayMessages(2);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].populateAllRecipes(currentUser.favoriteRecipes);
  };

  form.reset();
  selectedTags = [];
};

function addRecipeToFavorite() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(addToFavoriteList);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(onFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.addToFavoriteRecipes(recipe);
    };
  });
};

function removeRecipeFromFavorite() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(onFavoriteList);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(addToFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.removeFromFavoriteRecipes(recipe);
    };
  });
};

function addRecipeToCookingList() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(addToCookingList);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(onCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.addToRecipesToCook(recipe);
    };
  });
};

function removeRecipeFromCookingList() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hide(onCookingList);
  _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].show(addToCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.removeFromRecipesToCook(recipe);
    };
  });
};

function hideView(event) {
  if (event.target.parentNode.id === "pantryView") {
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hidePantryView();
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0luZ3JlZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvUGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxpQkFBaUIsRUFBRSxpREFBaUQsb0JBQW9CLEVBQUUscUJBQXFCLHdCQUF3QixFQUFFLFVBQVUsd0JBQXdCLDZEQUE2RCxpQkFBaUIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsRUFBRSxZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEVBQUUsaUJBQWlCLGVBQWUsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsRUFBRSxTQUFTLGVBQWUsa0JBQWtCLGtDQUFrQyx1QkFBdUIsRUFBRSxZQUFZLHFCQUFxQixlQUFlLHFCQUFxQixnQkFBZ0IsNkJBQTZCLHVCQUF1QixFQUFFLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IsRUFBRSxpQkFBaUIsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixFQUFFLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixFQUFFLGVBQWUsZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsdUJBQXVCLEVBQUUsbUJBQW1CLGVBQWUsRUFBRSxpQkFBaUIsZUFBZSxrQkFBa0IsMkJBQTJCLEVBQUUsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEVBQUUsaUJBQWlCLHlCQUF5QiwrQkFBK0IsZUFBZSxxQkFBcUIscUJBQXFCLEVBQUUscUJBQXFCLHlCQUF5QixnQ0FBZ0MsZUFBZSxxQkFBcUIsaUJBQWlCLEVBQUUsb0JBQW9CLGdCQUFnQixFQUFFLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsRUFBRSxxQkFBcUIscUJBQXFCLHFCQUFxQixlQUFlLGtDQUFrQyxFQUFFLHFCQUFxQixrQkFBa0IsMENBQTBDLGtCQUFrQixFQUFFLGdCQUFnQixrQkFBa0IsNEJBQTRCLEVBQUUsb0JBQW9CLGlCQUFpQixnQkFBZ0IsRUFBRSx3QkFBd0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLEVBQUUsaUNBQWlDLGVBQWUsOEJBQThCLEVBQUUsa0JBQWtCLDJCQUEyQixlQUFlLGtCQUFrQixtQ0FBbUMsd0NBQXdDLEVBQUUsdUJBQXVCLHdCQUF3QixnQkFBZ0IsRUFBRSx3QkFBd0Isd0JBQXdCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLEVBQUUsdUJBQXVCLG1CQUFtQixnQkFBZ0IsRUFBRSx3QkFBd0IsbUJBQW1CLGdCQUFnQixFQUFFLGdCQUFnQixnQkFBZ0IsRUFBRSxXQUFXLG1CQUFtQixFQUFFLGNBQWMsbUJBQW1CLEVBQUUsa0JBQWtCLGVBQWUsa0JBQWtCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLEVBQUUsa0JBQWtCLDJCQUEyQixrQkFBa0Isa0JBQWtCLG1DQUFtQywwQ0FBMEMsRUFBRSwwQkFBMEIscUJBQXFCLHFCQUFxQixtQkFBbUIsRUFBRSxvQkFBb0IscUJBQXFCLHFCQUFxQixtQkFBbUIsRUFBRSx1QkFBdUIsdUJBQXVCLGdCQUFnQix3QkFBd0IsZ0JBQWdCLEVBQUUsbUJBQW1CLHFCQUFxQixFQUFFLFdBQVcsaUJBQWlCLEVBQUUsUUFBUSwrQkFBK0IsRUFBRSxRQUFRLCtCQUErQixFQUFFLHFCQUFxQiwrQkFBK0IsRUFBRSxhQUFhLGtCQUFrQixFQUFFLFNBQVMsaUZBQWlGLGdCQUFnQixTQUFTLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksaUJBQWlCLEtBQUssZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxXQUFXLFlBQVksaUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sc0NBQXNDLGlCQUFpQixHQUFHLGlEQUFpRCxvQkFBb0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsVUFB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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4RnRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFFaEM7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLElBQUksbURBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsbURBQVUsc0NBQXNDLG1EQUFVO0FBQ3BGO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdUQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUN6RixZQUFnSTs7QUFFaEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbmJ1dHRvbixcXG5pbWcsXFxuLmdyaWQtY29udGFpbmVyLFxcbmgzLFxcbmlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjODIyZTJlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM4MjJlMmUgMCUsIGJsYWNrIDc1JSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggZ3JleTsgfVxcblxcbm5hdiB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB3aWR0aDogMjAlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5zZWFyY2gtb3B0aW9ucyB7XFxuICBwYWRkaW5nOiAyNXB4IDBweCAyNXB4IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2hlY2tib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjsgfVxcblxcbi50YWctY2hlY2tib3gge1xcbiAgd2lkdGg6IDEwJTsgfVxcblxcbi50ZXh0LWlucHV0IHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi50ZXh0LWlucHV0LWFsaWduIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uaW5wdXQtdGV4dCB7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMHB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogODAwOyB9XFxuXFxuLnRleHQtaW5wdXQtYm94IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5yZWNpcGUtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmVycm9yLW1lc3NhZ2VzIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCBncmV5OyB9XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDFlbTsgfVxcblxcbi5jYXJkLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNhcmQtYm9keSBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaW5kaXZpZHVhbC1yZWNpcGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubGVmdC1yZWNpcGUsIC5yaWdodC1yZWNpcGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7IH1cXG5cXG4ubGVmdC1yZWNpcGUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMTAlIDYwJSAxNSU7IH1cXG5cXG4ubGVmdC1yZWNpcGUgPiBoMiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4ubGVmdC1yZWNpcGUgPiBpbWcge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93OiAzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYmFjay10by1tYWluLWJ0biB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvb2stdGhpcy1ub3ctYnRuIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubGlzdC1idG5zIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZhdnMge1xcbiAgZ3JpZC1jb2x1bW46IDE7IH1cXG5cXG4udG8tY29vayB7XFxuICBncmlkLWNvbHVtbjogMjsgfVxcblxcbi5wYW50cnktaXRlbSB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG5cXG4ubGVmdC1wYW50cnkge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMWVtO1xcbiAgZ3JpZC1jb2x1bW4tdGVtcGxhdGVzOiA1MCUgNTAlO1xcbiAgZ3JpZC1yb3ctdGVtcGxhdGVzOiBtaW5tYXgoNTAlLCBhdXRvKTsgfVxcblxcbi5hZGQtdG8tcGFudHJ5LWlucHV0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZ3JpZC1jb2x1bW46IDE7IH1cXG5cXG4uYWRkLXRvLXBhbnRyeSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGdyaWQtY29sdW1uOiAyOyB9XFxuXFxuLnN1Ym1pdC10by1wYW50cnkge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4udGFibGUtdGl0bGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogODAwcHg7IH1cXG5cXG50ciB7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDsgfVxcblxcbnRkIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4OyB9XFxuXFxuLnRleHQtdHJhbnNmb3JtIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxZQUFZLEVBQUE7O0FBR2I7Ozs7O0VBS0MsZUFBZSxFQUFBOztBQUdoQjtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLG1CQUEwQjtFQUMxQix3REFBMEU7RUFDMUUsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxVQUFVO0VBQ1YsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3hCO0VBQ0Msb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2I7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw2QkFBNkIsRUFBQTs7QUFHOUI7RUFDQyxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGFBQWEsRUFBQTs7QUFHZDtFQUNDLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHeEI7RUFDQyxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdaO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUcxQjtFQUNDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQ0FBbUMsRUFBQTs7QUFHcEM7RUFDQyxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdaO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdaO0VBQ0MsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHWjtFQUNDLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR1o7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCLEVBQUE7O0FBRzlCO0VBQ0Msc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQyxFQUFBOztBQUd0QztFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdmO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2Y7RUFDQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBR1o7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQywwQkFBMEIsRUFBQTs7QUFHM0I7RUFDQywwQkFBMEIsRUFBQTs7QUFHM0I7RUFDQywwQkFBMEIsRUFBQTs7QUFHM0I7RUFDQyxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24sXFxuaW1nLFxcbi5ncmlkLWNvbnRhaW5lcixcXG5oMyxcXG5pbnB1dCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcblxcdGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6IHJnYigxMzAsNDYsNDYpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEzMCw0Niw0NiwxKSAwJSwgcmdiYSgwLDAsMCwxKSA3NSUpO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC1zaXplOiA0ZW07XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xcblxcdHRleHQtc2hhZG93OiAycHggMnB4IGdyZXk7XFxufVxcblxcbm5hdiB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRtYXJnaW46IDNweDtcXG5cXHRwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLW9wdGlvbnMge1xcblxcdHBhZGRpbmc6IDI1cHggMHB4IDI1cHggMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YWctY2hlY2tib3gge1xcblxcdHdpZHRoOiAxMCU7XFxufVxcblxcbi50ZXh0LWlucHV0IHtcXG5cXHR3aWR0aDogNTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRleHQtaW5wdXQtYWxpZ24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRleHQge1xcblxcdGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcblxcdHBhZGRpbmc6IDEwcHggMTBweCA1cHggMHB4O1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4udGV4dC1pbnB1dC1ib3gge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTBweDtcXG5cXHR3aWR0aDogNDAlO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2VzIHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Y29sb3I6IHJlZDtcXG5cXHR0ZXh0LXNoYWRvdzogMC41cHggMC41cHggZ3JleTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0Z3JpZC1nYXA6IDFlbTtcXG59XFxuXFxuLmNhcmQtaGVhZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtYm9keSBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZGl2aWR1YWwtcmVjaXBlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQtcmVjaXBlLCAucmlnaHQtcmVjaXBlIHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XFxufVxcblxcbi5sZWZ0LXJlY2lwZSB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHR3aWR0aDogMzAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDEwJSA2MCUgMTUlO1xcbn1cXG5cXG4ubGVmdC1yZWNpcGUgPiBoMiB7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcXG5cXHRncmlkLXJvdzogMjtcXG59XFxuXFxuLmxlZnQtcmVjaXBlID4gaW1nIHtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGdyaWQtcm93OiAzO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJhY2stdG8tbWFpbi1idG4ge1xcblxcdGdyaWQtY29sdW1uOiAxO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29vay10aGlzLW5vdy1idG4ge1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdC1idG5zIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZhdnMge1xcblxcdGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4udG8tY29vayB7XFxuXFx0Z3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5wYW50cnktaXRlbSB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmxlZnQtcGFudHJ5IHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1nYXA6IDFlbTtcXG5cXHRncmlkLWNvbHVtbi10ZW1wbGF0ZXM6IDUwJSA1MCU7XFxuXFx0Z3JpZC1yb3ctdGVtcGxhdGVzOiBtaW5tYXgoNTAlLCBhdXRvKTtcXG59XFxuXFxuLmFkZC10by1wYW50cnktaW5wdXQge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxLjFlbTtcXG5cXHRncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLmFkZC10by1wYW50cnkge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxLjFlbTtcXG5cXHRncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnN1Ym1pdC10by1wYW50cnkge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udGFibGUtdGl0bGVzIHtcXG5cXHRmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG50YWJsZSB7XFxuXFx0d2lkdGg6IDgwMHB4O1xcbn1cXG5cXG50ciB7XFxuXFx0cGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XFxufVxcblxcbnRkIHtcXG5cXHRwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG59XFxuXFxuLnRleHQtdHJhbnNmb3JtIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHtnZXRVcGRhdGVkUGFudHJ5fSBmcm9tICcuL3NjcmlwdHMuanMnO1xuXG5leHBvcnQgY29uc3QgaW5ncmVkaWVudFByb21pc2UgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50cycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufTtcblxuZXhwb3J0IGNvbnN0IHJlY2lwZVByb21pc2UgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclByb21pc2UgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJQYW50cnkgPSAocGFudHJ5VXBkYXRlKSA9PiB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhbnRyeVVwZGF0ZSksXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGluZ3JlZCA9PiBnZXRVcGRhdGVkUGFudHJ5KCkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgV2UgZ290IGEgUE9TVCBlcnJvciAke2Vycn1gKSlcbn07XG4iLCJjbGFzcyBJbmdyZWRpZW50IHtcbiAgY29uc3RydWN0b3IoaW5ncmVkaWVudERhdGEpIHtcbiAgICB0aGlzLmlkID0gaW5ncmVkaWVudERhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gaW5ncmVkaWVudERhdGEubmFtZTtcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudERhdGEuZXN0aW1hdGVkQ29zdEluQ2VudHM7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50O1xuIiwiaW1wb3J0IHsgdXNlclBhbnRyeSB9IGZyb20gJy4uL2FwaUNhbGxzJ1xuXG5jbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3RvcihjdXJyZW50VXNlciwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5wYW50cnkgPSBjdXJyZW50VXNlci5wYW50cnk7XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy5wYW50cnlJdGVtSW5mbyA9IFtdO1xuICAgIHRoaXMuY3JlYXRlSXRlbUluZm8gPSB0aGlzLmdldFBhbnRyeUl0ZW1JbmZvKCk7XG4gIH07XG5cbiAgZ2V0UGFudHJ5SXRlbUluZm8gKCkge1xuICAgIHRoaXMucGFudHJ5SXRlbUluZm8gPSBbXTtcblxuICAgIHRoaXMucGFudHJ5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIHRoaXMucGFudHJ5SXRlbUluZm8ucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBpbmdyZWRpZW50Lm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wYW50cnlJdGVtSW5mbztcbiAgfTtcblxuICBjaGVja0Nvb2thYmlsaXR5KHJlY2lwZSwgY3VycmVudFVzZXIpIHtcbiAgICBsZXQgaW5ncmVkaWVudFN0YXR1cyA9IHJlY2lwZS5jaGVja1BhbnRyeUZvckluZ3JlZGllbnRBbW91bnRzKGN1cnJlbnRVc2VyKTtcbiAgICBsZXQgbm90RW5vdWdoSW5QYW50cnkgPSBpbmdyZWRpZW50U3RhdHVzLmZpbHRlcihpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuZGlmZmVyZW5jZSA8IDApO1xuXG4gICAgcmV0dXJuICFub3RFbm91Z2hJblBhbnRyeS5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmVtb3ZlRnJvbVBhbnRyeShyZWNpcGUsIGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IHRoaXNQYW50cnkgPSByZWNpcGUuaW5ncmVkaWVudEluZm8uZmlsdGVyKGluZ3JlZCA9PiB7XG4gICAgICB0aGlzLnBhbnRyeS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWQuaWQpIHtcbiAgICAgICAgICAvLyBpbmdyZWRpZW50LmFtb3VudCAtPSBpbmdyZWQucXVhbnRpdHk7XG4gICAgICAgICAgbGV0IHBhbnRyeVVwZGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJJRDogY3VycmVudFVzZXIuaWQsXG4gICAgICAgICAgICBpbmdyZWRpZW50SUQ6IGluZ3JlZC5pZCxcbiAgICAgICAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IC1NYXRoLmFicyhpbmdyZWQucXVhbnRpdHkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZXJQYW50cnkocGFudHJ5VXBkYXRlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMucGFudHJ5O1xuICAgIH0pO1xuICB9O1xuXG4gIGFkZFRvUGFudHJ5KGlucHV0VmFsdWUsIGluZ3JlZGllbnRJZCwgY3VycmVudFVzZXIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwYW50cnlVcGRhdGU7XG5cbiAgICBsZXQgcGFudHJ5SW5ncmVkaWVudElkcyA9IHRoaXMucGFudHJ5LnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBhY2MucHVzaChpbmdyZWRpZW50LmluZ3JlZGllbnQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnBhbnRyeS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGluZ3JlZGllbnQuaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudElkKSB7XG4gICAgICAgIHBhbnRyeVVwZGF0ZSA9IHtcbiAgICAgICAgICB1c2VySUQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgICAgIGluZ3JlZGllbnRJRDogaW5ncmVkaWVudElkLFxuICAgICAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IE1hdGguYWJzKGlucHV0VmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgaW5ncmVkaWVudC5hbW91bnQgKz0gaW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcGFudHJ5SW5ncmVkaWVudElkcy5pbmNsdWRlcyhpbmdyZWRpZW50SWQpKSB7XG4gICAgICAgIHRoaXMucGFudHJ5LnB1c2goeyBpbmdyZWRpZW50OiBpbmdyZWRpZW50SWQsIGFtb3VudDogaW5wdXRWYWx1ZSB9KTtcbiAgICAgICAgcGFudHJ5VXBkYXRlID0ge1xuICAgICAgICAgIHVzZXJJRDogY3VycmVudFVzZXIuaWQsXG4gICAgICAgICAgaW5ncmVkaWVudElEOiBpbmdyZWRpZW50SWQsXG4gICAgICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvbjogTWF0aC5hYnMoaW5wdXRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZ2V0UGFudHJ5SXRlbUluZm8oKTtcbiAgICB1c2VyUGFudHJ5KHBhbnRyeVVwZGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMucGFudHJ5O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5O1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlRGF0YSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZURhdGEuaWQ7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZURhdGEuaW1hZ2U7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZURhdGEuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGVEYXRhLmluc3RydWN0aW9ucztcbiAgICB0aGlzLm5hbWUgPSByZWNpcGVEYXRhLm5hbWU7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlRGF0YS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICAgIHRoaXMuaW5ncmVkaWVudEluZm8gPSBbXTtcbiAgICB0aGlzLm1vcmVJbmdyZWRpZW50SW5mbyA9IHRoaXMuZ2V0SW5ncmVkaWVudEluZm8oKTtcbiAgfVxuXG4gIGdldEluZ3JlZGllbnRJbmZvKCkge1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZvckVhY2goaW5ncmVkID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGluZ3JlZC5pZCkge1xuICAgICAgICAgIHRoaXMuaW5ncmVkaWVudEluZm8ucHVzaCh7XG4gICAgICAgICAgICBpZDogaW5ncmVkaWVudC5pZCxcbiAgICAgICAgICAgIG5hbWU6IGluZ3JlZC5uYW1lLFxuICAgICAgICAgICAgcXVhbnRpdHk6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LFxuICAgICAgICAgICAgdW5pdDogaW5ncmVkaWVudC5xdWFudGl0eS51bml0LFxuICAgICAgICAgICAgZXN0aW1hdGVkQ29zdEluQ2VudHM6IGluZ3JlZC5lc3RpbWF0ZWRDb3N0SW5DZW50c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudEluZm87XG4gIH07XG5cbiAgZ2V0SW5ncmVkaWVudE5hbWVzKCkge1xuICAgIGxldCBpbmdyZWRpZW50c05hbWVzRm9yUmVjaXBlID0gW107XG5cbiAgICB0aGlzLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgbGV0IGluZ3JJRCA9IHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5nID0+IGluZy5pZCA9PT0gaW5ncmVkaWVudC5pZCk7XG4gICAgICBpbmdyZWRpZW50c05hbWVzRm9yUmVjaXBlLnB1c2goaW5ncklELm5hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbmdyZWRpZW50c05hbWVzRm9yUmVjaXBlO1xuICB9O1xuXG4gIGdldEluZ3JlZGllbnRDb3N0cygpIHtcbiAgICBsZXQgdG90YWwgPSB0aGlzLmluZ3JlZGllbnRJbmZvLnJlZHVjZSgoYWNjLCBjdXJyZW50SW5nKSA9PiB7XG4gICAgICBhY2MgKz0gTWF0aC5yb3VuZCgoY3VycmVudEluZy5xdWFudGl0eSAqXG4gICAgICAgIGN1cnJlbnRJbmcuZXN0aW1hdGVkQ29zdEluQ2VudHMpIC8gMTAwKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9O1xuXG4gIGdldFJlY2lwZUluc3RydWN0aW9ucygpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25EZXRhaWwgPSBbXTtcbiAgICB0aGlzLmluc3RydWN0aW9ucy5mb3JFYWNoKGluc3RydWN0aW9uID0+IHtcbiAgICAgIGxldCBkZXRhaWwgPSBpbnN0cnVjdGlvbi5pbnN0cnVjdGlvbjtcbiAgICAgIGxldCBudW1iZXIgPSBpbnN0cnVjdGlvbi5udW1iZXI7XG4gICAgICBpbnN0cnVjdGlvbkRldGFpbC5wdXNoKGA8bGk+JHtkZXRhaWx9PGJyPmApO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0cnVjdGlvbkRldGFpbC5qb2luKCcgJyk7XG4gIH07XG5cbiAgY2hlY2tQYW50cnlGb3JJbmdyZWRpZW50QW1vdW50cyhjdXJyZW50VXNlcikge1xuICAgIGxldCBwYW50cnlEaWZmID0gW107XG5cbiAgICB0aGlzLmluZ3JlZGllbnRJbmZvLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBjdXJyZW50VXNlci5wYW50cnkuZm9yRWFjaChwYW50cnlJdGVtID0+IHtcbiAgICAgICAgaWYgKHBhbnRyeUl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIHBhbnRyeURpZmYucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVjaXBlQW1vdW50OiBpbmdyZWRpZW50LnF1YW50aXR5LFxuICAgICAgICAgICAgICBwYW50cnlBbW91bnQ6IHBhbnRyeUl0ZW0uYW1vdW50LFxuICAgICAgICAgICAgICBkaWZmZXJlbmNlOiBwYXJzZUZsb2F0KChwYW50cnlJdGVtLmFtb3VudCAtIGluZ3JlZGllbnQucXVhbnRpdHkpLnRvRml4ZWQoMikpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFwYW50cnlJdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBwYW50cnlEaWZmLnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlY2lwZUFtb3VudDogaW5ncmVkaWVudC5xdWFudGl0eSxcbiAgICAgICAgICAgICAgcGFudHJ5QW1vdW50OiAwLFxuICAgICAgICAgICAgICBkaWZmZXJlbmNlOiBwYXJzZUZsb2F0KCgwIC0gaW5ncmVkaWVudC5xdWFudGl0eSkudG9GaXhlZCgyKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhbnRyeURpZmY7XG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImNsYXNzIFJlY2lwZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihyZWNpcGVEYXRhLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVEYXRhO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy50YWdzID0gdGhpcy5nZXRUYWdzKCk7XG4gIH07XG5cbiAgZ2V0VGFncygpIHtcbiAgICBsZXQgYWxsVGFncyA9IFtdO1xuICAgIHRoaXMucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICByZWNpcGUudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIGlmICghYWxsVGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgYWxsVGFncy5wdXNoKHRhZyk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbGxUYWdzO1xuICB9O1xuXG4gIGZpbHRlckJ5VGFnKGlucHV0VGFnKSB7XG4gICAgbGV0IHRhZ2dlZCA9IHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmluY2x1ZGVzKGlucHV0VGFnKSk7XG4gICAgcmV0dXJuIHRhZ2dlZDtcbiAgfTtcblxuICBzZWFyY2hSZWNpcGVzKHNlYXJjaElucHV0KSB7XG4gICAgbGV0IG5hbWVTZWFyY2hlZCA9IHRoaXMuc2VhcmNoQnlOYW1lKHNlYXJjaElucHV0KTtcbiAgICBsZXQgaW5ncmVkaWVudFNlYXJjaGVkID0gdGhpcy5zZWFyY2hCeUluZ3JlZGllbnQoc2VhcmNoSW5wdXQpO1xuICAgIGxldCByZWNpcGVzV2l0aFNlYXJjaGVkID0gbmFtZVNlYXJjaGVkO1xuXG4gICAgaWYgKCFuYW1lU2VhcmNoZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudFNlYXJjaGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lU2VhcmNoZWQuZm9yRWFjaChuYW1lUmVzdWx0ID0+IHtcbiAgICAgICAgaW5ncmVkaWVudFNlYXJjaGVkLmZvckVhY2goaW5ncmVkaWVudFJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKCFuYW1lU2VhcmNoZWQuaW5jbHVkZXMoaW5ncmVkaWVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlY2lwZXNXaXRoU2VhcmNoZWQucHVzaChpbmdyZWRpZW50UmVzdWx0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlY2lwZXNXaXRoU2VhcmNoZWQ7XG4gICAgfTtcbiAgfTtcblxuICBzZWFyY2hCeU5hbWUoc2VhcmNoSW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKSk7XG4gIH07XG5cbiAgc2VhcmNoQnlJbmdyZWRpZW50KHNlYXJjaElucHV0KSB7XG4gICAgbGV0IGxvd2VyQ2FzZVNlYXJjaCA9IHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgaW5ncmVkaWVudFNlYXJjaGVkID0gdGhpcy5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAoIWluZ3JlZGllbnQubmFtZSkge1xuICAgICAgICBpbmdyZWRpZW50Lm5hbWUgPSAnTm90IEZvdW5kJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMobG93ZXJDYXNlU2VhcmNoKTtcbiAgICB9KTtcblxuICAgIGxldCBzZWFyY2hlZEluZ3JlZGllbnRJZHMgPSBpbmdyZWRpZW50U2VhcmNoZWQubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQ7XG4gICAgfSk7XG5cbiAgICBsZXQgbWF0Y2hlZFJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hlZEluZ3JlZGllbnRJZHMuaW5jbHVkZXMoaW5ncmVkaWVudC5pZCkgJiYgIW1hdGNoZWRSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgICBtYXRjaGVkUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZFJlY2lwZXM7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlkLCBwYW50cnksIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gIH07XG5cbiAgYWRkVG9GYXZvcml0ZVJlY2lwZXMocmVjaXBlQWRkKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGVBZGQpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZUFkZCk7XG4gICAgfTtcbiAgfTtcblxuICByZW1vdmVGcm9tRmF2b3JpdGVSZWNpcGVzKHJlY2lwZU91dCkge1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmIChyZWNpcGVPdXQubmFtZSA9PT0gcmVjaXBlLm5hbWUpIHtcbiAgICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuc3BsaWNlKHRoaXMuZmF2b3JpdGVSZWNpcGVzLmluZGV4T2YocmVjaXBlT3V0KSwgMSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGVBZGQpIHtcbiAgICBpZiAoIXRoaXMucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhyZWNpcGVBZGQpKSB7XG4gICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGVBZGQpO1xuICAgIH07XG4gIH07XG5cbiAgcmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2socmVjaXBlT3V0KSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmIChyZWNpcGVPdXQubmFtZSA9PT0gcmVjaXBlLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnNwbGljZSh0aGlzLnJlY2lwZXNUb0Nvb2suaW5kZXhPZihyZWNpcGVPdXQpLCAxKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZmlsdGVyRmF2b3JpdGVSZWNpcGVUYWdzKGlucHV0VGFnKSB7XG4gICAgbGV0IHRhZ2dlZCA9IHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnRhZ3MuaW5jbHVkZXMoaW5wdXRUYWcpKTtcbiAgICByZXR1cm4gdGFnZ2VkO1xuICB9O1xuXG4gIGZpbHRlckZhdm9yaXRlUmVjaXBlQnlOYW1lKHNlYXJjaElucHV0KSB7XG4gICAgbGV0IG1hdGNoTmFtZSA9IFtdO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmIChyZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIG1hdGNoTmFtZS5wdXNoKHJlY2lwZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaE5hbWU7XG4gIH07XG5cbiAgc2VhcmNoRmF2b3JpdGVzKHNlYXJjaElucHV0KSB7XG4gICAgbGV0IG5hbWVTZWFyY2hlZCA9IHRoaXMuZmlsdGVyRmF2b3JpdGVSZWNpcGVCeU5hbWUoc2VhcmNoSW5wdXQpO1xuICAgIGxldCBpbmdyZWRpZW50U2VhcmNoZWQgPSB0aGlzLmZpbHRlckZhdm9yaXRlUmVjaXBlQnlJbmdyZWQoc2VhcmNoSW5wdXQpO1xuICAgIGxldCByZWNpcGVzV2l0aFNlYXJjaGVkID0gbmFtZVNlYXJjaGVkLmNvbmNhdChpbmdyZWRpZW50U2VhcmNoZWQpO1xuICAgIGxldCBmYXZzV2l0aG91dER1cCA9IFsuLi5uZXcgU2V0KHJlY2lwZXNXaXRoU2VhcmNoZWQpXTtcblxuICAgIHJldHVybiBmYXZzV2l0aG91dER1cDtcbiAgfTtcblxuICBmaWx0ZXJGYXZvcml0ZVJlY2lwZUJ5SW5ncmVkKHNlYXJjaElucHV0KSB7XG4gICAgbGV0IG1hdGNoSW5ncmVkID0gW107XG5cbiAgICBsZXQgbWF0Y2hlZE5hbWUgPSB0aGlzLmluZ3JlZGllbnRzRGF0YS5maWx0ZXIoaW5ncmVkID0+IHtcbiAgICAgIGlmICghaW5ncmVkLm5hbWUpIHtcbiAgICAgICAgaW5ncmVkLm5hbWUgPSAnTm90IEZvdW5kJztcbiAgICAgIH07XG4gICAgICByZXR1cm4gaW5ncmVkLm5hbWUuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBtYXRjaGVkTmFtZS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gaWQuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaEluZ3JlZC5wdXNoKHJlY2lwZSk7XG4gICAgICAgICAgfX0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBtYXRjaEluZ3JlZDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJsZXQgZG9tVXBkYXRlcyA9IHtcblxuICBkaXNwbGF5VXNlck5hbWUoY3VycmVudFVzZXIpIHtcbiAgICBwYWdlVGl0bGUuaW5uZXJUZXh0ID0gYFdoYXQncyBDb29raW4nICR7Y3VycmVudFVzZXIubmFtZX0hP2BcbiAgfSxcblxuICBwb3B1bGF0ZVRhZ3MoYWxsUmVjaXBlcykge1xuICAgIHRhZ0NoZWNrYm94LmlubmVySFRNTCA9IGBgO1xuICAgIGFsbFJlY2lwZXMudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICB0YWdDaGVja2JveC5pbm5lckhUTUwgKz0gYDxkaXY+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3gtJHt0YWd9XCIgY2xhc3M9XCJ0YWctY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiB2YWx1ZT1cIiR7dGFnfVwiPiA8bGFiZWwgZm9yPVwiY2hlY2tib3gtJHt0YWd9XCI+JHt0YWcudG9VcHBlckNhc2UoKX08L2xhYmVsPjwvZGl2PmA7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGlzcGxheU1lc3NhZ2VzKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvcikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBkb21VcGRhdGVzLnNob3coZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgIGRvbVVwZGF0ZXMuc2hvdyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICBkb21VcGRhdGVzLmhpZGUoZXJyb3JNZXNzYWdlMik7XG4gICAgICAgIGRvbVVwZGF0ZXMuaGlkZShlcnJvck1lc3NhZ2UzKTtcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlKGVycm9yTWVzc2FnZTQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZG9tVXBkYXRlcy5zaG93KGVycm9yTWVzc2FnZXMpO1xuICAgICAgICBkb21VcGRhdGVzLnNob3coZXJyb3JNZXNzYWdlMik7XG4gICAgICAgIGRvbVVwZGF0ZXMuaGlkZShlcnJvck1lc3NhZ2UpO1xuICAgICAgICBkb21VcGRhdGVzLmhpZGUoZXJyb3JNZXNzYWdlMyk7XG4gICAgICAgIGRvbVVwZGF0ZXMuaGlkZShlcnJvck1lc3NhZ2U0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGRvbVVwZGF0ZXMuc2hvdyhlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgZG9tVXBkYXRlcy5zaG93KGVycm9yTWVzc2FnZTMpO1xuICAgICAgICBkb21VcGRhdGVzLmhpZGUoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlKGVycm9yTWVzc2FnZTIpO1xuICAgICAgICBkb21VcGRhdGVzLmhpZGUoZXJyb3JNZXNzYWdlNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBkb21VcGRhdGVzLnNob3coZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgIGRvbVVwZGF0ZXMuc2hvdyhlcnJvck1lc3NhZ2U0KTtcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGRvbVVwZGF0ZXMuaGlkZShlcnJvck1lc3NhZ2UyKTtcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlKGVycm9yTWVzc2FnZTMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlKGVycm9yTWVzc2FnZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRvbVVwZGF0ZXMuaGlkZShlcnJvck1lc3NhZ2VzKTtcbiAgICB9O1xuICB9LFxuXG4gIHBvcHVsYXRlQWxsUmVjaXBlcyhhbGxSZWNpcGVzKSB7XG4gICAgZG9tVXBkYXRlcy5zaG93KHN1Ym1pdEJ0bik7XG4gICAgZG9tVXBkYXRlcy5oaWRlKHN1Ym1pdEZhdm9yaXRlQnRuKTtcbiAgICBkb21VcGRhdGVzLmhpZGVJbmRpdmlkdWFsUmVjaXBlKCk7XG4gICAgZG9tVXBkYXRlcy5oaWRlUGFudHJ5KCk7XG5cbiAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgYWxsUmVjaXBlcy5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MICs9IGA8c2VjdGlvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImdyaWQtaXRlbVwiIHJvbGU9XCJyZWdpb25cIiBpZD1cIiR7cmVjaXBlLmlkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkXCI+XG4gICAgICAgICAgPHA+JHtyZWNpcGUubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBhbHQ9XCIke3JlY2lwZS5uYW1lfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgIH0pO1xuICB9LFxuXG4gIGFkZFJlY2lwZUluZm8oY3VycmVudFVzZXIsIGluZFJlY2lwZSkge1xuICAgIHJlY2lwZVRpdGxlLmlubmVyVGV4dCA9IGluZFJlY2lwZS5uYW1lO1xuICAgIGluZFJlY2lwZUltYWdlLnNyYyA9IGluZFJlY2lwZS5pbWFnZTtcblxuICAgIGluZ3JlZGllbnRMaXN0SXRlbXMuaW5uZXJIVE1MID0gJzx0ciBjbGFzcz1cInRhYmxlLXRpdGxlc1wiPjx0ZD5OZWVkZWQgZm9yIFJlY2lwZTwvdGQ+PHRkPkFtb3VudCBJbiBQYW50cnk8L3RkPjwvdHI+JztcblxuICAgIGxldCBpblBhbnRyeSA9IFtdO1xuXG4gICAgbGV0IHBhbnRyeU1hdGNoZXMgPSBpbmRSZWNpcGUuaW5ncmVkaWVudEluZm8ubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaW5QYW50cnkgPSBjdXJyZW50VXNlci5wYW50cnkuZmluZChpdGVtID0+IGluZ3JlZGllbnQuaWQgPT09IGl0ZW0uaW5ncmVkaWVudCk7XG4gICAgICBpZiAoaW5QYW50cnkpIHtcbiAgICAgICAgcmV0dXJuIHtpZDogaW5ncmVkaWVudC5pZCwgbmFtZTogaW5ncmVkaWVudC5uYW1lLCBxdWFudGl0eTogaW5ncmVkaWVudC5xdWFudGl0eSwgdW5pdDogaW5ncmVkaWVudC51bml0LCBwYW50cnlBbW91bnQ6IGluUGFudHJ5LmFtb3VudH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge2lkOiBpbmdyZWRpZW50LmlkLCBuYW1lOiBpbmdyZWRpZW50Lm5hbWUsIHF1YW50aXR5OiBpbmdyZWRpZW50LnF1YW50aXR5LCB1bml0OiBpbmdyZWRpZW50LnVuaXQsIHBhbnRyeUFtb3VudDogMH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYW50cnlNYXRjaGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpbmdyZWRpZW50TGlzdEl0ZW1zLmlubmVySFRNTCArPSBgPHRyPjx0ZD4ke2l0ZW0ubmFtZX06ICR7aXRlbS5xdWFudGl0eX0gJHtpdGVtLnVuaXR9PC90ZD48dGQ+JHtpdGVtLnBhbnRyeUFtb3VudH08L3RkPjwvdHI+YDtcbiAgICB9KTtcblxuICAgIGluc3RydWN0aW9uTGlzdEl0ZW1zLmlubmVyVGV4dCA9ICcnO1xuICAgIGluc3RydWN0aW9uTGlzdEl0ZW1zLmlubmVySFRNTCArPSBgJHtpbmRSZWNpcGUuZ2V0UmVjaXBlSW5zdHJ1Y3Rpb25zKCl9YDtcbiAgICByZWNpcGVDb3N0LmlubmVyVGV4dCA9IGBDb3N0OiAgJCR7aW5kUmVjaXBlLmdldEluZ3JlZGllbnRDb3N0cygpfWA7XG4gIH0sXG5cbiAgaGlkZUluZGl2aWR1YWxSZWNpcGUoKSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKG9uRmF2b3JpdGVMaXN0KTtcbiAgICBkb21VcGRhdGVzLnNob3coYWRkVG9GYXZvcml0ZUxpc3QpO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShvbkNvb2tpbmdMaXN0KTtcbiAgICBkb21VcGRhdGVzLnNob3coYWRkVG9Db29raW5nTGlzdCk7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGluZGl2aWR1YWxSZWNpcGUpO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShwYW50cnlWaWV3KTtcbiAgICBkb21VcGRhdGVzLnNob3cocmVjaXBlQm94KTtcbiAgfSxcblxuICBwb3B1bGF0ZVJlY2lwZXMocmVjaXBlcykge1xuICAgIGRvbVVwZGF0ZXMuaGlkZUluZGl2aWR1YWxSZWNpcGUoKTtcbiAgICBkb21VcGRhdGVzLmhpZGVQYW50cnkoKTtcblxuICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCArPSBgPHNlY3Rpb24gY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cIiR7cmVjaXBlLmlkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkXCI+XG4gICAgICAgICAgPHA+JHtyZWNpcGUubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBhbHQ9XCIke3JlY2lwZS5uYW1lfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgIH0pO1xuICB9LFxuXG4gIGZpbHRlckJ5RmF2b3JpdGVzKGN1cnJlbnRVc2VyKSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKHN1Ym1pdEJ0bik7XG4gICAgZG9tVXBkYXRlcy5zaG93KHN1Ym1pdEZhdm9yaXRlQnRuKTtcbiAgICBkb21VcGRhdGVzLmhpZGVJbmRpdmlkdWFsUmVjaXBlKCk7XG5cbiAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MICs9IGA8c2VjdGlvbiBjbGFzcz1cImdyaWQtaXRlbVwiIGlkPVwiJHtyZWNpcGUuaWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRcIj5cbiAgICAgICAgICA8cD4ke3JlY2lwZS5uYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cIiR7cmVjaXBlLm5hbWV9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPmA7XG4gICAgfSk7XG4gIH0sXG5cbiAgZmlsdGVyQnlDb29raW5nTGlzdChjdXJyZW50VXNlcikge1xuICAgIGRvbVVwZGF0ZXMuaGlkZShzdWJtaXRGYXZvcml0ZUJ0bik7XG4gICAgZG9tVXBkYXRlcy5zaG93KHN1Ym1pdEJ0bik7XG4gICAgZG9tVXBkYXRlcy5oaWRlSW5kaXZpZHVhbFJlY2lwZSgpO1xuXG4gICAgZ3JpZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2suZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgZ3JpZENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtXCIgaWQ9XCIke3JlY2lwZS5pZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZFwiPlxuICAgICAgICAgIDxwPiR7cmVjaXBlLm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCIgYWx0PVwiJHtyZWNpcGUubmFtZX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+YDtcbiAgICB9KTtcbiAgfSxcblxuICBzaG93UGFudHJ5KCkge1xuICAgIGRvbVVwZGF0ZXMuaGlkZShvbkZhdm9yaXRlTGlzdCk7XG4gICAgZG9tVXBkYXRlcy5zaG93KGFkZFRvRmF2b3JpdGVMaXN0KTtcbiAgICBkb21VcGRhdGVzLmhpZGUob25Db29raW5nTGlzdCk7XG4gICAgZG9tVXBkYXRlcy5zaG93KGFkZFRvQ29va2luZ0xpc3QpO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShpbmRpdmlkdWFsUmVjaXBlKTtcbiAgICBkb21VcGRhdGVzLmhpZGUocmVjaXBlQm94KTtcbiAgICBkb21VcGRhdGVzLnNob3cocGFudHJ5Vmlldyk7XG4gIH0sXG5cbiAgaGlkZVBhbnRyeSgpIHtcbiAgICBkb21VcGRhdGVzLmhpZGUob25GYXZvcml0ZUxpc3QpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhhZGRUb0Zhdm9yaXRlTGlzdCk7XG4gICAgZG9tVXBkYXRlcy5oaWRlKG9uQ29va2luZ0xpc3QpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhhZGRUb0Nvb2tpbmdMaXN0KTtcbiAgICBkb21VcGRhdGVzLmhpZGUoaW5kaXZpZHVhbFJlY2lwZSk7XG4gICAgZG9tVXBkYXRlcy5zaG93KHJlY2lwZUJveCk7XG4gICAgZG9tVXBkYXRlcy5oaWRlKHBhbnRyeVZpZXcpO1xuICB9LFxuXG4gIHBvcHVsYXRlUGFudHJ5SXRlbXMocGFudHJ5LCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICBkb21VcGRhdGVzLnNob3dQYW50cnkoKTtcblxuICAgIHBhbnRyeS5wYW50cnlJdGVtSW5mby5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICB9KTtcblxuICAgIHBhbnRyeUJveC5pbm5lckhUTUwgPSAnJztcblxuICAgIHBhbnRyeS5wYW50cnlJdGVtSW5mby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBwYW50cnlCb3guaW5uZXJIVE1MICs9IGBcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC10cmFuc2Zvcm1cIj4ke2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXRyYW5zZm9ybVwiPiR7aXRlbS5hbW91bnR9PC90ZD5cbiAgICAgIDwvdHI+YDtcbiAgICB9KTtcblxuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVEcm9wZG93bk1lbnUoaW5ncmVkaWVudHNEYXRhKTtcbiAgfSxcblxuICBwb3B1bGF0ZURyb3Bkb3duTWVudShpbmdyZWRpZW50c0RhdGEpIHtcbiAgICBpbmdyZWRpZW50c0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKCFhLm5hbWUpIHtcbiAgICAgICAgYS5uYW1lID0gJ3VuZGVmaW5lZCc7XG4gICAgICB9XG4gICAgICBpZiAoIWIubmFtZSkge1xuICAgICAgICBiLm5hbWUgPSAndW5kZWZpbmVkJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgbGV0IHVuZGVmaW5lZEluZ3JlZGllbnRzID0gaW5ncmVkaWVudHNEYXRhLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpZiAoaW5ncmVkaWVudC5uYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhY2MucHVzaChpbmdyZWRpZW50c0RhdGEuaW5kZXhPZihpbmdyZWRpZW50KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIHVuZGVmaW5lZEluZ3JlZGllbnRzLmZvckVhY2goaW5kZXggPT4gaW5ncmVkaWVudHNEYXRhLnNwbGljZShpbmRleCwgMSkpO1xuXG4gICAgaW5ncmVkaWVudHNEYXRhLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGFkZFRvUGFudHJ5LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aW5ncmVkaWVudC5pZH1cIj4ke2luZ3JlZGllbnQubmFtZX08L29wdGlvbj5gO1xuICAgIH0pO1xuICB9LFxuXG4gIHNob3dTZWFyY2hUZXJtcyhzZWFyY2gsIHRhZ3MsIGVycm9yTWVzc2FnZSkge1xuICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU2VhcmNoIHJlc3VsdHMgZm9yOiAnO1xuXG4gICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICBsZXQgam9pbmVkID0gdGFncy5qb2luKCcsICcpO1xuICAgICAgZXJyb3JNZXNzYWdlLmlubmVySFRNTCArPSBgJHtqb2luZWR9YDtcbiAgICB9O1xuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgZXJyb3JNZXNzYWdlLmlubmVySFRNTCArPSBgJHtzZWFyY2h9YDtcbiAgICB9O1xuICB9LFxuXG4gIHNob3coZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBSZWNpcGVSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5JztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZSc7XG5pbXBvcnQgSW5ncmVkaWVudCBmcm9tICcuL2NsYXNzZXMvSW5ncmVkaWVudCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlcic7XG5pbXBvcnQgUGFudHJ5IGZyb20gJy4vY2xhc3Nlcy9QYW50cnknO1xuaW1wb3J0IHsgaW5ncmVkaWVudFByb21pc2UsIHJlY2lwZVByb21pc2UsIHVzZXJQcm9taXNlLCB1c2VyUGFudHJ5IH0gZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5sZXQgYWxsUmVjaXBlcyA9IFtdO1xubGV0IHNlbGVjdGVkVGFncyA9IFtdO1xubGV0IGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEsIHJlY2lwZURhdGEsIHVzZXJzRGF0YSwgcGFudHJ5LCBjdXJyZW50UmVjaXBlO1xuXG5jb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZVRpdGxlJyk7XG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xuY29uc3QgYWxsUmVjaXBlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxSZWNpcGVzQnRuJyk7XG5jb25zdCBmYXZvcml0ZVJlY2lwZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2b3JpdGVSZWNpcGVzJyk7XG5jb25zdCB3aGF0VG9Db29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doYXRUb0Nvb2snKTtcbmNvbnN0IHBhbnRyeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW50cnknKTtcbmNvbnN0IGFkZFRvUGFudHJ5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvUGFudHJ5QnRuJyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpO1xuY29uc3QgdGFnQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnQ2hlY2tib3gnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdG4nKTtcbmNvbnN0IHN1Ym1pdEZhdm9yaXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEZhdm9yaXRlQnRuJyk7XG5jb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZXMnKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcbmNvbnN0IGVycm9yTWVzc2FnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JNZXNzYWdlMicpO1xuY29uc3QgZXJyb3JNZXNzYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UzJyk7XG5jb25zdCBlcnJvck1lc3NhZ2U0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZTQnKTtcbmNvbnN0IHJlY2lwZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVCb3gnKTtcbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZENvbnRhaW5lcicpO1xuY29uc3QgcGFudHJ5VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW50cnlWaWV3Jyk7XG5jb25zdCBwYW50cnlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFudHJ5Qm94Jyk7XG5cbmNvbnN0IGluZGl2aWR1YWxSZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFJlY2lwZScpO1xuY29uc3QgY29va1RoaXNOb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va1RoaXNOb3dCdG4nKTtcbmNvbnN0IGJhY2tUb01haW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja1RvTWFpbkJ0bicpO1xuY29uc3QgcGFudHJ5SW5wdXROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFudHJ5SW5wdXROdW1iZXInKTtcbmNvbnN0IGFkZFRvUGFudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvUGFudHJ5Jyk7XG5jb25zdCBhZGRUb0Zhdm9yaXRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb0Zhdm9yaXRlTGlzdCcpO1xuY29uc3Qgb25GYXZvcml0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25GYXZvcml0ZUxpc3QnKTtcbmNvbnN0IGFkZFRvQ29va2luZ0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9Db29raW5nTGlzdCcpO1xuY29uc3Qgb25Db29raW5nTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbkNvb2tpbmdMaXN0Jyk7XG5jb25zdCByZWNpcGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVUaXRsZScpO1xuY29uc3QgaW5kUmVjaXBlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kUmVjaXBlSW1hZ2UnKTtcbmNvbnN0IGluZ3JlZGllbnRMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudExpc3RJdGVtcycpO1xuY29uc3QgaW5zdHJ1Y3Rpb25MaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25MaXN0SXRlbXMnKTtcbmNvbnN0IHJlY2lwZUNvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlQ29zdCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdldERhdGEpO1xuYWxsUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZXMoNSk7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVBbGxSZWNpcGVzKGFsbFJlY2lwZXMpO1xufSk7XG5mYXZvcml0ZVJlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2VzKDUpO1xuICBkb21VcGRhdGVzLmZpbHRlckJ5RmF2b3JpdGVzKGN1cnJlbnRVc2VyKTtcbn0pO1xud2hhdFRvQ29vay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZXMoNSk7XG4gIGRvbVVwZGF0ZXMuZmlsdGVyQnlDb29raW5nTGlzdChjdXJyZW50VXNlcik7XG59KTtcbnBhbnRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZXMoNSk7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVQYW50cnlJdGVtcyhwYW50cnksIGluZ3JlZGllbnRzRGF0YSk7XG59KTtcbmFkZFRvUGFudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBwYW50cnkuYWRkVG9QYW50cnkocGFyc2VJbnQocGFudHJ5SW5wdXROdW1iZXIudmFsdWUpLCBwYXJzZUludChhZGRUb1BhbnRyeS52YWx1ZSksIGN1cnJlbnRVc2VyKVxufSk7XG5jb29rVGhpc05vd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcGFudHJ5LnJlbW92ZUZyb21QYW50cnkoY3VycmVudFJlY2lwZSwgY3VycmVudFVzZXIpXG59KTtcbnRhZ0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDaGVja2JveGVzKTtcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrU2VhcmNoQ29uZGl0aW9ucyk7XG5zdWJtaXRGYXZvcml0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRmF2U2VhcmNoQ29uZHRpdGlvbnMpO1xuYmFja1RvTWFpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuaGlkZUluZGl2aWR1YWxSZWNpcGUpO1xuYWRkVG9GYXZvcml0ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRSZWNpcGVUb0Zhdm9yaXRlKTtcbm9uRmF2b3JpdGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUmVjaXBlRnJvbUZhdm9yaXRlKTtcbmFkZFRvQ29va2luZ0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRSZWNpcGVUb0Nvb2tpbmdMaXN0KTtcbm9uQ29va2luZ0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVSZWNpcGVGcm9tQ29va2luZ0xpc3QpO1xucmVjaXBlQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0luZGl2aWR1YWxSZWNpcGUpO1xuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICBnYXRoZXJEYXRhKCk7XG59O1xuXG5mdW5jdGlvbiBnYXRoZXJEYXRhKCkge1xuICBsZXQgYXBpSW5ncmVkaWVudERhdGEgPSBpbmdyZWRpZW50UHJvbWlzZSgpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhgQVBJIGluZ3JlZGllbnQgZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKSlcbiAgbGV0IGFwaVJlY2lwZURhdGEgPSByZWNpcGVQcm9taXNlKClcbiAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGBBUEkgcmVjaXBlIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCkpXG4gIGxldCBhcGlVc2VyRGF0YSA9IHVzZXJQcm9taXNlKClcbiAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGBBUEkgdXNlciBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApKVxuICBQcm9taXNlLmFsbChbYXBpSW5ncmVkaWVudERhdGEsIGFwaVJlY2lwZURhdGEsIGFwaVVzZXJEYXRhXSlcbiAgICAudGhlbihkYXRhID0+IGluaXREYXRhKGRhdGEpKVxufTtcblxuZnVuY3Rpb24gaW5pdERhdGEoZGF0YSkge1xuICBpbmdyZWRpZW50c0RhdGEgPSBkYXRhWzBdO1xuICByZWNpcGVEYXRhID0gZGF0YVsxXTtcbiAgdXNlcnNEYXRhID0gZGF0YVsyXTtcbiAgY29uc3QgcmVjaXBlSW5zdGFuY2VzID0gaW5zdGFudGlhdGVSZWNpcGUoKTtcbiAgY29uc3QgaW5ncmVkaWVudEluc3RhbmNlcyA9IGluc3RhbnRpYXRlSW5ncmVkaWVudCgpO1xuXG4gIGluc3RhbnRpYXRlUmFuZG9tVXNlcigpO1xuICBwb3B1bGF0ZVJlcG9zaXRvcnkocmVjaXBlSW5zdGFuY2VzLCBpbmdyZWRpZW50SW5zdGFuY2VzKTtcbiAgaW5zdGFudGlhdGVQYW50cnkoKTtcbn07XG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlUmFuZG9tVXNlcigpIHtcbiAgbGV0IHJhbmRvbVVzZXIgPSB1c2Vyc0RhdGFbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdXNlcnNEYXRhLmxlbmd0aCldO1xuICBjdXJyZW50VXNlciA9IG5ldyBVc2VyKHJhbmRvbVVzZXIubmFtZSxcbiAgICByYW5kb21Vc2VyLmlkLFxuICAgIHJhbmRvbVVzZXIucGFudHJ5LFxuICAgIGluZ3JlZGllbnRzRGF0YSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVVzZXJOYW1lKGN1cnJlbnRVc2VyKTtcbn07XG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlUGFudHJ5KCkge1xuICBwYW50cnkgPSBuZXcgUGFudHJ5KGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEpO1xufVxuXG5mdW5jdGlvbiBpbnN0YW50aWF0ZVJlY2lwZSgpIHtcbiAgbGV0IHJlY2lwZXMgPSBbXTtcblxuICByZWNpcGVEYXRhLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBsZXQgbmV3UmVjaXBlID0gbmV3IFJlY2lwZShyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSk7XG4gICAgcmVjaXBlcy5wdXNoKG5ld1JlY2lwZSk7XG4gIH0pO1xuICByZXR1cm4gcmVjaXBlcztcbn07XG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlSW5ncmVkaWVudCgpIHtcbiAgbGV0IGluZ3JlZGllbnRzID0gW107XG4gIGluZ3JlZGllbnRzRGF0YS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgIGxldCBuZXdJbmdyZWRpZW50ID0gbmV3IEluZ3JlZGllbnQoaW5ncmVkaWVudCk7XG4gICAgaW5ncmVkaWVudHMucHVzaChuZXdJbmdyZWRpZW50KTtcbiAgfSk7XG4gIHJldHVybiBpbmdyZWRpZW50cztcbn07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUmVwb3NpdG9yeShyZWNpcGVJbnN0YW5jZXMsIGluZ3JlZGllbnRJbnN0YW5jZXMpIHtcbiAgYWxsUmVjaXBlcyA9IG5ldyBSZWNpcGVSZXBvc2l0b3J5KHJlY2lwZUluc3RhbmNlcywgaW5ncmVkaWVudEluc3RhbmNlcyk7XG5cbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZVRhZ3MoYWxsUmVjaXBlcyk7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVBbGxSZWNpcGVzKGFsbFJlY2lwZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVwZGF0ZWRQYW50cnkgPSAoKSA9PiB7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVQYW50cnlJdGVtcyhwYW50cnksIGluZ3JlZGllbnRzRGF0YSk7XG59O1xuXG5mdW5jdGlvbiBmaW5kUmVjaXBlQnlJZChpbmRSZWNpcGVJZCkge1xuICByZXR1cm4gYWxsUmVjaXBlcy5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHBhcnNlSW50KGluZFJlY2lwZUlkKSA9PT0gcmVjaXBlLmlkKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dJbmRpdmlkdWFsUmVjaXBlKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IGluZFJlY2lwZUlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5pZDtcbiAgY3VycmVudFJlY2lwZSA9IGZpbmRSZWNpcGVCeUlkKGluZFJlY2lwZUlkKTtcblxuICBwYW50cnkuY2hlY2tDb29rYWJpbGl0eShjdXJyZW50UmVjaXBlLCBjdXJyZW50VXNlcikgPyBjb29rVGhpc05vd0J0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgOiBjb29rVGhpc05vd0J0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgZG9tVXBkYXRlcy5zaG93KGluZGl2aWR1YWxSZWNpcGUpO1xuICBkb21VcGRhdGVzLmhpZGUocmVjaXBlQm94KTtcblxuICBjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGlmIChyZWNpcGUuaWQgPT09IGN1cnJlbnRSZWNpcGUuaWQpIHtcbiAgICAgIGRvbVVwZGF0ZXMuc2hvdyhvbkZhdm9yaXRlTGlzdCk7XG4gICAgICBkb21VcGRhdGVzLmhpZGUoYWRkVG9GYXZvcml0ZUxpc3QpO1xuICAgIH07XG4gIH0pO1xuXG4gIGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2suZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGlmIChyZWNpcGUuaWQgPT09IGN1cnJlbnRSZWNpcGUuaWQpIHtcbiAgICAgIGRvbVVwZGF0ZXMuc2hvdyhvbkNvb2tpbmdMaXN0KTtcbiAgICAgIGRvbVVwZGF0ZXMuaGlkZShhZGRUb0Nvb2tpbmdMaXN0KTtcbiAgICB9O1xuICB9KTtcblxuICBkb21VcGRhdGVzLmFkZFJlY2lwZUluZm8oY3VycmVudFVzZXIsIGN1cnJlbnRSZWNpcGUpO1xufTtcblxuZnVuY3Rpb24gY2hlY2tDaGVja2JveGVzKGV2ZW50KSB7XG4gIGxldCBzZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgaWYgKCFzZWxlY3RlZCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHNlbGVjdGVkVGFncy5wdXNoKHNlbGVjdGVkKTtcbiAgICB9O1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHNlbGVjdGVkVGFncy5zcGxpY2Uoc2VsZWN0ZWRUYWdzLmluZGV4T2Yoc2VsZWN0ZWQpLCAxKTtcbiAgICB9O1xuICB9O1xufTtcblxuZnVuY3Rpb24gY2hlY2tTZWFyY2hDb25kaXRpb25zKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKCFzZWFyY2hCYXIudmFsdWUgJiYgIXNlbGVjdGVkVGFncy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlcygxKTtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQWxsUmVjaXBlcyhhbGxSZWNpcGVzKTtcbiAgfTtcbiAgaWYgKHNlYXJjaEJhci52YWx1ZSkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2VzKDQpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVSZWNpcGVzKGFsbFJlY2lwZXMuc2VhcmNoUmVjaXBlcyhzZWFyY2hCYXIudmFsdWUpKTtcbiAgICBkb21VcGRhdGVzLnNob3dTZWFyY2hUZXJtcyhzZWFyY2hCYXIudmFsdWUsIDAsIGVycm9yTWVzc2FnZTQpO1xuICB9O1xuICBpZiAoc2VsZWN0ZWRUYWdzLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2VzKDQpO1xuICAgIGRvbVVwZGF0ZXMuc2hvd1NlYXJjaFRlcm1zKDAsIHNlbGVjdGVkVGFncywgZXJyb3JNZXNzYWdlNCk7XG5cbiAgICBsZXQgdGFnZ2VkUmVjaXBlcyA9IFtdO1xuICAgIHNlbGVjdGVkVGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICB0YWdnZWRSZWNpcGVzLnB1c2goYWxsUmVjaXBlcy5maWx0ZXJCeVRhZyh0YWcpKTtcbiAgICB9KTtcbiAgICBsZXQgZmxhdHRlbmVkID0gdGFnZ2VkUmVjaXBlcy5mbGF0KCk7XG4gICAgbGV0IHdpdGhvdXREdXBsaWNhdGVzID0gWy4uLm5ldyBTZXQoZmxhdHRlbmVkKV07XG4gICAgc2VsZWN0ZWRUYWdzLmxlbmd0aCA/IGRvbVVwZGF0ZXMucG9wdWxhdGVSZWNpcGVzKHdpdGhvdXREdXBsaWNhdGVzKSA6IGRvbVVwZGF0ZXMucG9wdWxhdGVBbGxSZWNpcGVzKCk7XG4gIH07XG4gIGlmIChzZWFyY2hCYXIudmFsdWUgJiYgc2VsZWN0ZWRUYWdzLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2VzKDIpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVBbGxSZWNpcGVzKGFsbFJlY2lwZXMpO1xuICB9O1xuXG4gIGZvcm0ucmVzZXQoKTtcbiAgc2VsZWN0ZWRUYWdzID0gW107XG59O1xuXG5mdW5jdGlvbiBjaGVja0ZhdlNlYXJjaENvbmR0aXRpb25zKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKCFzZWFyY2hCYXIudmFsdWUgJiYgIXNlbGVjdGVkVGFncy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlcygxKTtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQWxsUmVjaXBlcyhjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICB9O1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZXMoNCk7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZVJlY2lwZXMoYWxsUmVjaXBlcy5zZWFyY2hGYXZvcml0ZXMoc2VhcmNoQmFyLnZhbHVlKSk7XG4gICAgZG9tVXBkYXRlcy5zaG93U2VhcmNoVGVybXMoc2VhcmNoQmFyLnZhbHVlLCAwLCBlcnJvck1lc3NhZ2U0KTtcbiAgfTtcbiAgaWYgKHNlbGVjdGVkVGFncy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlcyg0KTtcbiAgICBkb21VcGRhdGVzLnNob3dTZWFyY2hUZXJtcygwLCBzZWxlY3RlZFRhZ3MsIGVycm9yTWVzc2FnZTQpO1xuXG4gICAgbGV0IHRhZ2dlZFJlY2lwZXMgPSBbXTtcbiAgICBzZWxlY3RlZFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgdGFnZ2VkUmVjaXBlcy5wdXNoKGFsbFJlY2lwZXMuZmlsdGVyRmF2b3JpdGVSZWNpcGVUYWdzKHRhZykpO1xuICAgIH0pO1xuICAgIGxldCBmbGF0dGVuZWQgPSB0YWdnZWRSZWNpcGVzLmZsYXQoKTtcbiAgICBsZXQgd2l0aG91dER1cGxpY2F0ZXMgPSBbLi4ubmV3IFNldChmbGF0dGVuZWQpXTtcbiAgICBzZWxlY3RlZFRhZ3MubGVuZ3RoID8gZG9tVXBkYXRlcy5wb3B1bGF0ZVJlY2lwZXMod2l0aG91dER1cGxpY2F0ZXMpIDogZG9tVXBkYXRlcy5wb3B1bGF0ZVJlY2lwZXMoY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzKTtcbiAgfTtcbiAgaWYgKHNlYXJjaEJhci52YWx1ZSAmJiBzZWxlY3RlZFRhZ3MubGVuZ3RoKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZXMoMik7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUFsbFJlY2lwZXMoY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzKTtcbiAgfTtcblxuICBmb3JtLnJlc2V0KCk7XG4gIHNlbGVjdGVkVGFncyA9IFtdO1xufTtcblxuZnVuY3Rpb24gYWRkUmVjaXBlVG9GYXZvcml0ZSgpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGFkZFRvRmF2b3JpdGVMaXN0KTtcbiAgZG9tVXBkYXRlcy5zaG93KG9uRmF2b3JpdGVMaXN0KTtcblxuICBhbGxSZWNpcGVzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gY3VycmVudFJlY2lwZS5uYW1lKSB7XG4gICAgICBjdXJyZW50VXNlci5hZGRUb0Zhdm9yaXRlUmVjaXBlcyhyZWNpcGUpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlUmVjaXBlRnJvbUZhdm9yaXRlKCkge1xuICBkb21VcGRhdGVzLmhpZGUob25GYXZvcml0ZUxpc3QpO1xuICBkb21VcGRhdGVzLnNob3coYWRkVG9GYXZvcml0ZUxpc3QpO1xuXG4gIGFsbFJlY2lwZXMucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSBjdXJyZW50UmVjaXBlLm5hbWUpIHtcbiAgICAgIGN1cnJlbnRVc2VyLnJlbW92ZUZyb21GYXZvcml0ZVJlY2lwZXMocmVjaXBlKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGFkZFJlY2lwZVRvQ29va2luZ0xpc3QoKSB7XG4gIGRvbVVwZGF0ZXMuaGlkZShhZGRUb0Nvb2tpbmdMaXN0KTtcbiAgZG9tVXBkYXRlcy5zaG93KG9uQ29va2luZ0xpc3QpO1xuXG4gIGFsbFJlY2lwZXMucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSBjdXJyZW50UmVjaXBlLm5hbWUpIHtcbiAgICAgIGN1cnJlbnRVc2VyLmFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlUmVjaXBlRnJvbUNvb2tpbmdMaXN0KCkge1xuICBkb21VcGRhdGVzLmhpZGUob25Db29raW5nTGlzdCk7XG4gIGRvbVVwZGF0ZXMuc2hvdyhhZGRUb0Nvb2tpbmdMaXN0KTtcblxuICBhbGxSZWNpcGVzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gY3VycmVudFJlY2lwZS5uYW1lKSB7XG4gICAgICBjdXJyZW50VXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gaGlkZVZpZXcoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkID09PSBcInBhbnRyeVZpZXdcIikge1xuICAgIGRvbVVwZGF0ZXMuaGlkZVBhbnRyeVZpZXcoKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=