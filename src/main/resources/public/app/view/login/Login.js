Ext.define('starter.view.login.Login', {
    extend		: 'Ext.panel.Panel',
    xtype		: 'starter-login',
    requires	: [
    				'Ext.container.Container',
			        'Ext.form.Panel',
			        'starter.view.login.LoginController',
			        'starter.view.login.LoginModel'
	],
    controller	: 'starter-login',
    viewModel	: {
    	type 	: 'starter-login'
    },
    plugins		: [{
    	ptype   : 'viewport'
    }],   
    layout      : {
    	type 	: 'fit'
    },
    items 		: [
    				{
    					xtype 	: 'panel',
    					name    : 'login',
    					cls   	: 'login',
    					layout 	: {
    						type : 'vbox',    						
    					},
    					items : [{
		    						xtype	: 'container',
		    						height	: 50,
		    						width 	: '100%',
		    						layout	: {
		    						      type	: 'hbox',
		    						      pack : 'end'
		    						},
		    						items: [{
		                                      xtype			: 'button',                                     
		                                      reference		: 'signInBtn',
		                                      handler		: 'showLogin',
		                                      margin 		: 10,
		                                      height 		: 40,
		                                      cls 			: 'green-button',
		                                      text			: 'Login'
		                                   }]
		    						},
		    						{
		    							xtype 	: 'panel',
		    							width   : '100%',
		    							flex    : 1,
		    							layout 	: 'center',
		    	    					items 	: [	{
				    								 xtype 	: 'panel',
				    								 width  : '100%',
				    								 height : '100%',
				    								 layout : 'center',
				    								 flex 	: 1,
				    								 html  	: '<p class = "login-message" align = "center">Welcome to Claim Management System!!</p>',
				    								 reference 	: 'welcomeLabel',
				    								 margin : '200px 10px 10px 10px'
		    										},	    	    								
		    	    								{
		    	    									xtype 		: 'form',
		    	    									height 		:  300,
		    	    									width 		:  500,
		    	    									cls   		: 'loginForm', 
		    	    									hidden 		: true,
		    	    									border 		: 1,
		    	    									reference 	: 'loginform',
		    	    									margin 		: '0px 10px 10px 10px',
		    	    									jsonSubmit	: true,
		    	    								    layout 		: {
		    	    								    	type 	: 'vbox',
		    	    								    	align 	: 'stretch'	
		    	    								    },
		    	    								    defaults : {
		    	    								    	
		    	    								    	
		    	    								    },
		    	    								    items: [
		    	    								    		{
		    	    								    			xtype 		: 'panel',
		    	    								    			height 		: 50,
		    	    								    			cls 		: 'title',
		    	    								    			layout      : 'hbox',
		    	    								    			items 		: {
		    	    								    				xtype 	: 'label',
		    	    								    				width 	: '100%',
		    	    								    				margin 	: '20px 10px 10px 20px',
		    	    								    				html  	: '<span class = "login-form-message">Please Login!!</span>'
		    	    								    			}
		    	    								    			
		    	    								    		},
		    	    								    		{
			    	    								            xtype		: 'textfield',
			    	    								            name		: 'username',
			    	    								            fieldLabel	: 'Username',
			    	    								            cls         : 'loginFields',
			    	    								            labelWidth  :  120,
				    	    								    	labelAlign  : 'right',
				    	    								    	height 		:  55,
				    	    								    	margin 		: '20px 30px 10px 10px',
			    	    								            allowBlank	:  false,
			    	    								            emptyText 	: 'Enter Any Username'
		    	    								    		},
		    	    								    		{
			    	    								            xtype		: 'textfield',
			    	    								            name		: 'password',
			    	    								            inputType	: 'password',
			    	    								            fieldLabel	: 'Password',
			    	    								            cls 		: 'loginFields',
			    	    								            labelWidth  :  120,
			    	    								            height 		:  55,
				    	    								    	labelAlign  : 'right',
				    	    								    	margin 		: '10px 30px 10px 10px',
			    	    								            allowBlank	: false,
			    	    								            emptyText 	: 'Enter Any Password'
		    	    								    		},
		    	    								    		{
		    	    								    		 xtype 		: 'panel',
		    	    								    		 layout 	: {
		    	    								    			 type 	: 'hbox',
		    	    								    			 pack 	: 'end'
		    	    								    		 },
		    	    								    		 margin 	: '10px 30px 10px 10px',
		    	    								    		 height 	:  55,
		    	    								    		 items 		: [{
		    	    								    			 			xtype 		: 'button',
						    	    								            text		: 'Login',
						    	    								            height 		:  45,
						    	    								            reference	: 'loginButton',
						    	    								            listeners	: {
						    	    								                click	: 'onLoginClick'
						    	    								            }
				    	    								        }]
		    	    								    		}],
		    	    								        
		    	    								}]
		    						}], 
		    						
    					
    				}]
});