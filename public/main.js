$(document).ready(function (){
// 0. Allow the user to authenticate w/ GitHub...
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

//DELCARING INIT, PASSING BLANK PARAM, STATEMENT
var init = () => alert('Is Firing');

/*

const logger = {
  on: true,
  log: function (message, params, ...args) {
    // do shit with stuff 
    // print to log file
    if (this.on) {
      console.log('is firing')
    } else {
      //
    }
  }
}*/

//write event handler for submit button that pushes form results into the db using post request in controllers.
$(form).on("submit", function handleFormSubmit(event){
  event.preventDefault();
  init();

<!-- Start Firebase -->
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

 // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: 'profile.html',
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

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      $.post('/users', {uid: firebaseUser.uid})

      console.log(firebaseUser);
      // User model info
      const {uid, photoUrl, email} = firebaseUser;

      // does this uid exist in db
      
      //userId.attr(firebaseUser.displayName);
      console.log(firebaseUser.displayName);
      console.log(firebaseUser.photoURL);
      console.log(firebaseUser.email);
    } else {
      console.log('not logged in');
    };
  });
<!-- End Firebase -->


<!-- Front-end user info -->
  let form = $("#form");
  let language = $("#language option:selected"); 
  let rating = $("#rating option:selected");
  // 0a. Retrieve user.id 
  let userName = $("#userName");
<!-- End Front-end user info -->
  
  
  // 0. Fill out implementation details below
  // 0b. Check if your DB contains a user WHERE github_id === user.github_id
  $.ajax({
    // Choose a better endpoint_name later damn it--<endpoint> runs SQL query to check if there's a user w/ github_id already in the DB
    url: '/api/<endpoint_name>',
    method: 'GET',
    // Check this property name
    data: { github_id }
  }).done(function (queryResult) {
      // queryResult is either null, OR some user
      if (queryResult == undefined) {
        // Create a new user; creates an object which contains form data
        let newUser = {
          username: userName.val().trim(),
          language: language.text(),
          rating: rating.text()
        };

        let jsonUser = JSON.stringify(newUser);
        console.log(jsonUser)
        console.log(JSON.stringify(newUser));

        // POST to the appropriate.<create_user> route
        $.post('/questions', newUser)
         .done(console.log)
         .fail(console.error);
      } else {
        // Move on to language selection page

      }
    })

  

  

  
});


  


  
  
});
  

// CLIENT-SIDE
  // User/Client logs in via GitHub
  // -> 'user' object
// 

 

// // 1. Retrieving and POST/PUT-ing info to server/db
//   var language = document.getElementById('language');
//   var rating = document.getElementById('rating');

//   document.querySelector('#submit').addEventListener('click', function (e) {
//       e.preventDefault();
//   });
