# alt-dom-events

> dom events support for alt

## bindDOMEvents

binds events fired on document to Alt actions, e.g. 

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
