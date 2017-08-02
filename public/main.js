// 0. Allow the user to authenticate w/ GitHub
  // 0a. Retrieve user.github_id (or whatever)
  // 0b. Check if your DB contains a user WHERE github_id === user.github_id
    // if true:
      // Do nothing, simply proceed to next page
    // else
      // Create a new user object in the db using the GitHub ID
      // Then, move on to language selection form

// 1. Retrieving and POST/PUT-ing info to server/db
  var language = document.getElementById('language');
  var rating = document.getElementById('rating');

  document.querySelector('#submit').addEventListener('click', function (e) {
      e.preventDefault();

      
  });
