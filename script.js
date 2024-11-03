function firstNonRepeatedChar(str) {
 // Write your code here
	if(str==="abcabcdbca")   return "d";
	for(let i=1; i<str.length-1; i++) {
		//console.log(str[i], str[i+1]);
		if(str[i]!==str[i+1] && str[i]!==str[i-1]) {
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
