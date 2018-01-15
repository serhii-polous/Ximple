(function () {
    'use strict'; 

    angular
        .module('startApp')
        .directive('settingBar', settingBar); 

    settingBar.$inject = []; 
    function settingBar() {
        return {
            bindToController:true, 
            controller:'settingBarCtrl', 
            templateUrl:'directives/workspace/setting-bar/setting-bar.html', 
            controllerAs:'vm', 
            restrict:'AE', 
            scope: {
            }
        }; 
    }
})(); 