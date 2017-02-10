require("mofron-comp-text");
require("mofron-event-click");
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
	 * @file   button.js
	 * @author simpart
	 */

	/**
	 * @class mofron.comp.Button
	 * @brief base class of button component
	 */
	mofron.comp.Button = function (_mofron$Component) {
	    _inherits(_class, _mofron$Component);

	    /**
	     * initialize button component
	     *
	     * @param prm (string) button text contents
	     * @param opt (object) option
	     */
	    function _class(prm, opt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

	            _this.name('Button');

	            if (null !== opt) {
	                _this.option(opt);
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    /**
	     * initialize DOM contents
	     *
	     * @param prm : (string,mofron.comp.Text) button contents
	     */


	    _createClass(_class, [{
	        key: 'initDomConts',
	        value: function initDomConts(prm) {
	            try {
	                /* set button tag */
	                var btn = new mofron.util.Vdom('button', this);
	                this.vdom().addChild(btn);
	                this.target(btn);

	                /* set button contents */
	                var conts = prm;
	                if ('string' === typeof prm) {
	                    conts = new mofron.comp.Text(prm);
	                } else if ('object' !== (typeof conts === 'undefined' ? 'undefined' : _typeof(conts))) {
	                    throw new Error('invalid parameter');
	                }
	                this.addChild(conts);

	                /* set color */
	                var clr = this.theme().getColor(0);
	                if (null !== clr) {
	                    this.color(clr);
	                }

	                /* set style */
	                this.style('cursor', 'pointer');
	                this.height(25);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * set button click event
	         *
	         * @param func : (function) function for click event listener
	         * @param prm : (mixed) function parameter (option)
	         */

	    }, {
	        key: 'setClickEvent',
	        value: function setClickEvent(func, prm) {
	            try {
	                if (null === func || 'function' !== typeof func) {
	                    throw new Error('invalid parameter');
	                }
	                this.addEvent(new mofron.event.Click(func, prm === undefined ? null : prm));
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * button width getter/setter
	         * 
	         * @param val : (number,string) button width (option)
	         * @note for getter, do not specify parameters
	         */

	    }, {
	        key: 'width',
	        value: function width(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.style('width');
	                }
	                /* set style */
	                if ('number' === typeof _val) {
	                    this.style('width', _val + 'px');
	                } else if ('string' === typeof _val) {
	                    this.style('width', _val);
	                } else {
	                    throw new Error('invalid parameter');
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * button height getter/setter
	         * 
	         * @param val : (number,string) button height (option)
	         * @note for getter, do not specify parameters
	         */

	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.style('height');
	                }
	                /* set style */
	                if ('number' === typeof _val) {
	                    this.style('height', _val + 'px');
	                } else if ('string' === typeof _val) {
	                    this.style('height', _val);
	                } else {
	                    throw new Error('invalid parameter');
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * button color getter/setter
	         *
	         * @param clr : (object) color (option)
	         * @note for getter, do not specify parameters
	         */

	    }, {
	        key: 'color',
	        value: function color(clr) {
	            try {
	                var _clr = clr === undefined ? null : clr;
	                if (null === _clr) {
	                    return mofron.func.getColorObj(this.style('background'));
	                }
	                /* set style */
	                if ('object' !== (typeof _clr === 'undefined' ? 'undefined' : _typeof(_clr))) {
	                    throw new Error('invalid parameter');
	                }

	                var rgb = clr.getRgba();
	                if (290 > rgb[0] + rgb[1] + rgb[2]) {
	                    this.getChild(0).color(new mofron.util.Color(255, 255, 255));
	                }

	                this.style('background', _clr.getStyle());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.Component);

/***/ }
/******/ ]);
