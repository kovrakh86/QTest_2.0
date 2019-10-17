(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 10:
/*!*******************************************************!*\
  !*** ./js/extensions/jquery.validation.extensions.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {(function () {
  //FIX for IE: it doesn't support some mime-types(e.g. application/msword) passed through accept attribute
  $.validator.addMethod("accept", function (value, element, accept) {
    var typeParam, optionalValue, i, file, regex;
    optionalValue = this.optional(element); // Element is optional

    if (optionalValue) {
      return optionalValue;
    }

    if ($(element).attr("type") === "file") {
      // Escape string to be used in the regex
      // see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
      // Escape also "/*" as "/.*" as a wildcard
      typeParam = accept.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"); // Check if the element has a FileList before checking each file

      if (element.files && element.files.length) {
        regex = new RegExp("(" + typeParam + ")$", "i");

        for (i = 0; i < element.files.length; i++) {
          file = element.files[i]; // Grab the file extension from the loaded file, verify it matches

          if (!file.name.match(regex)) {
            return false;
          }
        }
      }
    } // Either return true because we've validated each file, or because the
    // browser does not support element.files and the FileList feature


    return true;
  }, $.validator.format("Please enter a value with a valid mimetype."));
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ 0)))

/***/ }),

/***/ 11:
/*!****************************!*\
  !*** ./js/pcg.frontend.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// ReSharper disable InconsistentNaming
// ReSharper disable UseOfImplicitGlobalInFunctionScope
var AccessWidget = __webpack_require__(/*! ./controls/access.widget */ 12);

function PcgFrontend() {
  this.init = function () {
    $.pcg = $.pcg || {};
    $.pcg.frontend = $.pcg.frontend || {};
    $.extend($.pcg.frontend, {
      accessWidget: new AccessWidget()
    });
  };
}

;
module.exports = new PcgFrontend();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ 0)))

/***/ }),

/***/ 12:
/*!**************************************!*\
  !*** ./js/controls/access.widget.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
 * Assist fontsize JS module
 */
var AccessWidget = function AccessWidget() {
  var COOKIE_NAME = "assist_accessWidget";
  var currentContext = $(document);
  var moduleOptions = {
    fontSizes: {
      normal: "16px",
      large: "18px",
      largest: "20px"
    },
    cookie: null,
    styles: {
      normal: "normal",
      contrast: "contrast"
    },
    currentStyle: null,
    currentFontSize: null
  };

  var saveCookie = function saveCookie() {
    $.cookie(COOKIE_NAME, moduleOptions.currentFontSize + "|" + moduleOptions.currentStyle, {
      expires: 100,
      path: '/'
    });
  };

  var setFontSize = function setFontSize(size) {
    console.log("setFontSize");
    moduleOptions.currentFontSize = size;
    $("html").css("font-size", moduleOptions.fontSizes[size]);
    saveCookie();
  };

  var setStyleSheet = function setStyleSheet(name) {
    console.log("setStyleSheet: ", name);
    moduleOptions.currentStyle = name;
    $(".js-contrast-style").each(function (i) {
      $(this).prop("disabled", true);

      if (moduleOptions.styles.contrast === name) {
        $(this).prop("disabled", false);
      }
    });
    saveCookie();
  };

  var setModuleOptions = function setModuleOptions() {
    try {
      var myCookie = $.cookie(COOKIE_NAME);

      if (myCookie) {
        moduleOptions.cookie = myCookie.split("|");
        moduleOptions.currentFontSize = moduleOptions.cookie[0];
        moduleOptions.currentStyle = moduleOptions.cookie[1];
      } else {
        moduleOptions.currentFontSize = moduleOptions.fontSizes.normal;
        moduleOptions.currentStyle = moduleOptions.styles.normal;
      }
    } catch (e) {
      // Error handling
      console.log(e);
    }
  };

  var bindEventHandlers = function bindEventHandlers() {
    // font size events
    $('.js-fontsize-normal', currentContext).on('click', function (e) {
      e.preventDefault();
      setFontSize('normal');
    });
    $('.js-fontsize-medium', currentContext).on('click', function (e) {
      e.preventDefault();
      setFontSize('large');
    });
    $('.js-fontsize-large', currentContext).on('click', function (e) {
      e.preventDefault();
      setFontSize('largest');
    }); // style events

    $('.js-switch-css-normal', currentContext).on('click', function (e) {
      e.preventDefault();
      setStyleSheet(moduleOptions.styles.normal);
    });
    $('.js-switch-css-contrast', currentContext).on('click', function (e) {
      e.preventDefault();
      setStyleSheet(moduleOptions.styles.contrast);
    });
  };

  this.init = function (context, options) {
    currentContext = context || currentContext;
    $.extend(moduleOptions, options);
    setModuleOptions();
    bindEventHandlers();
    setFontSize(moduleOptions.currentFontSize);
    setStyleSheet(moduleOptions.currentStyle);
  };

  return this;
};

module.exports = AccessWidget;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ 0)))

/***/ }),

/***/ 13:
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/*!*************************************!*\
  !*** ./scss/styles.backoffice.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// CSS
__webpack_require__(/*! ./scss/styles.scss */ 13);

__webpack_require__(/*! ./scss/styles.backoffice.scss */ 28);

__webpack_require__(/*! ./scss/contrast.scss */ 31); // JS


__webpack_require__(/*! jquery */ 0); // NOTE: it MUST BE used instead of $ and jQuery on views, $ and jQuery can be safely used inside our modules as these aliases will point to jQuery instance in webpack closure, not to global jquery object


global.$jquery = __webpack_require__(/*! jquery */ 0); // NOTE: if somebody has already provided instance of $ before us, we shouldn't override it, if not - then expose our instance

if (!global.$ || !global.jQuery) {
  global.$ = global.jQuery = global.$jquery;
}

__webpack_require__(/*! slick-carousel */ 4);

__webpack_require__(/*! jquery-validation */ 1);

__webpack_require__(/*! jquery-validation/dist/additional-methods */ 5);

__webpack_require__(/*! jquery-validation-unobtrusive */ 6);

__webpack_require__(/*! bootstrap */ 7);

__webpack_require__(/*! ./js/extensions/jquery.extensions */ 9);

__webpack_require__(/*! ./js/extensions/jquery.validation.extensions */ 10);

__webpack_require__(/*! ./js/pcg.frontend */ 11).init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 31:
/*!****************************!*\
  !*** ./scss/contrast.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/*!********************************************!*\
  !*** ./js/extensions/jquery.extensions.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Assist extensions JS module
 */
(function ($) {
  /* Small extension to allow to deal with return key events in any browser */
  $.fn.enterKey = function (fnc) {
    return this.each(function () {
      $(this).keypress(function (ev) {
        var keycode = ev.keyCode ? ev.keyCode : ev.which;

        if (keycode === '13') {
          ev.trigger("pcg-keypress-enter"); //fnc.call(this, ev);
        }
      });
    });
  };
})(jQuery);
/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */


jQuery.cookie = function (key, value, options) {
  // key and value given, set cookie...
  if (arguments.length > 1 && (value === null || _typeof(value) !== "object")) {
    options = jQuery.extend({}, options);

    if (value === null) {
      options.expires = -1;
    }

    if (typeof options.expires === 'number') {
      var days = options.expires,
          t = options.expires = new Date();
      t.setDate(t.getDate() + days);
    }

    return document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
    options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
  } // key and possibly options given, get cookie...


  options = value || {};
  var result,
      decode = options.raw ? function (s) {
    return s;
  } : decodeURIComponent;
  return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ 0)))

/***/ })

},[[3,1,2]]]);
//# sourceMappingURL=app.js.map