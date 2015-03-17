angular.module('eventum.controllers')
.controller('contactsCtrl',['$scope', function($scope) {

  $scope.test = "from Angular";
/*
  $scope.getContactList = function() {
    /*$cordovaContacts.find({filter: ''}).then(function(result) {
        $scope.contacts = result;
    }, function(error) {
        console.log("ERROR: " + error);
    });*/
	/*
  $scope.phoneContacts = [];
          function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
              var contact = contacts[i];
              $scope.phoneContacts.push(contact);
            }
          };
          function onError(contactError) {
            alert(contactError);
          };
          var options = {};
          options.multiple = true;
          $cordovaContacts.find(options).then(onSuccess, onError);

  };
*/


}]);