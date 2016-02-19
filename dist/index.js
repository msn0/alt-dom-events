"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindDOMEvents = bindDOMEvents;
function bindEventToAction(eventName, action) {
  try {
    document.addEventListener(eventName, function (data) {
      return action(data.detail);
    });
  } catch (e) {}
}

function bindDOMEvents(events, target) {
  Object.keys(events).forEach(function (name) {
    return bindEventToAction(name, target[events[name]]);
  });
  return target;
}