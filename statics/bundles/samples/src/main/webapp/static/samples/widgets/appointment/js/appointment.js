define(["jquery",
		"angular",
        "launchpad/lib/common/util",
        "launchpad/lib/i18n"], function($, angular, util) {
        "use strict";

    var module = angular.module("appointment", [ "user", "i18n", "ui.bootstrap" ]);

    module.controller("appointmentController", [ "$scope", "widget", "$http",
    function($scope, widget, $http) {
		
		$scope.test = "Dit is een test!"
       
    }]);

    return function(widget) {
        module.value("widget", widget);
        angular.bootstrap(widget.body, ["appointment"]);
    };
});