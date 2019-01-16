Ext.define('starter.mixin.Mediator', {
  extend: 'Ext.Mixin',

  requires: [
    'starter.util.Mediator'
  ],

  mixinConfig: {
    id: 'mediator',
    before: {
      init: 'doInit'
    }
  },

  /*
   * Something to remember here is that the scope for each of these
   * functions will be the component we've been mixed in to, and not
   * some "Mediator" object.
   */
  doInit: function() {
    /* So here, `this` is the component, not the mediator */
    var me = this;

    console.log('Initial Config', me.subscribe, me);
    if (Ext.isObject(me.subscribe)) {
      Ext.Object.each(me.subscribe, me.addSubscription, me);
    }
  },

  //Fire the publish event
  publish: function() {
    this.fireEvent.apply(starter.util.Mediator, arguments)
  },

  addSubscription: function(name, fn) {
    var me = this;

    if (Ext.isString(fn)) {
      fn = me[fn];
    }

    starter.util.Mediator.on(name, fn, me);
  }
});