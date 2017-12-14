//创建模块
var app=angular.module('myApp',['ng']);
//创建自定义服务(采用行内式依赖注入 )
app.factory('$heartBeat',['$interval',function($interval){
    return{
        startBeat:function() {
            promise=$interval(function(){
                console.log('in heart beat...')
            },500);
        },
        stopBeat:function(){
            $interval.cancel(promise);
        }
    }
}]);
//创建控制器——行内式依赖注入
app.controller('myCtrl',['$scope','$injector',function($scope,$injector){
    //get方法可以用来得到名称为$heartBeat的服务实例
    customService=$injector.get('$heartBeat');
    $scope.start=function(){
        customService.startBeat();
    };
    $scope.stop=function(){
        customService.stopBeat();
    }
}]);
