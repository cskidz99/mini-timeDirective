angular.module('timeApp').directive('showTime',function(){
  return {
    restrict: 'E',
    template: '<div>Hello {{title}} {{dName}}. The current time is {{time}} </div>',
    scope: {
      dName: "=aname",
      title: "@title"
    },
    link: function(scope,element,attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    },
    controller: function($scope){

    }
  }
})
