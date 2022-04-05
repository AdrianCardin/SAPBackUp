sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (MessageToast, JSONModel, Controller) {
	"use strict";
        return Controller.extend("viewprofile.controller.View1", {
            onInit: function () {
                var oJsonModel = new JSONModel(sap.ui.require.toUrl("sap/uxap/sample/SharedJSONData/HRData.json"));
                this.getView().setModel(oJsonModel, "ObjectPageModel");
            },
            handleLink1Press: function () {
                var msg = 'Page 1  link clicked';
                MessageToast.show(msg);
            },
            handleLink2Press: function () {
                var msg = 'Page 2  link clicked';
                MessageToast.show(msg);
            },
            handleEditBtnPress: function () {
                var msg = 'An edit box should appear when you click on the "Edit header" button';
                MessageToast.show(msg);
            },
            toggleFooter: function () {
                var oObjectPageLayout = this.byId("ObjectPageLayout");
                oObjectPageLayout.setShowFooter(!oObjectPageLayout.getShowFooter());
            }
        });
    });
    