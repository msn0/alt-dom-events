import curry from 'dead-simple-curry';

function bindEvent(eventName) {
  return function (action) {
    try {
      document.addEventListener(eventName, data => action(data.detail));
    } catch (e) {}
  }
}

export const bindDOMEvents = curry((events, target) => {
  Object.keys(events)
    .forEach(name => bindEvent(name)(target[events[name]]));
  return target;
});

