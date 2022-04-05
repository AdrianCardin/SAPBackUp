sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nttdata.com.northconnexion2.controller.View1", {
            onInit: function () {
            //obtenemos el modelo la informaacion
            var oModelData = this.getOwnerComponent().getModel("northwind_model");

            //this.getView().setBusy(true);

            var that = this;

            var URLconParametros = "/Regions";

            oModelData.read(URLconParametros, {
                success: function (response) {
                    
                    var data = response.results;
                    // se parsea a Json
                    var oModelData = new sap.ui.model.json.JSONModel();
                    oModelData.setData(data);
                    that.getView().byId("_IDGenComboBox1").setModel(oModelData);
                    that.getView().byId("_IDGenComboBox2").setModel(oModelData);

                    var data2 = response.results;
                    // se parsea a Json
                    var oModelData2 = new sap.ui.model.json.JSONModel();
                    oModelData2.setData(data2);
                    that.getView().byId("_IDGenText1").setModel(oModelData2);


                },

                //Si falla el servicio
                error: function (error) {
                    alert("KO")
                }
            });

        },
        diferenciaHoraria: function(){
            
        }
    });
});
