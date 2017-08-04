console.log("i'm loading");

let form = $("#form");
let language = $("#language option:selected"); 
let rating = $("#rating option:selected");
let userName = $("#userName");



//write event handler for submit button that pushes form results into the db using post request in controllers.
$(form).on("submit", function handleFormSubmit(event){
	event.preventDefault();

	//creates an object which contains form data
	let newUser = {
		username: userName.val().trim(),
		language: language.text(),
		rating: rating.text()
	};

	$.post('/questions', newUser)
	 .done(console.log)
	 .fail(console.error);

	let jsonUser = JSON.stringify(newUser);
	console.log(jsonUser)
	console.log(JSON.stringify(newUser));
});

