sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("Mockserver.mockserver.controller.View1", 
        {
            onInit: function ()
             {
                 debugger;
                //  var omodel=new JSONModel();
                //  omodel.loadData("model/data.json");
                //  this.getView().setModel(omodel,"ProductCollection");
             },
             onPress:function(oEvent)
             {
                 debugger; 
                 var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                 oRouter.navTo("detail");
             }
        });
    });
