angular.module('eventum.controllers')
.controller('eventDetailCtrl',['$scope', '$stateParams', 'eventServices', function($scope, $stateParams, eventServices) {
  $scope.event = eventServices.get($stateParams.eventId);
}]);
