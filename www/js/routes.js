angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cAPUPA', {
    url: '/page2',
    templateUrl: 'templates/cAPUPA.html',
    controller: 'cAPUPACtrl'
  })

  .state('tabsController.discoverChallenge', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/discoverChallenge.html',
        controller: 'discoverChallengeCtrl'
      }
    }
  })

  .state('tabsController.discoverChallenge2', {
    url: '/acceptChallenge',
    views: {
      'tab3': {
        templateUrl: 'templates/discoverChallenge2.html',
        controller: 'discoverChallenge2Ctrl'
      }
    }
  })

  .state('tabsController.myChallenge', {
    url: '/upgradeMyChallenge',
    views: {
      'tab2': {
        templateUrl: 'templates/myChallenge.html',
        controller: 'myChallengeCtrl'
      }
    }
  })

  .state('tabsController.me', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/me.html',
        controller: 'meCtrl'
      }
    }
  })

  .state('tabsController.me2', {
    url: '/MyRewards',
    views: {
      'tab5': {
        templateUrl: 'templates/me2.html',
        controller: 'me2Ctrl'
      }
    }
  })

  .state('tabsController.myChallenge2', {
    url: '/MyParticipatedChallengeCurrent',
    views: {
      'tab2': {
        templateUrl: 'templates/myChallenge2.html',
        controller: 'myChallenge2Ctrl'
      }
    }
  })

  .state('tabsController.myChallenge3', {
    url: '/MyParticipatedChallengePast',
    views: {
      'tab2': {
        templateUrl: 'templates/myChallenge3.html',
        controller: 'myChallenge3Ctrl'
      }
    }
  })

  .state('tabsController.myChallenge4', {
    url: '/shareChallenge',
    views: {
      'tab2': {
        templateUrl: 'templates/myChallenge4.html',
        controller: 'myChallenge4Ctrl'
      }
    }
  })

  .state('myChallengeProposer', {
    url: '/MyChallengeProposer',
    templateUrl: 'templates/myChallengeProposer.html',
    controller: 'myChallengeProposerCtrl'
  })

  .state('myChallengeProposer2', {
    url: '/ListChallengeToValide',
    templateUrl: 'templates/myChallengeProposer2.html',
    controller: 'myChallengeProposer2Ctrl'
  })

  .state('myChallengeProposer3', {
    url: '/validateOrRejectChallenger',
    templateUrl: 'templates/myChallengeProposer3.html',
    controller: 'myChallengeProposer3Ctrl'
  })

  .state('myChallengeProposer4', {
    url: '/proposeNewChallenge',
    templateUrl: 'templates/myChallengeProposer4.html',
    controller: 'myChallengeProposer4Ctrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signUp',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});