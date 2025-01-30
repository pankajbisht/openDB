/******/ var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   createNamespace: () => (/* binding */ createNamespace),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getCurrentNamespace: () => (/* binding */ getCurrentNamespace),
/* harmony export */   getSeparator: () => (/* binding */ getSeparator),
/* harmony export */   setSeparator: () => (/* binding */ setSeparator),
/* harmony export */   switchNamespace: () => (/* binding */ switchNamespace)
/* harmony export */ });
var config = {
  namespace: "app",
  separator: ".",
  trimKeys: true,
  expiry: true
};
function createNamespace(namespace) {
  config.namespace = namespace;
}
function switchNamespace(namespace) {
  config.namespace = namespace;
}
function getCurrentNamespace() {
  return config.namespace;
}
function get() {
  return config;
}
function setSeparator(separator) {
  config.separator = separator;
}
function getSeparator(separator) {
  return config.separator;
}

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createNamespace: _config_js__WEBPACK_IMPORTED_MODULE_0__.createNamespace,
  getCurrentNamespace: _config_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentNamespace,
  switchNamespace: _config_js__WEBPACK_IMPORTED_MODULE_0__.switchNamespace,
  get: _config_js__WEBPACK_IMPORTED_MODULE_0__.get,
  setSeparator: _config_js__WEBPACK_IMPORTED_MODULE_0__.setSeparator,
  getSeparator: _config_js__WEBPACK_IMPORTED_MODULE_0__.getSeparator
});

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/core/storage.js");


/***/ }),

/***/ "./src/core/storage.js":
/*!*****************************!*\
  !*** ./src/core/storage.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index.js */ "./src/config/index.js");
/* harmony import */ var _modules_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/operations.js */ "./src/modules/operations.js");
/* harmony import */ var _support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.js */ "./src/core/support.js");



var db = {
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  local: (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__.storageoperations)((0,_support_js__WEBPACK_IMPORTED_MODULE_2__["default"])(window.localStorage)),
  session: (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__.storageoperations)((0,_support_js__WEBPACK_IMPORTED_MODULE_2__["default"])(window.sessionStorage))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./src/core/support.js":
/*!*****************************!*\
  !*** ./src/core/support.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ensureSupport),
/* harmony export */   working: () => (/* binding */ working)
/* harmony export */ });
function ensureSupport(storage) {
  if (!storage) {
    throw new Error("Storage is not supported in this environment.");
  }
  return storage;
}
function working(storage) {
  if (!storage) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clear)
/* harmony export */ });
function clear() {
  return this.storage.clear();
}

/***/ }),

/***/ "./src/modules/from.js":
/*!*****************************!*\
  !*** ./src/modules/from.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");

function from(namespace) {
  if (namespace) {
    (0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.switchNamespace)(namespace);
  }
}

/***/ }),

/***/ "./src/modules/get.js":
/*!****************************!*\
  !*** ./src/modules/get.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");

function get(key) {
  var seprator = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getSeparator)();
  var namespcaekey = "".concat((0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentNamespace)()).concat(seprator).concat(key);
  var value = this.storage.getItem(namespcaekey);
  if (value === 'null') {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

/***/ }),

/***/ "./src/modules/getFormattedData.js":
/*!*****************************************!*\
  !*** ./src/modules/getFormattedData.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFormattedData)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function getFormattedData(key) {
  var result = {};
  var seprator = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getSeparator)();
  for (var i = 0, size = this.storage.length; i < size; i++) {
    var completkey = this.key(i);
    var _completkey$split = completkey.split("".concat(seprator), 3),
      _completkey$split2 = _slicedToArray(_completkey$split, 3),
      namespace = _completkey$split2[0],
      objectkey = _completkey$split2[1],
      currentkey = _completkey$split2[2];
    if (objectkey === key && currentkey) {
      result[currentkey] = this.get("".concat(objectkey).concat(seprator).concat(currentkey));
    }
  }
  return result;
}

/***/ }),

/***/ "./src/modules/has.js":
/*!****************************!*\
  !*** ./src/modules/has.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ has)
/* harmony export */ });
function has(key) {
  return !!this.get(key);
}

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from.js */ "./src/modules/from.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./src/modules/get.js");
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set.js */ "./src/modules/set.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has.js */ "./src/modules/has.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove.js */ "./src/modules/remove.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear.js */ "./src/modules/clear.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key.js */ "./src/modules/key.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keys.js */ "./src/modules/keys.js");
/* harmony import */ var _trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trim.js */ "./src/modules/trim.js");
/* harmony import */ var _setFormattedData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setFormattedData.js */ "./src/modules/setFormattedData.js");
/* harmony import */ var _getFormattedData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getFormattedData.js */ "./src/modules/getFormattedData.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  from: _from_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  get: _get_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  set: _set_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  has: _has_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  clear: _clear_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  key: _key_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  keys: _keys_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  trim: _trim_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  getFormattedData: _getFormattedData_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  setFormattedData: _setFormattedData_js__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./src/modules/key.js":
/*!****************************!*\
  !*** ./src/modules/key.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ key)
/* harmony export */ });
function key(index) {
  return this.storage.key(index);
}

/***/ }),

/***/ "./src/modules/keys.js":
/*!*****************************!*\
  !*** ./src/modules/keys.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keys)
/* harmony export */ });
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ "./src/modules/key.js");

function keys() {
  var keys = [];
  for (var index = 0; index < this.storage.length; index++) {
    // let key = this.storage[index];
    keys.push(this.storage.key(index));
  }
  return keys;
}

/***/ }),

/***/ "./src/modules/operations.js":
/*!***********************************!*\
  !*** ./src/modules/operations.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageoperations: () => (/* binding */ storageoperations)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/modules/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function storageoperations(storage) {
  return _objectSpread({
    storage: storage,
    get count() {
      return storage.length;
    }
  }, _index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
function remove(key) {
  return this.storage.removeItem(key);
}

/***/ }),

/***/ "./src/modules/set.js":
/*!****************************!*\
  !*** ./src/modules/set.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

function set(key, value) {
  var seprator = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getSeparator)();
  var namespcaekey = "".concat((0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentNamespace)()).concat(seprator).concat(key);
  if (value === null || value === undefined) {
    this.storage.setItem(namespcaekey, 'null');
  } else if (_typeof(value) === 'object') {
    this.storage.setItem(namespcaekey, JSON.stringify(value));
  } else {
    this.storage.setItem(namespcaekey, String(value));
  }
}

/***/ }),

/***/ "./src/modules/setFormattedData.js":
/*!*****************************************!*\
  !*** ./src/modules/setFormattedData.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setFormattedData)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");

function setFormattedData(key, obj) {
  var seprator = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_0__.getSeparator)();
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      this.set("".concat(key).concat(seprator).concat(k), obj[k]);
    }
  }
}

/***/ }),

/***/ "./src/modules/trim.js":
/*!*****************************!*\
  !*** ./src/modules/trim.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trim)
/* harmony export */ });
function trim(key) {
  return this.storage.get(key).trim();
}

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ "./src/core/index.js");

})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=opendb.js.map