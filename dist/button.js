/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Button.js
	 * @author simpart
	 */

	/**
	 * @class Button
	 */
	mofron.comp.Button = function (_mofron$comp$Base) {
	    _inherits(_class, _mofron$comp$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var btn = new mofron.util.Vdom('button');

	                if ('string' === typeof prm) {
	                    btn.addChild(new mofron.comp.Text(prm).getVdom());
	                } else if ('object' === (typeof cnt === 'undefined' ? 'undefined' : _typeof(cnt))) {
	                    btn.addChild(prm.getVdom());
	                } else {
	                    throw new Error('invalid parameter');
	                }

	                vd.addChild(btn);

	                this.style('cursor', 'pointer');
	                this.width(50);
	                this.height(25);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setClickEvent',
	        value: function setClickEvent(func, prm) {
	            try {
	                if (null === func) {
	                    throw new Error('invalid parameter');
	                }
	                var _prm = prm === undefined ? null : prm;
	                var click = new mofron.event.Click();
	                click.setCbfunc(func, _prm);
	                this.addEvent(click);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'width',
	        value: function width(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var btn = this.getTarget();
	                if (null === _val) {
	                    return btn.getStyle('width');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                btn.setStyle('width', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var btn = this.getTarget();
	                if (null === _val) {
	                    return btn.getStyle('height');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                btn.setStyle('height', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.comp.Base);

/***/ }
/******/ ]);