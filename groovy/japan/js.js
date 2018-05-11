document.getElementById("btncont").disabled = true;
function password(){
	var passcode = document.getElementById("passwod").value;
	if(passcode == "53772380"){
		alert("Correct, please continue");
		document.getElementById("passwod").disabled = true;
		document.getElementById("submit").disabled = true;
		document.getElementById("btncont").disabled = false;
	}else {
		alert("Incorrect passcode");
	}
}
function cont(){
	alert("Proceeding...");
	document.getElementById("redirect").innerHTML = "redirecting in " + seconds + " seconds." ;
	window.open("externalfile:drive-1ba9fbf7bb2479e93f4d62250cc734ee60e8e155/root/Year 10/redirecting.html");
}
