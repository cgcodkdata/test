var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var i = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
    input.value = "";
    addDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
 
 
li.forEach(function(li){
    addDeleteButton(li);
});

function addDeleteButton(li){
    i++;
    var btn = document.createElement("button");
    var btnId = "btn"+i;
    btn.appendChild(document.createTextNode("Delete"));
    btn.setAttribute("id", btnId );
    btn.setAttribute("onclick", "removeListItem('"+btnId+"')");
    li.addEventListener("click", function(){
        li.classList.toggle("done");
    });
    li.appendChild(btn);
}

function removeListItem(btnId){
    var btn = document.getElementById(btnId);
    ul.removeChild(btn.parentNode);
}

var h3 = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradientBody");


color1.addEventListener("input", changebg);
color2.addEventListener("input", changebg);

function changebg(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}