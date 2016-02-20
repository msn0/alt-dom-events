// http://www.datchley.name/currying-vs-partial-application/
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length ?
      fn.call(this, ...args) :
      (...rest) => {
        return curried.call(this, ...args, ...rest);
      };
  };
}

function bindEventToAction(eventName, action) {
  try {
    document.addEventListener(eventName, data => action(data.detail));
  } catch (e) {}
}

export const bindDOMEvents = curry((events, target) => {
  Object.keys(events)
    .forEach(name => bindEventToAction(name, target[events[name]]));
  return target;
});

