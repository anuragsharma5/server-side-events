/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('starter.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox', //Remove if unnecessary
		'starter.view.app.Footer',
		'starter.view.main.MainController',
		'starter.view.main.MainModel'
		],   

		/**
		 *   @cfg {string} [plugins]
		 *  Due to the use of login & not directly pointing to Main.js from Application.js, we need to 
		 *  provide the "viewport" plugin when creating the Main view post login.
		 */
		plugins: 'viewport',

		/**
		 *  @cfg {string/object/Ext.app.ViewController} controller
		 *  A string alias, a configuration object or an instance of a controller/ViewController for this view.
		 */
		controller: 'main',

		/**
		 *  @cfg {string/object/Ext.app.ViewModel} viewModel
		 *  A string alias, a configuration object or an instance of a viewModel for this view.
		 *  A viewModel acts like a data feeder for this view. 
		 */
		viewModel: 'main',  	

		cls : 'main',
		layout :  {
			type : 'vbox',
			align : 'stretch'
		},
		items : [{
			xtype : 'panel',
			height : 40,
			id : 'welcomeMessage',
			layout : {
				type : 'hbox'
			},
			items  : [{
				xtype : 'panel',
				height : 160,
				flex : 1 ,				
				hidden : false,
				reference : 'welcomeMessage',
				html : '<h2><p align = "center">List of Claims</p></h2>',	
				
			},{
				xtype : 'button',
				iconCls: 'fa fa-power-off',
				height : 30,
				width : 30,
				tooltip: 'Logout',
				hidden : false,
				margin : '5px 10px 10px 10px',
				handler: 'onLogoutBtnClick',
				
			}]
		},{
			xtype : 'grid',
			flex : 1, 
			reference : 'claimsGrid',
			margin : '10px 10px 10px 10px',
			columns: [
		        { text: 'Claims ID', dataIndex: 'claimId', flex : .4 },
		        { text: 'Description', dataIndex: 'desc', flex: .6 },		        
		    ],
		    store :	Ext.create('Ext.data.Store', {
				fields:[ 'claimId', 'desc'],
				data: [
				        { claimId: 'Claim A', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim A1', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim C', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim D', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
				        { claimId: 'Claim E', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim F', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim G', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
				        { claimId: 'Claim H', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }
				       ]
				}),
			listeners : {
				'rowdblclick' : 'showStatusPanel'
			}
		},{
			xtype : 'panel',
			reference : 'backPanel',
			hidden : true,
			height : 50,
			layout : {
				type : 'hbox'				
			},
			items : [{
				xtype : 'button',
				text : '< Back',
				handler : 'onBack',				
				margin : '10px 10px 10px 10px'
			}]
		},{
			xtype : 'panel',
			hidden : true,
			flex : 1,
			reference : 'claimStatuses',
			margin : '10px 10px 10px 10px',
			
			layout : {
				type : 'hbox'
				
			},
			listeners : {
				'show' : 'resetStages'
			}
		}]


});