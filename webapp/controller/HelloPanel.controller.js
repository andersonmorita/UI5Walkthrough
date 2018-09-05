/*sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("App.WalkThrough.controller.HelloPanel", {*/

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf App.WalkThrough.view.HelloPanel
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf App.WalkThrough.view.HelloPanel
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf App.WalkThrough.view.HelloPanel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf App.WalkThrough.view.HelloPanel
		 */
		//	onExit: function() {
		//
		//	}
/*
	});

});*/
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("App.WalkThrough.controller.HelloPanel", { 
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },
/*      onOpenDialog : function () {
         var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "App.WalkThrough.view.HelloDialog");
            oView.addDependent(oDialog);
         }
         oDialog.open();
      },*/
      //step 17 fragment callback
/*      		onOpenDialog : function () {
			var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), 
					"App.WalkThrough.view.HelloDialog"
		, this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}
			oDialog.open();
		},*/
		 onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onCloseDialog : function () {
			this.getView().byId("helloDialog").close();
		}
   });
});