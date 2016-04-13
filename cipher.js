

function caesarCipher (message, rule) {

	var new_message = "";
	var encryption_rule = rule  || -3;


	for (var i = 0; i < message.length ; i++) {

		if (message[i] >= "A" && message[i] <= "Z") {
			var number = message.charCodeAt(i) + encryption_rule;
				while(number < "A".charCodeAt(0)){
					number = number + 26;
				}

				while(number > "Z".charCodeAt(0)){
					number = number - 26;
				}
				new_message += String.fromCharCode(number);

		} 

		else if (message[i] >= "a" && message[i] <= "z") {
			var number = message.charCodeAt(i) + encryption_rule;
				while(number < "a".charCodeAt(0)){
					number = number + 26;
				}

				while(number > "z".charCodeAt(0)){
					number = number - 26;
				}
				new_message += String.fromCharCode(number);
		} 

		else {
			new_message += message[i];
		}

	}
	return new_message;
	}


var encrypted = caesarCipher("Et tu, brute?", 300);

console.log(encrypted);



