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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _analytics = __webpack_require__(1);

	var _analytics2 = _interopRequireDefault(_analytics);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _fastclick = __webpack_require__(4);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _homePage = __webpack_require__(5);

	var _homePage2 = _interopRequireDefault(_homePage);

	var _modal = __webpack_require__(48);

	var _modal2 = _interopRequireDefault(_modal);

	var _staticKit = __webpack_require__(3);

	var _staticKit2 = _interopRequireDefault(_staticKit);

	var _thanksPage = __webpack_require__(49);

	var _thanksPage2 = _interopRequireDefault(_thanksPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// FastClick for mobile
	_fastclick2.default.attach(document.body);

	// After the page loads

	// import Utils from './utils';
	// Modules
	$(function (f) {
	    // Set up modals
	    _modal2.default.setup();

	    // Animated scrolls
	    $('.animated-scroll').on('click', function (e) {
	        e.preventDefault();

	        var target = $(e.target).data('target');
	        $('html, body').stop().animate({
	            scrollTop: $(target).offset().top - 16
	        }, 640);
	    });

	    // Social links for Facebook
	    $('a.facebook').on('click', function (e) {
	        e.preventDefault();

	        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_constants2.default.domain + '/?source=' + _staticKit2.default.query.cleanedSource + '-fbshare');
	        window.open(url);
	    });

	    // Social links for Twitter
	    $('a.twitter').on('click', function (e) {
	        e.preventDefault();

	        var handles = _.clone(_constants2.default.twitterHandles);
	        handles = _.uniq(handles);
	        handles = _.shuffle(handles);

	        var charactersLeft = 38;
	        var tweet = _constants2.default.tweet;
	        for (var i = 0; i < handles.length; i++) {
	            var addition = ' ' + handles[i];
	            var length = addition.length;
	            if (length < charactersLeft) {
	                tweet += addition;
	                charactersLeft -= length;

	                // Reducing frequency of smaller handles being added
	                if (charactersLeft < 8) {
	                    break;
	                }
	            }
	        }

	        var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
	        window.open(url);
	    });

	    // Social links for Email
	    $('a.email').on('click', function (e) {
	        e.preventDefault();

	        var url = 'mailto:?subject=' + encodeURIComponent(_constants2.default.emailSubject) + '&body=' + encodeURIComponent(_constants2.default.emailBody);
	        window.open(url);
	    });

	    // Page specific code
	    var pageKey = $('body').data('page');
	    switch (pageKey) {
	        case 'home':
	            _homePage2.default.start();
	            break;

	        case 'thanks':
	            _thanksPage2.default.start();
	            break;
	    }

	    // Google Analytics
	    _analytics2.default.embed();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function embed() {
	    (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	            (i[r].q = i[r].q || []).push(arguments);
	        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	    ga('create', 'UA-74199344-6', 'auto');
	    ga('send', 'pageview');
	}

	exports.default = {
	    embed: embed
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _staticKit = __webpack_require__(3);

	var _staticKit2 = _interopRequireDefault(_staticKit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Container
	var constants = {};

	// General
	constants.domain = 'fixtheelectoralcollege.net';

	// Social
	constants.emailSubject = 'Sign this petition: Fix the Electoral College';
	constants.emailBody = 'Hi,\n\nI just signed a petition at EndSuperdelegates.com telling the Democratic Party to eliminate the concept of so-called \u201Csuperdelegates.\u201D\n\nWill you take a moment to contact the Democratic Party?\n\nhttps://' + constants.domain + '/?source=' + _staticKit2.default.query.cleanedSource + '-emailshare\n\nThanks!';
	constants.tweet = 'Fix the Electoral College: Whoever gets the most popular votes should become president! http://fixtheelectoralcollege.com';

	// APIs
	constants.actionKitPage = 'fix-the-electoral-college-www';
	constants.actionKitPageAlt = 'fix-the-electoral-college-www-npv';
	constants.callToolURL = 'https://dp-call-congress.herokuapp.com/create?callback=?';
	constants.feedbackToolURL = 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?callback=?';
	constants.sunlightAPIKey = '3779f52f552743d999b2c5fe1cda70b6';
	constants.sunlightLocateURL = 'https://congress.api.sunlightfoundation.com/legislators/locate?callback=?';

	// Validation
	constants.requiredFields = ['email', 'postcode'];

	// Names
	constants.orgNames = {
	    credo: 'CREDO Action',
	    dk: 'Daily Kos',
	    dp: 'Demand Progress',
	    fftf: 'Fight for the Future',
	    rootsaction: 'RootsAction',
	    watchdog: 'Watchdog.net'
	};

	// Twitter Handles
	constants.twitterHandles = ['@user1', '@user2', '@user3'];

	exports.default = constants;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var StaticKit = {};

	StaticKit.copy = {
	    zipErrorAlert: 'Please enter a valid ZIP code.'
	};

	StaticKit.query = function (f) {
	    var pairs = location.search.slice(1).split('&');

	    var result = {};
	    pairs.forEach(function (pair) {
	        pair = pair.split('=');
	        result[pair[0]] = decodeURIComponent(pair[1] || '');
	    });

	    return JSON.parse(JSON.stringify(result));
	}();

	// Loading source
	if (!StaticKit.query.source) {
	    try {
	        StaticKit.query.source = sessionStorage.savedSource;
	    } catch (e) {}
	}

	// Defaulting source
	if (!StaticKit.query.source) {
	    StaticKit.query.source = 'website';
	}

	StaticKit.query.source = StaticKit.query.source.split(/[^\w-]/)[0] || '';
	StaticKit.query.cleanedSource = StaticKit.query.source.split(/[^\w]/)[0];

	// Saving source
	try {
	    sessionStorage.savedSource = StaticKit.query.source;
	} catch (e) {}

	StaticKit.fillForm = function (params) {
	    for (var key in params) {
	        var $el = $('[name="' + key + '"]');
	        if ($el.length > 0) {
	            $el.val(params[key]);
	        }
	    }
	};

	StaticKit.start = function (f) {
	    if (StaticKit.query.error_zip) {
	        StaticKit.fillForm(StaticKit.query);

	        var $el = $('[name="zip"]');
	        if ($el.length > 0) {
	            $el.val('');
	            $el.focus();
	        }

	        setTimeout(function (f) {
	            return alert(StaticKit.copy.zipErrorAlert);
	        }, 250);
	    }
	};

	exports.default = StaticKit;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _each = __webpack_require__(6);

	var _each2 = _interopRequireDefault(_each);

	var _email = __webpack_require__(45);

	var _email2 = _interopRequireDefault(_email);

	var _flipCounter = __webpack_require__(46);

	var _flipCounter2 = _interopRequireDefault(_flipCounter);

	var _modal = __webpack_require__(48);

	var _modal2 = _interopRequireDefault(_modal);

	var _staticKit = __webpack_require__(3);

	var _staticKit2 = _interopRequireDefault(_staticKit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Modules
	function start() {
	    // Populate special form fields
	    $('[name=action_user_agent]').val(navigator.userAgent);
	    $('[name=source]').val(_staticKit2.default.query.cleanedSource);
	    $('[name=url]').val(location.href);

	    // // Disclaimer
	    // updateDisclaimer();

	    // Sticky form
	    setupStickyForm();

	    // Signature form
	    setupSignatureForm();

	    // Counter
	    updateCounter();
	}

	function setupStickyForm() {
	    if (navigator.userAgent.match(/mobile/i)) {
	        $('body').addClass('mobile');
	        return;
	    }

	    $(window).on('scroll resize', onScroll);
	    $(window).on('resize', onResize);

	    $(window).trigger('scroll');
	    $(window).trigger('resize');
	}

	function onResize(e) {
	    var width = $('body').width();
	    var right = 16;
	    if (width > 1100) {
	        right += (width - 1100) / 2;
	    }
	    $('.action').css('right', right);
	}

	var oldFormStatus = '';
	function onScroll(e) {
	    var containerHeight = $('.petition-and-form-wrapper .outer-padding').outerHeight();
	    var formHeight = $('.action').outerHeight();
	    var petitionOffset = $('.petition').offset();
	    var scrollTop = $(window).scrollTop();
	    var suggestedPadding = 16;
	    var maxTop = containerHeight - formHeight - suggestedPadding * 3;

	    var newFormStatus = '';
	    if (scrollTop <= petitionOffset.top - suggestedPadding) {
	        newFormStatus = 'anchored-to-top';
	    } else if (maxTop < scrollTop - petitionOffset.top) {
	        newFormStatus = 'anchored-to-bottom';
	    } else {
	        newFormStatus = 'floating';
	    }

	    if (newFormStatus !== oldFormStatus) {
	        $('.action').attr('status', newFormStatus);
	        oldFormStatus = newFormStatus;
	    }
	}

	function setupSignatureForm() {
	    var readyToSubmit = false;
	    var $signatureForm = $('.action form');
	    $signatureForm.on('submit', function (e) {
	        if (readyToSubmit) {
	            return;
	        }

	        e.preventDefault();
	        var valid = true;

	        (0, _each2.default)(_constants2.default.requiredFields, function (field) {
	            if (!valid) {
	                return;
	            }

	            console.log(field);

	            var $field = $('#' + field);
	            var value = $field.val() && $field.val().trim();
	            if (!value) {
	                alert('Please enter your ' + $field.attr('placeholder'));
	                $field.focus();

	                valid = false;
	            }
	        });

	        if (!valid) {
	            return false;
	        }

	        var email = $('#email').val().trim().toLowerCase();

	        if (!_email2.default.validate(email)) {
	            $('#email').focus();
	            alert('Please enter your valid email');
	            return false;
	        }

	        var zip = $('#postcode').val().trim();
	        try {
	            sessionStorage.zip = zip;
	        } catch (e) {}

	        // Thanking user, and disabling form
	        $('form button').attr('disabled', true);
	        $('#thanks').css({
	            display: 'block',
	            opacity: 1
	        });

	        readyToSubmit = true;
	        $signatureForm.submit();
	    });
	}

	function updateDisclaimer() {
	    var pattern = /_ns$/;
	    var source = _staticKit2.default.query.cleanedSource;
	    if (!source.match(/_ns$/)) {
	        return;
	    }

	    var key = source.replace(pattern, '');
	    var orgName = _constants2.default.orgNames[key];
	    if (orgName) {
	        $('.disclaimer .org-name').text(orgName);
	    }

	    $('.disclaimer').css({ display: 'block' });
	    $('.squaredFour').remove();
	}

	function updateCounter() {
	    $.ajax({
	        url: 'https://act.demandprogress.org/progress/' + _constants2.default.actionKitPage + '?callback=?',
	        dataType: 'jsonp'
	    }).then(function (data) {
	        var size = data.total.actions;
	        var sizeWithCommas = size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	        $('.number-of-signatures').text(sizeWithCommas);
	        $('.counter').addClass('loaded');
	    });
	}

	exports.default = {
	    start: start
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(8),
	    baseEach = __webpack_require__(9),
	    castFunction = __webpack_require__(43),
	    isArray = __webpack_require__(25);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(10),
	    createBaseEach = __webpack_require__(42);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(11),
	    keys = __webpack_require__(13);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(12);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(14),
	    baseKeys = __webpack_require__(35),
	    isArrayLike = __webpack_require__(39);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(15),
	    isArguments = __webpack_require__(16),
	    isArray = __webpack_require__(25),
	    isBuffer = __webpack_require__(26),
	    isIndex = __webpack_require__(29),
	    isTypedArray = __webpack_require__(30);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(17),
	    isObjectLike = __webpack_require__(24);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObjectLike = __webpack_require__(24);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    getRawTag = __webpack_require__(22),
	    objectToString = __webpack_require__(23);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(20);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(21);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(20),
	    stubFalse = __webpack_require__(28);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(31),
	    baseUnary = __webpack_require__(33),
	    nodeUtil = __webpack_require__(34);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isLength = __webpack_require__(32),
	    isObjectLike = __webpack_require__(24);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(21);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(36),
	    nativeKeys = __webpack_require__(37);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(38);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(40),
	    isLength = __webpack_require__(32);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObject = __webpack_require__(41);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(39);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(44);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	function validate(email) {
	    email = email.trim();

	    if (/[\ \,]/.test(email)) {
	        return false;
	    }

	    if (email.split(/@/).length > 2) {
	        return false;
	    }

	    var segments = email.split('.');
	    var TLD = segments[segments.length - 1];
	    var validTLD = /^[A-z]+$/.test(TLD);
	    if (!validTLD) {
	        return false;
	    }

	    if (!emailRegex.test(email)) {
	        return false;
	    }

	    return true;
	}

	exports.default = {
	    validate: validate
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _flipcounter = __webpack_require__(47);

	var _flipcounter2 = _interopRequireDefault(_flipcounter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlipCounter = {
	    update: function update(page) {
	        $.ajax({
	            url: 'https://act.demandprogress.org/progress/' + page + '?callback=?',
	            dataType: 'jsonp'
	        }).then(function (data) {
	            var $wrapperEl = $('.action-wrapper');
	            if (!$wrapperEl.hasClass('counter-is-visible')) {
	                return;
	            }

	            var size = data.total.actions;
	            var counterDestinationLength = size.toString().length;
	            var counterStartingNumber = Math.pow(10, counterDestinationLength - 1);
	            var counter = new _flipcounter2.default('flip-counter', {
	                value: counterStartingNumber,

	                // Sizing
	                bFH: 40,
	                bOffset: 200,
	                fW: 30,
	                tFH: 20
	            });
	            counter.incrementTo(size, 1.6, 120);
	            var $counter = $('#flip-counter');
	            $counter.css({
	                width: counterDestinationLength * 30 + Math.floor((counterDestinationLength - 1) / 3) * 7
	            });
	        });
	    }
	};

	exports.default = FlipCounter;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (E, c) {
	  var p = { value: 0, inc: 1, pace: 1000, auto: true, tFH: 39, bFH: 64, fW: 53, bOffset: 390 };var G = window.document,
	      h = typeof E !== "undefined" && E !== "" ? E : "flip-counter",
	      s = G.getElementById(h);var w = {};for (var a in p) {
	    w[a] = a in c ? c[a] : p[a];
	  }var f = [],
	      F = [],
	      C,
	      i,
	      n,
	      l,
	      m = null,
	      j,
	      B,
	      b = { q: null, pace: 0, inc: 0 };this.setValue = function (d) {
	    if (q(d)) {
	      n = w.value;l = d;w.value = d;k(n, l);
	    }return this;
	  };this.setIncrement = function (d) {
	    w.inc = q(d) ? d : p.inc;return this;
	  };this.setPace = function (d) {
	    w.pace = q(d) ? d : p.pace;return this;
	  };this.setAuto = function (d) {
	    if (d && !w.auto) {
	      w.auto = true;e();
	    }if (!d && w.auto) {
	      if (m) {
	        t();
	      }w.auto = false;
	    }return this;
	  };this.step = function () {
	    if (!w.auto) {
	      e();
	    }return this;
	  };this.add = function (d) {
	    if (q(d)) {
	      n = w.value;w.value += d;l = w.value;k(n, l);
	    }return this;
	  };this.subtract = function (d) {
	    if (q(d)) {
	      n = w.value;w.value -= d;if (w.value >= 0) {
	        l = w.value;
	      } else {
	        l = "0";w.value = 0;
	      }k(n, l);
	    }return this;
	  };this.incrementTo = function (y, M, x) {
	    if (m) {
	      t();
	    }if (typeof M != "undefined") {
	      var H = q(M) ? M * 1000 : 10000,
	          d = typeof x != "undefined" && q(x) ? x : w.pace,
	          L = typeof y != "undefined" && q(y) ? y - w.value : 0,
	          J,
	          I,
	          o,
	          K = 0;b.q = null;d = H / L > d ? Math.round(H / L / 10) * 10 : d;J = Math.floor(H / d);I = Math.floor(L / J);o = D(L, J, I, d, H);if (L > 0) {
	        while (o.result === false && K < 100) {
	          d += 10;J = Math.floor(H / d);I = Math.floor(L / J);o = D(L, J, I, d, H);K++;
	        }if (K == 100) {
	          w.inc = b.inc;w.pace = b.pace;
	        } else {
	          w.inc = I;w.pace = d;
	        }A(y, true, J);
	      }
	    } else {
	      A(y);
	    }
	  };this.getValue = function () {
	    return w.value;
	  };this.stop = function () {
	    if (m) {
	      t();
	    }return this;
	  };function e() {
	    n = w.value;w.value += w.inc;l = w.value;k(n, l);if (w.auto === true) {
	      m = setTimeout(e, w.pace);
	    }
	  }function A(I, d, H) {
	    var y = w.value,
	        x = typeof d == "undefined" ? false : d,
	        o = typeof H == "undefined" ? 1 : H;if (x === true) {
	      o--;
	    }if (y != I) {
	      n = w.value, w.auto = true;if (y + w.inc <= I && o != 0) {
	        y += w.inc;
	      } else {
	        y = I;
	      }w.value = y;l = w.value;k(n, l);m = setTimeout(function () {
	        A(I, x, o);
	      }, w.pace);
	    } else {
	      w.auto = false;
	    }
	  }function k(o, K) {
	    f = u(o);F = u(K);var J,
	        H = f.length,
	        d = F.length;if (d > H) {
	      J = d - H;while (J > 0) {
	        r(d - J + 1, F[d - J]);J--;
	      }
	    }if (d < H) {
	      J = H - d;while (J > 0) {
	        v(H - J);J--;
	      }
	    }for (var I = 0; I < H; I++) {
	      if (F[I] != f[I]) {
	        g(I, f[I], F[I]);
	      }
	    }
	  }function g(y, L, o) {
	    var I,
	        H = 0,
	        K,
	        J,
	        d = ["-" + w.fW + "px -" + L * w.tFH + "px", w.fW * -2 + "px -" + L * w.tFH + "px", "0 -" + o * w.tFH + "px", "-" + w.fW + "px -" + (L * w.bFH + w.bOffset) + "px", w.fW * -2 + "px -" + (o * w.bFH + w.bOffset) + "px", w.fW * -3 + "px -" + (o * w.bFH + w.bOffset) + "px", "0 -" + (o * w.bFH + w.bOffset) + "px"];if (w.auto === true && w.pace <= 300) {
	      switch (y) {case 0:
	          I = w.pace / 6;break;case 1:
	          I = w.pace / 5;break;case 2:
	          I = w.pace / 4;break;case 3:
	          I = w.pace / 3;break;default:
	          I = w.pace / 1.5;break;}
	    } else {
	      I = 80;
	    }I = I > 80 ? 80 : I;function x() {
	      if (H < 7) {
	        K = H < 3 ? "t" : "b";J = G.getElementById(h + "_" + K + "_d" + y);if (J) {
	          J.style.backgroundPosition = d[H];
	        }H++;if (H != 3) {
	          setTimeout(x, I);
	        } else {
	          x();
	        }
	      }
	    }x();
	  }function u(d) {
	    return d.toString().split("").reverse();
	  }function r(o, x) {
	    var d = Number(o) - 1;j = G.createElement("ul");j.className = "cd";j.id = h + "_d" + d;j.innerHTML = '<li class="t" id="' + h + "_t_d" + d + '"></li><li class="b" id="' + h + "_b_d" + d + '"></li>';if (d % 3 == 0) {
	      B = G.createElement("ul");B.className = "cd";B.innerHTML = '<li class="s"></li>';s.insertBefore(B, s.firstChild);
	    }s.insertBefore(j, s.firstChild);G.getElementById(h + "_t_d" + d).style.backgroundPosition = "0 -" + x * w.tFH + "px";G.getElementById(h + "_b_d" + d).style.backgroundPosition = "0 -" + (x * w.bFH + w.bOffset) + "px";
	  }function v(x) {
	    var d = G.getElementById(h + "_d" + x);s.removeChild(d);var o = s.firstChild.firstChild;if ((" " + o.className + " ").indexOf(" s ") > -1) {
	      d = o.parentNode;s.removeChild(d);
	    }
	  }function z(I) {
	    var d = I.toString(),
	        x = d.length,
	        H = 1,
	        o;for (o = 0; o < x; o++) {
	      j = G.createElement("ul");j.className = "cd";j.id = h + "_d" + o;j.innerHTML = j.innerHTML = '<li class="t" id="' + h + "_t_d" + o + '"></li><li class="b" id="' + h + "_b_d" + o + '"></li>';s.insertBefore(j, s.firstChild);if (H != x && H % 3 == 0) {
	        B = G.createElement("ul");B.className = "cd";B.innerHTML = '<li class="s"></li>';s.insertBefore(B, s.firstChild);
	      }H++;
	    }var y = u(d);for (o = 0; o < x; o++) {
	      G.getElementById(h + "_t_d" + o).style.backgroundPosition = "0 -" + y[o] * w.tFH + "px";G.getElementById(h + "_b_d" + o).style.backgroundPosition = "0 -" + (y[o] * w.bFH + w.bOffset) + "px";
	    }if (w.auto === true) {
	      m = setTimeout(e, w.pace);
	    }
	  }function D(J, I, H, K, y) {
	    var o = { result: true },
	        x;o.cond1 = J / I >= 1 ? true : false;o.cond2 = I * H <= J ? true : false;o.cond3 = Math.abs(I * H - J) <= 10 ? true : false;o.cond4 = Math.abs(I * K - y) <= 100 ? true : false;o.cond5 = I * K <= y ? true : false;if (o.cond1 && o.cond2 && o.cond4 && o.cond5) {
	      x = Math.abs(J - I * H) + Math.abs(I * K - y);if (b.q === null) {
	        b.q = x;
	      }if (x <= b.q) {
	        b.pace = K;b.inc = H;
	      }
	    }for (var d = 1; d <= 5; d++) {
	      if (o["cond" + d] === false) {
	        o.result = false;
	      }
	    }return o;
	  }function q(d) {
	    return !isNaN(parseFloat(d)) && isFinite(d);
	  }function t() {
	    clearTimeout(m);m = null;
	  }z(w.value);
	};

	; /**
	   * Apple-Style Flip Counter
	   * Version 0.5.3 - May 7, 2011
	   *
	   * Copyright (c) 2010 Chris Nanney
	   * http://cnanney.com/journal/code/apple-style-counter-revisited/
	   *
	   * Licensed under MIT
	   * http://www.opensource.org/licenses/mit-license.php
	   */

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Modal = {
	    show: function show(modal) {
	        var $modal = $(modal);

	        $modal.css({
	            display: 'table'
	        });

	        setTimeout(function (f) {
	            $modal.removeClass('invisible');
	        }, 50);
	    },

	    hide: function hide(modal) {
	        var $modal = $(modal);

	        $modal.addClass('invisible');

	        setTimeout(function (f) {
	            $modal.css({
	                display: 'none'
	            });
	        }, 400);
	    },

	    wire: function wire(modal) {
	        var $modal = $(modal);

	        if ($modal.length === 0) {
	            return;
	        }

	        $modal.find('.close').on('click', function (e) {
	            e.preventDefault();

	            Modal.hide(modal);
	        });

	        $modal.find('.gutter').on('click', function (e) {
	            if (e.target !== e.currentTarget) {
	                return;
	            }

	            e.preventDefault();

	            Modal.hide(modal);
	        });
	    },

	    resizeTimeout: null,

	    onResize: function onResize(f) {
	        clearTimeout(Modal.resizeTimeout);
	        Modal.resizeTimeout = setTimeout(Modal.updateMaxHeight, 300);
	    },

	    updateMaxHeight: function updateMaxHeight(f) {
	        $('.modal').css({
	            'max-height': innerHeight + 'px'
	        });
	    },

	    setup: function setup(f) {
	        // Wire all modals
	        $('.overlay').each(function (i, el) {
	            Modal.wire(el);
	        });

	        // Update max-height on resize
	        $(window).off('resize', Modal.onResize).on('resize', Modal.onResize);

	        Modal.updateMaxHeight();
	    }
	};

	exports.default = Modal;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _staticKit = __webpack_require__(3);

	var _staticKit2 = _interopRequireDefault(_staticKit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Utils from './utils';


	var patterns = {
	    url: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/g
	};
	var handles = [];
	var tweet = '';

	function start() {
	    handles = _.clone(_constants2.default.twitterHandles);
	    handles = _.uniq(handles);
	    handles = _.shuffle(handles);

	    generateTweet();

	    $('.twitter-tool-cta').on('click', function (e) {
	        e.preventDefault();

	        var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
	        window.open(url);

	        generateTweet();
	    });
	}

	function generateTweet() {
	    // Congratulate
	    if (handles.length === 0) {
	        $('body').addClass('twitter-tool-completed');
	        return;
	    }

	    // Update Tweet
	    tweet = _constants2.default.tweet;
	    tweet = addHandlesToTweet(tweet);

	    // Update Preview
	    var preview = addColorSpansToTweet(tweet);
	    $('.twitter-tool .tweet').html(preview);

	    // Animate
	    var initialDelay = 100;
	    var incrementalDelay = 50;
	    $('.twitter-tool .tweet .handle').each(function (i, el) {
	        $(el).css({
	            'transition-delay': initialDelay + incrementalDelay * i + 'ms'
	        });
	    });
	    $('.twitter-tool').removeClass('visible');
	    setTimeout(function (f) {
	        $('.twitter-tool').addClass('visible');
	    }, 0);
	}

	function getTweetLength(tweet) {
	    var length = tweet.length;

	    // URLs cost 23 characters
	    var urls = tweet.match(patterns.url);
	    _.each(urls, function (url) {
	        length -= url.length;
	        length += 23;
	    });

	    return length;
	}

	function addHandlesToTweet(tweet) {
	    var charactersLeft = 140 - getTweetLength(tweet);

	    var addedHandles = [];
	    _.each(handles, function (handle) {
	        var addition = ' ' + handle;
	        var length = addition.length;
	        if (length < charactersLeft) {
	            tweet += addition;
	            charactersLeft -= length;
	            addedHandles.push(handle);

	            // Reducing frequency of smaller handles being added
	            if (charactersLeft < 8) {
	                return false;
	            }
	        }
	    });

	    _.pullAll(handles, addedHandles);

	    return tweet;
	}

	function addColorSpansToTweet(tweet) {
	    tweet = tweet.replace(/#\w+/g, function (match) {
	        return '<span class="blue">' + match + '</span>';
	    });
	    tweet = tweet.replace(/@\w+/g, function (match) {
	        return '<span class="blue handle">' + match + '</span>';
	    });
	    tweet = tweet.replace(/https?:\/\/[\w.]+/g, function (match) {
	        return '<span class="blue">' + match + '</span>';
	    });
	    return tweet;
	}

	function onTweetFormSubmit(e) {
	    e.preventDefault();

	    var tweet = '.@' + state.twitterIDs.join(' @') + ' ' + state.twitterText;

	    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);

	    window.open(url);

	    // Show thanks
	    var $submit = $('.tweet-wrapper button');
	    $submit.addClass('thanks');
	    $submit.text('Thanks!');

	    // Send event
	    ga('send', {
	        hitType: 'event',
	        eventCategory: 'ThanksPageTweet',
	        eventAction: 'sent',
	        eventLabel: _constants2.default.actionKitPage
	    });
	}

	exports.default = {
	    start: start
	};

/***/ }
/******/ ]);