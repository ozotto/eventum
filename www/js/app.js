// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('eventum', [ 'eventum.services', 'eventum.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $compileProvider, $resourceProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-events': {
        templateUrl: 'templates/events/tab-events.html',
        controller: 'eventsCtrl'
      }
    }
  })
/*
  .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-events.html',
          controller: 'eventsCtrl'
        }
      }
    })*/
  .state('tab.event-detail', {
      url: '/events/:eventId',
      views: {
        'tab-events': {
          templateUrl: 'templates/events/event-detail.html',
          controller: 'eventDetailCtrl'
        }
      }
    })

  .state('tab.groups', {
      url: '/groups',
      views: {
        'tab-groups': {
          templateUrl: 'templates/groups/tab-groups.html',
          controller: 'groupsCtrl'
        }
      }
    })

  .state('tab.group-detail', {
      url: '/group/:groupId',
      views: {
        'tab-groups': {
          templateUrl: 'templates/groups/group-detail.html',
          controller: 'groupDetailCtrl'
        }
      }
  })


  .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/contacts/tab-contacts.html',
          controller: 'contactsCtrl'
        }
      }
    })


  .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-groups': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'friendDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/account/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

})
.run(function($rootScope) {
    $rootScope.isLogged = false;
    $rootScope.user = "";
    $rootScope.userId = "";
})
.factory('authHttpResponseInterceptor',
   [ '$q',
     '$rootScope',
     'SecurityService',
     function($q, $rootScope, SecurityService) {
         return {
             'request' : function(config) {
                 SecurityService.secureRequest(config);
                 return config || $q.when(config);
             },
             'response' : function(response) {
                 return response || $q.when(response);
             },
             'responseError' : function(rejection) {
                 /*if (rejection.data && rejection.data.message) {
                     MessageService.setMessages(rejection.data.message);
                 } else {
                     MessageService.setMessages(["Unexpected error from server."]);
                 }

                 if (rejection.status === 401) {
                     SecurityService.endSession();
                     $location.path('/login');
                     MessageService.setMessages(["Please, provide your credentials."]);
                 } else if (rejection.status == 400) {
                     console.log("[ERROR] Bad request response from the server.");
                 } else if (rejection.status == 500) {
                     console.log("[ERROR] Internal server error.");
                 } else {
                     console.log("[ERROR] Unexpected error from server.");
                 }*/
                 return $q.reject(rejection);
             }
         }
     }
   ])
   .config(
   [ '$httpProvider',
     function($httpProvider) {
         //Http Intercpetor to check auth failures for xhr requests
         $httpProvider.interceptors.push('authHttpResponseInterceptor');
     }
   ]);
