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

	(function () {
	    // Standards
	    if (!('querySelector' in document)) {
	        return;
	    }

	    // HTML + CSS
	    var html = '\n<style type="text/css">\n    .dp-embedded-form {\n        margin: 0 auto;\n        max-width: 310px;\n    }\n    .dp-embedded-form .dp-embedded-form-action {\n        background-color: #105594;\n        box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);\n        margin: 0 auto;\n        max-width: 310px;\n        padding: 24px 0 0 0;\n        position: relative;\n        z-index: 99;\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-form-form-form {\n        margin: 0;\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-action-h2 {\n        color: #f1f1f1;\n        font-family: Arial, sans-serif;\n        font-size: 22px;\n        font-weight: bold;\n        letter-spacing: 1px;\n        padding: 0 0 16px;\n        text-align: center;\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-wrapper .dp-embedded-form-input-grid {\n        margin: 0 32px;\n        position: relative;\n    }\n    @media screen and (max-width: 769px) {\n        .dp-embedded-form .dp-embedded-form-action {\n            bottom: auto !important;\n            position: relative !important;\n            right: auto !important;\n            top: auto !important;\n        }\n        .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-action-h2 {\n            font-size: 24px;\n            padding: 0 0 16px;\n        }\n        .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-wrapper .dp-embedded-form-input-grid {\n            margin: 0 37px;\n        }\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-wrapper {\n        margin: 0 auto;\n        max-width: 430px;\n        position: relative;\n        vertical-align: top;\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-wrapper input {\n        border: 0;\n        box-sizing: border-box;\n        font-family: Arial, sans-serif;\n        font-size: 18px;\n        font-weight: normal;\n        height: 60px;\n        line-height: 60px;\n        margin: 0 0 1px;\n        padding: 0 20px;\n        vertical-align: top;\n        width: 100%;\n    }\n    .dp-embedded-form .dp-embedded-form-action .dp-embedded-form-wrapper input:nth-of-type(3) {\n        margin-bottom: 0px;\n    }\n    .dp-embedded-form-action .dp-embedded-form-wrapper button {\n        background-color: #ff2810;\n        border: 0;\n        color: #f1f1f1;\n        cursor: pointer;\n        font-family: Arial, sans-serif;\n        font-size: 20px;\n        font-weight: bold;\n        height: 60px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        transition: background-color 0.16s;\n        width: 100%;\n    }\n    .dp-embedded-form-action .dp-embedded-form-wrapper button:hover {\n        background-color: #d01010;\n    }\n    .dp-embedded-form-action hr {\n        background-color: #101c30;\n        border: none;\n        height: 1px;\n        margin: 32px auto 0;\n        max-width: 200px;\n        width: 100%;\n    }\n    .dp-embedded-form-action span.dp-embedded-form-disclaimer {\n        clear: both;\n        color: #8a9bbb;\n        display: block;\n        font-family: Arial, sans-serif;\n        font-size: 13px;\n        line-height: 1.4;\n        margin: 0 auto;\n        max-width: 370px;\n        padding: 16px 38px;\n        text-align: center;\n    }\n    @media screen and (max-width: 769px) {\n        .dp-embedded-form-action span.dp-embedded-form-disclaimer {\n            max-width: 280px;\n        }\n    }\n\n</style>\n<div class="dp-embedded-form">\n    <div class="dp-embedded-form-action">\n        <div class="dp-embedded-form-action-h2">SIGN THE PETITION</div>\n\n        <form class="dp-embedded-form-form-form-form" method="POST" action="https://act.demandprogress.org/act/" accept-charset="utf-8" target="_blank">\n            <div class="dp-embedded-form-wrapper">\n                <div class="dp-embedded-form-input-grid">\n                    <input name="name" placeholder="Name" type="text" autocomplete="on">\n                    <input name="email" placeholder="Email" type="email" autocomplete="on" required="required">\n                    <input name="zip" placeholder="ZIP code" type="text" autocomplete="on" maxlength="10" required="required">\n                    <button type="submit">ADD YOUR NAME</button>\n                </div>\n\n                <div classname="hidden">\n                    <input type="hidden" name="country" value="United States">\n                    <input type="hidden" name="form_name" value="act-petition">\n                    <input type="hidden" name="js" value="1">\n                    <input type="hidden" name="page" value="fix-the-electoral-college-www">\n                    <input type="hidden" name="opt_in" value="1">\n                    <input type="hidden" name="source" value="huffington_post">\n                    <input type="hidden" name="want_progress" value="1">\n                </div>\n            </div>\n        </form>\n\n        <span class="dp-embedded-form-disclaimer">\n            One or more of\n            DailyKos,\n            PFAW,\n            American Family Voices,\n            Brave New Films,\n            Credo,\n            National Priorities Project,\n            Demand Progress,\n            Huffington Post,\n            Common Cause,\n            Public Citizen,\n            RootsAction.org,\n            EveryVoice,\n            MAYDAY PAC,\n            Alliance for Democracy,\n            The Other 98%, and\n            The Nation\n            may contact you about this and future campaigns.\n        </span>\n    </div>\n</div>\n';

	    // Inject
	    var target = document.querySelector('.dp-embedded-form-target');
	    if (!target) {
	        return;
	    }
	    target.innerHTML = html;

	    // Get DOM elements
	    var title = document.querySelector('.dp-embedded-form-action-h2');
	    var form = document.querySelector('.dp-embedded-form-form-form-form');
	    var disclaimer = document.querySelector('.dp-embedded-form-disclaimer');

	    // After submitting, show a message of thanks
	    form.addEventListener('submit', function () {
	        title.textContent = 'Thanks for taking action!';
	        form.style.display = 'none';
	        disclaimer.style.display = 'none';
	    }, false);
	})();

/***/ }
/******/ ]);