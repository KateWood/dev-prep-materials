// document.getElementById("jumbo-message").innerHTML = "Yay Javascript!!";
// document.getElementById("jumbo-message").setAttribute("style", "color:red;")
//REFACTOR

var jumboH3 = document.getElementById("jumbo-message");

jumboH3.innerHTML = "Yay Javascript!!";
jumboH3.setAttribute("style", "color:red;")

document.getElementsByClassName("btn")[0].setAttribute("class", "btn btn-lg btn-success");
document.getElementsByClassName("btn")[1].addEventListener("click", makeBlue);

function makeBlue () {
	jumboH3.setAttribute("style", "color:blue;")
}

//document.getElementsByClassName("btn")[0].addEventListener("click", makeGreen);

function makeGreen () {
	jumboH3.setAttribute("style", "color:green;")
}

// REFACTOR

var buttons = document.getElementsByClassName("btn");

buttons[0].addEventListener("click", makeGreen);
var table = document.getElementById("wholeTable");

buttons[2].addEventListener("click", function() {
	
	var row = document.createElement("tr");
	var firstName = document.getElementById("firstNameInput").value;
	var lastName = document.getElementById("lastNameInput").value;
	row.innerHTML = "<td>"+firstName+"</td><td>"+lastName+"</td><td>France</td>";

	table.appendChild(row);
});




