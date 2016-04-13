

function caesarCipher (message, rule) {

	var new_message = "";
	var encryption_rule = rule  || -3;


	for (var i = 0; i < message.length ; i++) {

		if ( (message[i] >= "A" && message[i] <= "Z") || (message[i] >= "a" && message[i] <= "z")){
			var letter = message.charCodeAt(i) + encryption_rule;
			new_message += String.fromCharCode(letter);
		}

		else{
			new_message += message[i];
		}

	}
	return new_message;
	}


var encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);



