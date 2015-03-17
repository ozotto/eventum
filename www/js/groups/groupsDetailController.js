
angular.module('eventum.controllers')
.controller('groupDetailCtrl', ['$scope', '$rootScope', '$stateParams', 'Users', function($scope, $rootScope, $stateParams, Users) {
  
  	$scope.users = Users.all();
  	$scope.group = Users.getGroup($rootScope.userId,$stateParams.groupId);
  	$scope.userInGroup = [];

  	angular.forEach($scope.users, function (user) {
  		angular.forEach($scope.group.users, function(inGroup) {
  			if(user.id == inGroup.id){
  				$scope.userInGroup.push(user);
  			}
  		});
  	});

}]);