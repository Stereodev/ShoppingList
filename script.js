var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var list = document.querySelectorAll("li");

function checkList() {
	var list = document.querySelectorAll("li");
	return list
}

function inputLength() {
	return input.value.length;
}

function liLength() {
	return checkList().length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "Delete";
	input.value = "";

	checkListEvent();
	buttonListElement();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKey(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function checkListEvent() {
	for (i = 0; i < checkList().length; i++) {
		checkList()[i].addEventListener("click", changeClass)
	}
}

function changeClass() {
	this.classList.toggle("done");
}

function buttonListElement() {
	var button = document.querySelectorAll('li button');
	for (i = 0; i < button.length; i++) {
		button[i].addEventListener('click', clearElement)
	}
}

function clearElement() {
	for (var i = 0; i < checkList().length; i++) {
		this.parentNode.remove()
	}
}

buttonListElement();

checkListEvent();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKey);