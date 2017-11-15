//angularJS모듈에 컨트롤러 등록하기
var app = angular.module('myApp')
.controller("todoCtrl", function($scope, todoService) {

    $scope.todos = todoService.getAllTodos();
    
});

