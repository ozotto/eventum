angular.module('eventum.services', [ 'ionic', 'ngCordova', 'ngResource' ])
/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [{
    id: 0,
    name: 'oscar',
    mail: 'oscar@gmail.com',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    groups : [
       {
          id: 0,
          name: 'Family',
          image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
          users : [
            { id : 0},
            { id : 3}
          ]
      },
      {
        id: 1,
        name: 'Work',
        image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 2}
          ]
      },
      {
        id: 2,
        name: 'Studies',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 4}
          ]
      }
    ]
  }, {
    id: 1,
    name: 'ahmed',
    mail: 'ahmed@gmail.com',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    groups :[
      {
        id: 0,
        name: 'Work',
        image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 2}
          ]
      },
      {
        id: 1,
        name: 'Studies',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 4}
          ]
      }
    ]
  }, {
    id: 2,
    name: 'diana',
    mail: 'diana@gmail.com',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg',
    groups : [
      {
        id: 0,
        name: 'Work',
        image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 2}
          ]
      }
    ]
  }, {
    id: 3,
    name: 'tito',
    mail: 'tito@gmail.com',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    groups : [
       {
          id: 0,
          name: 'Family',
          image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
          users : [
            { id : 0},
            { id : 3}
          ]
      }]
  }, {
    id: 4,
    name: 'yassine',
    mail: 'yassine@gmail.com',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
    groups : [
      {
        id: 0,
        name: 'Studies',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
        users : [
            { id : 0},
            { id : 1},
            { id : 4}
          ]
      }
    ]
  }];


  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      // Simple index lookup
      return users[userId];
    },
    getGroup: function(userId, groupId) {
      return users[userId].groups[groupId];
    }
  }
})

.factory('Groups', function() {

  var groups = [
  {
    id: 0,
    name: 'Family',
    description: 'members of my family',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  },
  {
    id: 1,
    name: 'Work',
    description: 'coworkers',
    image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  },
  {
    id: 2,
    name: 'Studies',
    description: 'classmates',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  },

  ];

  return {
    all: function() {
      return groups;
    },
    get: function(groupId) {
      return groups[groupId];
    }
  }

});
