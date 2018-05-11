document.getElementById("btncont").disabled = true;
function password(){
	var passcode = document.getElementById("passwod").value;
	if(passcode == "53772380"){
		alert("Correct, please continue");
		document.getElementById("passwod").disabled = true;
		document.getElementById("submit").disabled = true;
		document.getElementById("btncont").disabled = false;
	}else{
		alert("Incorrect passcode");
	}
}
function cont(){
	alert("Proceeding...");
	document.getElementById("btncont").disabled = true;
	window.open("https://www.google.com.au");
}
