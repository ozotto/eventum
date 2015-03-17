angular.module('eventum.services')
    .factory('SecurityService', function () {
  	return function(){
  	var userName, password;
        this.initSession = function(response) {
        	sessionStorage.setItem('token', response.authctoken);
        };
             this.endSession = function() {
                 sessionStorage.removeItem('token');
             };
             this.getToken = function() {
                 return sessionStorage.getItem('token');
             };
             this.secureRequest = function(requestConfig) {
                 var token = this.getToken();
                 if(token != null && token != '' && token != 'undefined') {
                     requestConfig.headers['Authorization'] = 'Token ' + token;
                 }
             };
    }
})
.factory('LoginResource',
   [ '$resource',
     function($resource) {
     return function(newUser) {
       return $resource('https://54.149.200.84:8443/rs/api', {}, {
         login: {
             url :'/rs/api/private/:dest',
             method: 'POST',
             params: {dest:"login"},//"authc"},
           headers:{"Authorization": "Basic " + btoa(newUser.email + ":" + newUser.password)} }
       });
     }}
   ])

.factory('LogoutResource', ['$resource', function($resource) {
       return $resource('/rs/api/private/:dest', {}, {
         logout: {method: 'POST', params: {dest:"logout"}}
       });
}]);