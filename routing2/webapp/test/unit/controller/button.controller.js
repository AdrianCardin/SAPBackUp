/*global QUnit*/

sap.ui.define([
	"routing2/controller/button.controller"
], function (Controller) {
	"use strict";

	QUnit.module("button Controller");

	QUnit.test("I should test the button controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
