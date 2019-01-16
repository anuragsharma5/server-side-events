/**
 * This class is footer for the application
 */
Ext.define('starter.view.app.Footer', {
	extend: 'Ext.ux.statusbar.StatusBar',
	xtype: 'app-footer',

	componentCls: 'app-footer',

	cls: 'x-statusbar app-footer footer shadow',
	statusAlign: 'left',
	height: 20,

	items: [{
		xtype: 'tbtext',
		//We can use binding as well
		text: 'ABC Company (c) 2018 Some Other sample text for footer'
	}]
});