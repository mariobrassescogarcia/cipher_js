


function caesarCipher (message, rule) {

	var array = message.split("");
	var array_numbers = [];
	var array_new_message = [];

	array.forEach(function(word){
   array_numbers.push(word.charCodeAt(0)-3);	
	});

	array_numbers.forEach(function(number){
		array_new_message.push(String.fromCharCode(number));

	});

	new_message = array_new_message.join();



return new_message;
}


var encrypted = caesarCipher("brutus");

console.log(encrypted);

