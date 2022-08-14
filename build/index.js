(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("@bulhi/react-localization", ["react"], factory);
	else if(typeof exports === 'object')
		exports["@bulhi/react-localization"] = factory(require("react"));
	else
		root["@bulhi/react-localization"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Translate", function() { return /* reexport */ Translate; });
__webpack_require__.d(__webpack_exports__, "translationsMap", function() { return /* reexport */ translationsMap; });
__webpack_require__.d(__webpack_exports__, "languagesMap", function() { return /* reexport */ languagesMap; });
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ initLocalization_config; });
__webpack_require__.d(__webpack_exports__, "initLocalization", function() { return /* reexport */ initLocalization; });
__webpack_require__.d(__webpack_exports__, "ContextLocalization", function() { return /* reexport */ ContextLocalization; });
__webpack_require__.d(__webpack_exports__, "ProviderLocalization", function() { return /* reexport */ ProviderLocalization; });
__webpack_require__.d(__webpack_exports__, "useLocalization", function() { return /* reexport */ useLocalization; });
__webpack_require__.d(__webpack_exports__, "withLocalization", function() { return /* reexport */ withLocalization; });
__webpack_require__.d(__webpack_exports__, "getTranslate", function() { return /* reexport */ getTranslate; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/initLocalization.tsx
var translationsMap = new Map();
var languagesMap = new Map();
var initLocalization_config = {
    activeLanguage: '',
    onMissingTranslation: function () { return null; },
};
var initLocalization = function (props) {
    var languages = props.languages, translations = props.translations, options = props.options;
    languages.forEach(function (language) {
        languagesMap.set(language.code, language);
    });
    Object.entries(translations).forEach(function (_a) {
        var code = _a[0], translation = _a[1];
        translationsMap.set(code, translation);
    });
    initLocalization_config.activeLanguage = options.defaultLanguage || languages[0].code;
    initLocalization_config.onMissingTranslation = options.onMissingTranslation || (function () { return null; });
};

// CONCATENATED MODULE: ./src/useStore.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var reducer = function (state, action) {
    switch (action.type) {
        case 'setActiveLanguage':
            return __assign(__assign({}, state), { activeLanguage: action.value });
        default:
            return state;
    }
};
var useStore = function (initValue) {
    var store = external_react_default.a.useReducer(reducer, initValue);
    return store;
};

// CONCATENATED MODULE: ./src/ProviderLocalization.tsx



var ContextLocalization = external_react_default.a.createContext({});
var ProviderLocalization = function (_a) {
    var children = _a.children;
    var _b = useStore(initLocalization_config), state = _b[0], dispatch = _b[1];
    var setActiveLanguage = function (code) {
        dispatch({
            type: 'setActiveLanguage',
            value: code,
        });
    };
    var stateMemo = external_react_default.a.useMemo(function () { return ({ config: state, update: dispatch, setActiveLanguage: setActiveLanguage }); }, [state]);
    Object(external_react_["useEffect"])(function () {
        setActiveLanguage(state.activeLanguage);
    }, []);
    return (external_react_default.a.createElement(ContextLocalization.Provider, { value: stateMemo }, children));
};
var useLocalization = function () { return Object(external_react_["useContext"])(ContextLocalization); };

// CONCATENATED MODULE: ./src/getTranslate.tsx
/* eslint-disable react-hooks/rules-of-hooks */



var getTranslate = function (id, props) {
    var data = (props || {}).data;
    var config = useLocalization().config;
    var translated = (translationsMap.get(config.activeLanguage) || {})[id];
    var replaceWithData = function (text, data) {
        if (data === void 0) { data = {}; }
        return text.replace(/\$\{(\w+)\}/g, function (str, key) {
            var value = data[key] || '';
            return value.toString();
        });
    };
    if (!translated &&
        typeof config.onMissingTranslation === 'function') {
        config.onMissingTranslation({
            translationId: id,
            languageCode: config.activeLanguage,
        });
    }
    var isHTML = /<\/?[a-z][\s\S]*>/i.test(translated);
    var result = !translated
        ? id
        : data
            ? replaceWithData(translated, data)
            : translated;
    return isHTML
        ? external_react_default.a.createElement('span', { dangerouslySetInnerHTML: { __html: result } })
        : result;
};

// CONCATENATED MODULE: ./src/Translate.tsx


var Translate = function (props) {
    var id = props.id, data = props.data;
    return (external_react_default.a.createElement(external_react_default.a.Fragment, null, getTranslate(id, { data: data })));
};

// CONCATENATED MODULE: ./src/withLocalization.tsx
var withLocalization_assign = (undefined && undefined.__assign) || function () {
    withLocalization_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withLocalization_assign.apply(this, arguments);
};


var withLocalization = function (Component) {
    return function (props) {
        return (external_react_default.a.createElement(ContextLocalization.Consumer, null, function (value) { return (external_react_default.a.createElement(Component, withLocalization_assign({}, props, { config: value.config, setActiveLanguage: value.setActiveLanguage }))); }));
    };
};

// CONCATENATED MODULE: ./src/index.ts







/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map