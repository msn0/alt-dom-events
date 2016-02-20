// http://www.datchley.name/currying-vs-partial-application/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.call.apply(fn, [this].concat(args)) : function () {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return curried.call.apply(curried, [_this].concat(args, rest));
    };
  };
}

function bindEventToAction(eventName, action) {
  try {
    document.addEventListener(eventName, function (data) {
      return action(data.detail);
    });
  } catch (e) {}
}

var bindDOMEvents = curry(function (events, target) {
  Object.keys(events).forEach(function (name) {
    return bindEventToAction(name, target[events[name]]);
  });
  return target;
});
exports.bindDOMEvents = bindDOMEvents;