# alt-dom-events [![Build Status](https://travis-ci.org/msn0/alt-dom-events.svg?branch=master)](http://travis-ci.org/msn0/alt-dom-events)

> dom events support for [alt](https://github.com/goatslacker/alt)

## bindDOMEvents

Binds events fired on document to Alt actions, e.g. 

```js
import alt from './alt';
import {bindDOMEvents} from 'alt-dom-events';

class FooActions {
  constructor() {
    this.generateActions('foo', 'bar');
  }
}

export default bindDOMEvents({ 
  'foo-document-event': 'foo',
  'bar-document-event': 'bar'
}, alt.createActions(FooActions));
```

The following fires action `FooActions.foo` when `foo-document-event` is dispatched 

```js
document.dispatchEvent(new CustomEvent('foo-document-event', { detail: {}}));
```

### ES7 decorator

`bindDOMEvents` can be used as a decorator

```js
import alt from './alt';
import {createActions} from 'alt-utils/lib/decorators';
import {bindDOMEvents} from 'alt-dom-events';

@bindDOMEvents({
  'foo-document-event': 'foo',
  'bar-document-event': 'bar'
})
@createActions(alt)
class FooActions {
  constructor() {
    this.generateActions('foo', 'bar');
  }
}

export default FooActions;
```

## License

MIT
