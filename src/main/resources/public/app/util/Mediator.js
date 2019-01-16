/**
 * A generic observable object, useful for passing context between ViewControllers.
 * 
 * @private
 */

/**
 *	Refer below for explanation and alternatives
 * 	https://medium.com/twelve-foot-guru/extjs-6-getting-your-controllers-to-talk-to-one-another-863189cc1d56
 *	https://github.com/12ftguru/extjs-ux-mediator
 *
 *	Alternatives : https://medium.com/@steffenhiller/the-idea-is-good-d6360c0a9f11
 */

Ext.define('starter.util.Mediator', {
	singleton: true,
	mixins: ['Ext.mixin.Observable'],

	constructor: function(config) {
		this.mixins.observable.constructor.call(this, config);
	}
});