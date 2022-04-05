sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("routing2.controller.button", {
            onInit: function () {

            },
            onClick: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("list");
            },
            onCollapseExpandPress: function () {
                var oNavigationList = this.byId("navigationList");
                var bExpanded = oNavigationList.getExpanded();
    
                oNavigationList.setExpanded(!bExpanded);
            },
    
            onHideShowSubItemPress: function () {
                var oNavListItem = this.byId("subItemThree");
                oNavListItem.setVisible(!oNavListItem.getVisible());
            }
        });
    });
