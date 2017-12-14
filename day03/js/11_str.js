var app = angular.module('myApp', ['ng']);
//创建一个$Test服务器
app.service('$Test',function(){
   this.test=function(){
       console.log('it is a test');
   }
});

//推断式依赖注入——缺点：压缩后无法使用
//app.controller('myCtrl', function ($scope,$Test) {
//    $Test.test();
//});

//标记式依赖注入
var CtrlFunc=function($scope,$Test){
    $Test.test();
};
//对依赖做标记
CtrlFunc.$inject=['$scope','$Test'];
app.controller('myCtrl',CtrlFunc);
