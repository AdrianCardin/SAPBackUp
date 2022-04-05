sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nttdata.com.project3.controller.View1", {
            onInit: function () {

                //obtenemos el modelo la informaacion
                var oModelData = this.getOwnerComponent().getModel("northwind_model");

                //this.getView().setBusy(true);
    
                var that = this;
                
                var URLconParametros = "/Regions";
    
                oModelData.read(URLconParametros, {
                    success: function (response) {
                        alert("Entrando")
                        var data = response.results;
                        // se parsea a Json
                        var oModelData = new sap.ui.model.json.JSONModel();
                        oModelData.setData(data);
                        that.getView().byId("_IDGenComboBox1").setModel(oModelData);
                        that.getView().byId("_IDGenComboBox2").setModel(oModelData);

                    },
    
                    //Si falla el servicio
                    error: function (error) {
                        alert("KO")
                    }
                });

            },
            onChange:function(){
                alert("click en Boton 1")
            },
            diferenciaHoraria: function(event) {
                alert("Ahora se debe enviar los datos");
                var firstVariable=view.byId("_IDGenComboBox1").getParameter;
                var secondVariable=view.byId("_IDGenComboBox2").getParameter;
                debugger;
                alert("Primera variable "+ firstVariable + ", segunda variable "+secondVariable);
                /*var oItem = oEvent.getParameter("selectedItem");
                this.getView().byId("input-a").setValue(oItem.getText());*/
            }
        });
    });
