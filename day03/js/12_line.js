var app = angular.module('myApp', ['ng']);

//创建服务
app.factory('$student',function(){
    return{
        checkScore:function(){
            return 80;
        }
    }
});
//推断式依赖注入
//app.controller('myCtrl', function ($scope,$student) {
//    $scope.handleClick=function(){
//        $student.checkScore();
//    }
//});

//行内是依赖注入
app.controller('myCtrl',["$scope","$student",function($scope,$student){
    $scope.handleClick=function(){
        console.log($student.checkScore());
    }
}]);













