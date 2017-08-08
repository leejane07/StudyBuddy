$(document).ready(function (){
  // var sequelize = require("../connection.js");
  console.log("Loaded main js");

//Front-end user info
  var form = $("#form");
  var language = $("#language option:selected"); 
  var userName = $("#userName");

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAsky70TgdY1TzyQu6T_Ptu3cXA9dmPZ78",
   authDomain: "authorizationtest-c3d2c.firebaseapp.com",
   databaseURL: "https://authorizationtest-c3d2c.firebaseio.com",
   projectId: "authorizationtest-c3d2c",
   storageBucket: "authorizationtest-c3d2c.appspot.com",
   messagingSenderId: "310059376180"
 };
 firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log("onAuthStateChanged function has been triggered")
    if (firebaseUser) {
      
      var user ={ 
        uid: firebaseUser.uid,
        username: firebaseUser.displayName,
        email: firebaseUser.email
      };

      $.post('/users', user, function(response){
        console.log(response);
      })

      console.log(firebaseUser);

      // does this uid exist in db
      
      //userId.attr(firebaseUser.displayName);
      console.log(firebaseUser.uid);
      console.log(firebaseUser.displayName);
      console.log(firebaseUser.photoURL);
      console.log(firebaseUser.email);
    } else {
      console.log('not logged in');
    };
    
});

 // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: 'questions.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

// // Real time check against user authentication
//   firebase.auth().onAuthStateChanged(function(user, error) {
//     if (error) {
//       console.log(error);
//     }
//     if (user) {
//       console.log("Logged in")
//       console.log(user);
//     } else {
//       console.log("Not logged in");
//       window.location = "/"
//     }
//   })

//   $("#log-out").on("click", function() {
//     firebase.auth().signOut();
//   })

  

  
// <!-- End Firebase -->



 
$.ajax({
    // GET request to users endpoint
    url: '/api/users',
    method: 'GET',
    // Check this property name
    data: user.uid
  }).done(function (queryResult) {
      // queryResult is either null, OR some user
      if (queryResult == undefined) {
        // Create a new user; creates an object which contains form data
        let newUser = {
          username: userName.val().trim(),
          language: language.text(),
          rating: rating.text()
        };
        console.log(newUser);
        // let jsonUser = JSON.stringify(newUser);
        // console.log(jsonUser)
        // console.log(JSON.stringify(newUser));

        // POST to the appropriate.<create_user> route
        $.post('/users', newUser)
         .done(console.log)
         .fail(console.error);
      } else {
        // Move on to language selection page

      }
    })
    
 }); 