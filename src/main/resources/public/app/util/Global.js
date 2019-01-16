//Defining a util class to keep global constants
Ext.define('starter.util.Global', {
	alternateClassName: ['starter.Global', ],
	singleton: true,

	setConfig: function(config) {
		//Save config object (Global constants)
		this.config = config;
	},

	getUserName: function() {
		var me = this;
		return Ext.isEmpty(me.config) || Ext.Object.isEmpty(me.config) ? 'N/A' : me.config.userName;
	},

	getUserID: function() {
		var me = this;
		return Ext.isEmpty(me.config) || Ext.Object.isEmpty(me.config) ? 'N/A' : me.config.userID
	}
});