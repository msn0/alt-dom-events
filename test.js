import {bindDOMEvents} from './';
import test from 'ava';
import jsdom from 'jsdom';

test.beforeEach(t => {
  global.document = jsdom.jsdom('<body></body>');
  global.window = document.defaultView;
});

test.cb('should bind custom event', t => {
  const target = {
    callback: (data) => {
      t.deepEqual(data, {foo: 'bar'});
      t.end();
    }
  };

  bindDOMEvents({'foo-event': 'callback'}, target);

  document.dispatchEvent(
    new window.CustomEvent('foo-event', {detail: {foo: 'bar'}})
  );
});

test.cb('should support currying', t => {
  const target = {
    callback: (data) => {
      t.deepEqual(data, {foo: 'bar'});
      t.end();
    }
  };

  bindDOMEvents({'foo-event': 'callback'})(target);

  document.dispatchEvent(
    new window.CustomEvent('foo-event', {detail: {foo: 'bar'}})
  );
});
