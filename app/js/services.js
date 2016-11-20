/**
 * Created by iakoupov on 2016-11-19.
 */

var services = angular.module('services',[]);

services.factory('teaService', function () {
    
    function getTeas() {
        return [{title: 'earl grey', cost: 5},{title: 'Honey lemon', cost: 2}];
    }
    
    return {
        getTeas: getTeas
    }
})

