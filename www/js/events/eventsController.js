angular.module('eventum.controllers')
.controller('eventsCtrl',['$scope', 'eventServices', '$ionicModal', function($scope, eventServices, $ionicModal) {
  
  $scope.events = eventServices.all();

  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.date = new Date();

  $scope.remove = function(event) {
    eventServices.remove(event);
  }
  
}]);