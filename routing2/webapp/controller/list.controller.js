sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("routing2.controller.list", {
            onInit: function () {
                //obtenemos el modelo la informaacion
                var oModelData = this.getOwnerComponent().getModel("northwind_model");
    
                //this.getView().setBusy(true);
    
                var that = this;
    
                var URLconParametros = "/Products";
    
                oModelData.read(URLconParametros, {
                    success: function (response) {
                        
                        var data = response.results;
                        // se parsea a Json
                        var oModelData = new sap.ui.model.json.JSONModel();
                        oModelData.setData(data);
                        that.getView().byId("list").setModel(oModelData);

                    },
    
                    //Si falla el servicio
                    error: function (error) {
                        alert("KO")
                    }
                });

            },
            onClick: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("button");
                
            },
            onNavBack: function () {
                history.go(-1);
            }
            
        });
    });