/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tester/pruebas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
