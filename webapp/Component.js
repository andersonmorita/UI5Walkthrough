/*sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"App/WalkThrough/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("App.WalkThrough.Component", {

		metadata: {
			manifest: "json"
		},
*/
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
/*		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});*/

// step 9 component configuration
// first version
/*sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("", {

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
	}
   });*/
   
//second version
/*sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("App.WalkThrough.Component", {
            metadata : {
		rootView: {
			"viewName": "App.WalkThrough.view.App",
			"type": "XML",
			"async": true,
			"id": "app"
		}
	},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "App.WalkThrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});
*/
// Step 10 Descriptor for application
sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
	"App/WalkThrough/controller/HelloDialog" //step 19 reusable dialog 
], function (UIComponent, JSONModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("App.WalkThrough.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
         
         
		// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			// create the views based on the url/hash
			this.getRouter().initialize();
			
			
		},
		
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();         
      }
      
   });
});

/*from manifest.json file
		  "invoice": {
			"type": "sap.ui.model.json.JSONModel",
			"uri": "Invoices.json"

		  }	*/