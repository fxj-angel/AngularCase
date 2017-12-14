var app = angular.module('myApp', ['ng']);
//创建服务
app.factory('$Show',function(){
    return{
        show:function(){
            alert('show sth success');
        }
    }
});
app.controller('myCtrl', function ($scope,$Show) {
    $scope.handleClick=function(){
        $Show.show();
    }
});
