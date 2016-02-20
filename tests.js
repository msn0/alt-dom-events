import {bindDOMEvents} from './index';

describe('bind dom events', () => {

  it('should bind custom event', () => {
    const target = {callback: sinon.spy()};
    bindDOMEvents({'foo-event': 'callback'}, target);

    document.dispatchEvent(
      new CustomEvent('foo-event', {detail: {foo: 'bar'}})
    );

    expect(target.callback).to.have.been.calledWith({foo: 'bar'});
    expect(target.callback).to.have.been.calledOnce;
  });

  it('should support currying', () => {
    const target = {callback: sinon.spy()};
    bindDOMEvents({'foo-event': 'callback'})(target);

    document.dispatchEvent(
      new CustomEvent('foo-event', {detail: {foo: 'bar'}})
    );

    expect(target.callback).to.have.been.calledWith({foo: 'bar'});
    expect(target.callback).to.have.been.calledOnce;
  });

});