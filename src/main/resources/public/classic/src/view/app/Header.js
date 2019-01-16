/**
 * This class is Header for the application
 */
Ext.define('starter.view.app.Header', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'app-header',

	height: 60,

	reference: 'appHeader',

	items: [{
		xtype: 'tbtext',

		//We can use binding as well
		text: 'The logo goes here'
	}, {
		xtype: 'tbfill'
	}, {
		xtype: 'tbtext',
		text: 'Sample User'
	}, {
		iconCls: 'fa fa-power-off',
		//ui: 'header',
		tooltip: 'Logout',
		handler: function(){
			//put a pop up window prompt before logging out.
		}
	}]
});