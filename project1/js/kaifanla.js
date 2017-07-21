/**
 * Created by a369785853 on 2017/7/21.
 */
var app = angular.module('app',['ng','ngRoute','ngAnimate']);
app.controller('start',['$scope','$location',"$routeParams",function($scope,$location,$routeParams){

}]);
app.controller('main',['$scope','$location',"$routeParams",function($scope,$location,$routeParams){

}]);
app.controller('myorder',['$scope','$location',"$routeParams",function($scope,$location,$routeParams){
    $scope.index = $routeParams.index;
    $scope.name = $routeParams.n;
    $scope.tel = $routeParams.tel;
    console.log($scope.time)
}]);
app.controller('order',['$scope','$location',"$routeParams",function($scope,$location,$routeParams){
    $scope.index = $routeParams.index
}]);
app.controller('detail',['$scope','$location',"$routeParams",function($scope,$location,$routeParams){
    $scope.index = $routeParams.index
}]);
app.controller('myCtrl',['$scope','$location',"$routeParams",'$http',function($scope,$location,$routeParams,$http){
    $http({
        url: './kaifanla.json',
        type : 'get'
    }).then(function(data){
        $scope.data = data.data;
    });
    $scope.turn = function(p){
        $location.path(p);
        $scope.time = new Date()
    }
}]);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl : 'tpl/start.html',
        controller: 'start'
    }).when('/main',{
        templateUrl : 'tpl/main.html',
        controller : 'main'
    }).when('/myorder/:index/:n/:tel',{
        templateUrl : 'tpl/myorder.html',
        controller : 'myorder'
    }).when('/order/:index',{
        templateUrl : 'tpl/order.html',
        controller : 'order'
    }).when('/detail/:index',{
        templateUrl : 'tpl/detail.html',
        controller : 'detail'
    }).otherwise({redirectTo:'/start'})
}])