sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("tester.pruebas.controller.MainView", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/countriesExtendedCollection.json"));
			    this.getView().setModel(oModel);

                var ubicacionesData = {
                    "ubicaciones": [
                        {"ubicacion": "Madrid", "ubicacionkey" :"0"}, 
                        {"ubicacion": "Barcelona", "ubicacionkey": "1"},
                        {"ubicacion": "Bilbao", "ubicacionkey": "2"},
                        {"ubicacion": "Sevilla", "ubicacionkey": "3"},
                        {"ubicacion": "Málaga", "ubicacionkey": "4"},
                        {"ubicacion": "Asturias", "ubicacionkey": "5"}]
                };

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(ubicacionesData);
                this.getView().setModel(oModel,"ModeloUbicaciones");
            },
            onChange: function () {
                alert("click en Boton 1");
            },
            onPress: function(oEvent) {
                var oItem = oEvent.getParameter("selectedItem");
                this.getView().byId("input-a").setValue(oItem.getText());
            }

        });
    });
