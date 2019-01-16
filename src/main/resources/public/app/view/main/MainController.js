/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
//TODO: We are staying away from Mediator use to issue global events for now. 
//To introduce it please follow :https://github.com/twelvefootguru/extjs-us-mediator/tree/master/ux
//https://medium.com/twelve-foot-guru/extjs-6-getting-your-controllers-to-talk-to-one-another-863189cc1d56
Ext.define('starter.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
       'starter.view.login.Login'
    ],
    
    

    onLogoutBtnClick: function() {
       this.onLogout('yes');
    },
    init : function () {
    	
    	var me = this;
    	
    	me.claimStatuses  = ['Submission','Review','Adjudication','Finalization','Disbursement'];	
    	
    	me.loadClaimStatuses();
    	
    },
    showStatusPanel : function() {
    	
    	var me = this;
    	
    	me.lookupReference('welcomeMessage').setHtml('');
    	me.lookupReference('claimsGrid').hide();
    	me.lookupReference('backPanel').show();    	
    	me.lookupReference('claimStatuses').show();
    	
    },
    
    onBack : function() {
    	
    	var me = this;
    	me.lookupReference('welcomeMessage').setHtml('<h2><p align = "center">List of Claims</p></h2>');
    	me.lookupReference('claimStatuses').hide();
    	me.lookupReference('backPanel').hide();    	
    	me.lookupReference('claimsGrid').show();
    	
    },
    resetStages : function() {
    	
    	var me = this;
    	
    	for(var j = 0; j < me.claimStatuses.length; j++) {
			
			var statusPanel = me.lookupReference(me.claimStatuses[j]),
	    	greyPanel  = me.lookupReference(me.claimStatuses[j] + 'drawgrey'),
	    	greenPanel  = me.lookupReference(me.claimStatuses[j] + 'drawgreen'); 
			
			statusPanel.setBodyStyle({
    				'background-color' :'#e6e7e8'
    			});
			
			greenPanel ? greenPanel.hide(): null;	
			greyPanel ? greyPanel.show(): null;
			
			
		}	
    	
    	me.subscribeClaimStatusEvent();
    },
    loadClaimStatuses : function() {
    	
    	var me = this,
    		panelArray  = [];
    	
    	me.lookupReference('claimStatuses').removeAll();
    	
    	for (var i = 0; i < me.claimStatuses.length; i++) {
    		
    		var panel  = Ext.create('Ext.panel.Panel' , {
    			height : 80,
    			flex : 1,
    			reference : me.claimStatuses[i],		
    			margin : '10px 5px 5px 5px',
    			layout : 'center',
    			bodyStyle : {
    				'background-color' :'#e6e7e8'
    			},
    			items : [{
    				xtype : 'label',
    				html : '<p align = "center">' + me.claimStatuses[i] + '</p>'
    			}]
    			    			
    		});
    		
    		var drawGreyPanel  = {
    				xtype : 'panel',
    				height : 80,
    				flex :1, 
    				margin : '10px 0px 5px 0px',
    				layout : 'fit',
    				reference : me.claimStatuses[i] + 'drawgrey',
    				status :me.claimStatuses[i],    				
    				listeners : {
    					afterrender : function(comp) {
    						
    						var arrow  = 
    		    			{
    		    			   xtype: 'draw',    			  
    		    			   sprites : [{
    		    			       type: 'arrow',
    		    			       hidden : false,
    		    			       status : comp.status, 
    		    			       translationX: comp.getX()+40,
    		    			       translationY: comp.getY()+25,			         			      
    		    			       size: 20,    		    			      
    		    			       fillStyle: '#e6e7e8'
    		    			   }]
    		    			   
    		    			}
    						comp.add(arrow);
        				}	
    				}
    				
    		}
    		
    		var drawGreenPanel  = {
    				xtype : 'panel',
    				height : 80,
    				flex :1, 
    				hidden : true,
    				margin : '10px 0px 5px 0px',
    				layout : 'fit',
    				hidden : true,
    				reference : me.claimStatuses[i] + 'drawgreen',
    				status :me.claimStatuses[i],    				
    				listeners : {
    					afterrender : function(comp) {
    						
    						var arrow  = 
    		    			{
    		    			   xtype: 'draw',    			  
    		    			   sprites : [{
    		    			       type: 'arrow',
    		    			       hidden : false,
    		    			       status : comp.status, 
    		    			       translationX: comp.getX()+40,
    		    			       translationY: comp.getY()+25,			         			      
    		    			       size: 20,    		    			      
    		    			       fillStyle: 'green'
    		    			   }]
    		    			   
    		    			}
    						comp.add(arrow);
        				}	
    				}
    				
    		}
    		
    		
    		i !== 0 ? panelArray.push(drawGreyPanel): null;
    		i !== 0 ? panelArray.push(drawGreenPanel): null;
    		
    		panelArray.push(panel);
    		
    		
    		
    	}
    	
    	me.lookupReference('claimStatuses').add(panelArray);	
    	
    },

    onLogout: function(choice) {
        if (choice === 'yes') {
        	
            // Remove the localStorage key/value
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userDetails');
            this.getView().removeCls('main');
            this.getView().addCls('login');
            // Remove Main View
            this.getView().destroy();
            
            // Add the Login Window
            var login = 
            
            Ext.create({
                xtype: 'starter-login'
            });
            
           
            login.down('panel').addCls('login');
        }
    },
    subscribeClaimStatusEvent: function() {
    	debugger;
    	var me = this;
    	me.index = -1;
    	
    	if(typeof(EventSource) !== 'undefined') {
    		
    		me.source !== undefined ? me.source.close() : null;
    		
    		me.source = new EventSource('http://localhost:8080/teaEvents');
    		
    		me.source.onmessage = function(event) {
    			
    			
    			var obj = Ext.decode(event.data);
    			
    			me.index = me.index+1;    			
    			console.log(obj.status); 
    			var statusPanel = me.lookupReference(me.claimStatuses[me.index]),
		    	greyPanel  = me.lookupReference(me.claimStatuses[me.index] + 'drawgrey'),
		    	greenPanel  = me.lookupReference(me.claimStatuses[me.index] + 'drawgreen');
    			
    			statusPanel ? statusPanel.setBodyStyle({
        				'background-color' :'green'
        			}): null;
    				
    			greyPanel ? greyPanel.hide(): null;
    			greenPanel ? greenPanel.show(): null;
    			statusPanel ?     					
    			Ext.toast({
    			     html: 'Claim has been moved to ' + me.claimStatuses[me.index],
    			     title: 'Update from Server!!',
    			     width: 500,
    			     autoCloseDelay: 1000
    			    
    			 }): null
    			
    			 if(obj.status  == '100%') {
    				 
    				 obj.status = '100';
    				 
    				 me.source.close();   				  				 
    				
    			 }	
    			 
    		};
    		
    	}
    }
   
});