$(document).ready(function (){
  console.log("Loaded main js");
// 0. Allow the user to authenticate w/ GitHub...
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered


// const logger = {
//   on: true,
//   log: function (message, params, ...args) {
//     // do shit with stuff 
//     // print to log file
//     if (this.on) {
//       console.log('is firing')
//     } else {
//       //
//     }
//   }
// }
//Front-end user info -->
  var form = $("#form");
  var language = $("#language option:selected"); 
  // 0a. Retrieve user.id 
  var userName = $("#userName");

//End Front-end user info

// <!-- Start Firebase
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
     // User object and fields
     var user ={ 
       uid: firebaseUser.uid,
       username: firebaseUser.displayName,
       email: firebaseUser.email
     };

     // Post user object to db
     $.post('/users', user, function(response){
       console.log(response);
     })
     
     console.log(firebaseUser.displayName);
     console.log(firebaseUser.photoURL);
     console.log(firebaseUser.email);
     console.log(firebaseUser);
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


/*  // 0b. Check if your DB contains a user WHERE github_id === user.github_id
function getUser(){
 $.ajax({
   // GET request to users endpoint
   url: '/users',
   method: 'GET',
   // Check this property name
   data: user.uid
 }).done(function (queryResult) {
 console.log("qhlekhlkjahldkfjhdalkfdjhakdljhadfalkjfhalkfjahflkajhfalkjfhalkf")
     // queryResult validation
     if (queryResult == undefined) {
       // Creates an object which contains form data
       let newUser = {
         username: userName.val().trim(),
         language: language.text(),
         rating: rating.text()
       };

       let jsonUser = JSON.stringify(newUser);
       console.log(jsonUser)
       console.log(JSON.stringify(newUser));

       // Post user object to db
       $.post('/users', user, function(response){
         console.log(response);
       })
     } else {
       // Move on to language selection page
       
     }
   })
 };  
getUser();
 }); */

// CLIENT-SIDE
  // User/Client logs in via GitHub
  // -> 'user' object
// 

 

// // 1. Retrieving and POST/PUT-ing info to server/db
//   var language = document.getElementById('language');
//   var rating = document.getElementById('rating');

//   document.querySelector('#submit').addEventListener('click', function (e) {
//       e.preventDefault();
//  
 });
