Ext.define('starter.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.starter-login',

    onLoginClick: function() {
        var me = this;
        loginForm = me.lookupReference('loginform');

        //An extra check which is not mandatory
        //as we are using formBind on the login button which checks validity
        if (loginForm.isValid()) {

            // This would be the ideal location to verify the user's credentials via
            // a server-side lookup. We'll just move forward for the sake of this example.
        	Ext.Ajax.request({
                url: 'app/getUserDetails.json',
                method: 'GET',
                success: function(form, action) {
                    me.onLogin(action.result);
                },
                failure: function(form, action) {

                    //Display the error message to the user if login fails.
                    Ext.Msg.alert('Failure', action.result.msg);
                }
            });
        }
    },

    onLogin: function(response) {
        var me = this,
            userDetails = Ext.Object.isEmpty(response) || Ext.isEmpty(response.data) ? {} : response.data[0];

        //Setting global constants post successful login.
        starter.Global.setConfig(userDetails);

        // Set the localStorage value to true
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userDetails', Ext.util.JSON.encode(userDetails));

        // Remove Login Window
        me.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
    },
    showLogin : function() {
    	var me = this;
    	me.lookupReference('welcomeLabel').hide();
    	me.lookupReference('loginform').show();
    
    }
});