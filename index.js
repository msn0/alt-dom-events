import curry from 'dead-simple-curry';

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

