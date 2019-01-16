/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('starter.Application', {
    extend: 'Ext.app.Application',

    name: 'starter',

    requires: [
        'starter.view.login.Login',
        'starter.view.main.Main'
    ],

    // The tab we want to activate if there is no "#tag" in the URL.
    defaultToken: 'home',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function() {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn,
            userDetails;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem('loggedIn');
        userDetails = localStorage.getItem('userDetails');

        //Setting global constants from cache if present.
        if (!Ext.isEmpty(userDetails)) {

            //Converting back to an object
            starter.Global.setConfig(Ext.util.JSON.decode(userDetails));
        }

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: 'starter-login'
        });

    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});