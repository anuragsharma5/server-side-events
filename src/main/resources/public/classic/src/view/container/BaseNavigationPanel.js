/**
 * This class is the base class for all Navigation panels which shares a lot of functionality.
 * Only used for navigation panels which does not act as tabpanels.	
 *
 * TODO - Use this as a base class when writing navigation panels such as home, members, etc.
 */
Ext.define('starter.view.container.BaseNavigationPanel', {
	extend: 'Ext.panel.Panel',
	xtype: 'starter-basenavpanel',

	requires: [
		'Ext.layout.container.boxOverflow.Menu',
		'Ext.layout.container.Center'
	],

	/**
	 *  @cfg {string/object/Ext.app.ViewController} controller
	 *  A string alias, a configuration object or an instance of a controller/ViewController for this view.
	 */
	//controller: 'starter-basenavpanel',

	padding: '10px 10px 10px',

	/**
	 *	@cfg {boolean} scrollable
	 *	A boolean flag to allow scrolling.
	 */
	scrollable: true,

	/**
	 *	@cfg {string/object} layout
	 *	A vertical Box layout- Items will be places one after the other in left to right order.
	 */
	layout: {
		align: 'stretch',
		type: 'vbox'
	}
});