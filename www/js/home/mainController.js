angular.module('eventum.controllers', ['eventum.services']);
angular.module('eventum.controllers')
.controller('MainController',['$scope', '$rootScope', '$state', 'SecurityService', '$ionicModal', function($scope, $rootScope, $state, SecurityService, $ionicModal) {
  	

  	$scope.checkAuthentification = function(){
  		$scope.newUser = {};
  		$rootScope.isLogged = false;
  		if(SecurityService.getToken() != undefined){
  			$rootScope.isLogged = true;
  		}
  	};

	

	$scope.login = function() {
             if ($scope.newUser.email != undefined && $scope.newUser.password != undefined) {
                 LoginResource($scope.newUser).login($scope.newUser,
                     function (data) {
                         SecurityService.initSession(data);
                         if(SecurityService.getToken() != undefined){
                             $rootScope.isLogged = true;
                         }else{
                             console.log("Fired because of token undefined");
                             $scope.error = "Invalid email or password";
                         }
                     },
                     function( error ){
                         console.log("Fired because of server error");
                         $scope.error = "Invalid email or password";
                     }
                 );
             }
         };
    /*$scope.login = function(userId){
      
      $rootScope.isLogged = true;
      $rootScope.user = Users.get(userId);
      $rootScope.userId = userId;
      $state.go("tab.dash");
    };

    $ionicModal.fromTemplateUrl('register.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openRegister = function() {
      $scope.modal.show();
    };

    $scope.register = function () {
      UserService.save($scope.user);
    };
	*/

   /* $scope.login = function(){
      
      $rootScope.isLogged = true;
      UserService.get({ name: $scope.user.name, password: $scope.user.password}).$promise.then(
        function(user){
          $rootScope.user = user;
           if($rootScope.user.id!=undefined){
              $rootScope.userId = $rootScope.user.id;
              $state.go("tab.dash");
            } 
        }
      );
      
    };*/

}]);