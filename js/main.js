var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("input");
var parentDiv = document.querySelector("#parent-div")

function testButton() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p = input.value;
    div.append("To-Do: ", p);
    parentDiv.appendChild(div);
    parentDiv.insertBefore(div, parentDiv.firstChild);
}

submitButton.addEventListener("click", testButton)
// submitButton.addEventListener("keyup", function(e) {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         testButton();
        
//     }
// }, false);