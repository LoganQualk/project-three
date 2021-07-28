var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("input");
var parentDiv = document.querySelector("#parent-div")
var signUpButton = document.querySelector("#sign-up");
var signInButton = document.querySelector("#sign-in");
let i = 0;

function testButton() {
    if (input.value === '' || input.value == null || input.value == "undefined") {
        return false;
        // https://stackoverflow.com/questions/43074658/stop-form-whitespace-when-user-pressing-submit
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let butt = document.createElement("button");
    p = input.value;
    butt.innerText = "delete to-do";
    butt.setAttribute("id", i);
    i++;
    div.append("To-Do: ", p, butt);
    div.setAttribute("id", i);
    parentDiv.appendChild(div);
    parentDiv.insertBefore(div, parentDiv.firstChild);
}

function deleteToDo() {
    
}

submitButton.addEventListener("click", testButton);
input.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        testButton();
    }
}, false);
