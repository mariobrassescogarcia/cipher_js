


function caesarCipher (message, rule) {

	var array = message.split("");
	var array_numbers = [];
	var array_new_message = [];
	var encrypted_number = rule;

	array.forEach(function(letter){
		if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
			
			{array_numbers.push(letter.charCodeAt(0)- encrypted_number);}
		} else {array_numbers.push(letter);
		}		
	});

	array_numbers.forEach(function(number){
		array_new_message.push(String.fromCharCode(number));

	});

	new_message = array_new_message.join();



return new_message;
}


var encrypted = caesarCipher("Et tu, brute?", 3);

console.log(encrypted);

