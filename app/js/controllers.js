/**
 * Created by iakoupov on 2016-11-19.
 */


var controllers = angular.module('controllers',[]);

controllers.controller('teaController',['teaService', function (teaService) {
    var vm = this;
    
    vm.title = 'I AM tea';
    
    vm.teas = teaService.getTeas();
}])