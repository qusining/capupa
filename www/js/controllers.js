angular.module('app.controllers', [])
  
.controller('cAPUPACtrl', function($scope) {

})
   
.controller('discoverChallengeCtrl', function($scope) {

})
   
.controller('discoverChallenge2Ctrl', function($scope) {

})
   
.controller('myChallengeCtrl', function($scope) {

})
   
.controller('meCtrl', function($scope) {

})
   
.controller('me2Ctrl', function($scope) {

})
   
.controller('myChallenge2Ctrl', function($scope) {

})
   
.controller('myChallenge3Ctrl', function($scope) {

})
   
.controller('myChallenge4Ctrl', function($scope) {

})
   
.controller('myChallengeProposerCtrl', function($scope) {

})
   
.controller('myChallengeProposer2Ctrl', function($scope) {

})
   
.controller('myChallengeProposer3Ctrl', function($scope) {

})
   
.controller('myChallengeProposer4Ctrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {
	var ref = new Firebase("https//papsy-d9aa0.firebaseio.com");
	  $scope.addUser = function(){
	  	console.log(this.email);
	  	console.log(this.password);

	  	firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	  };
})
 