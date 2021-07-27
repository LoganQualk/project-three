var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("input");
var parentDiv = document.querySelector("#parent-div")
var signUpButton = document.querySelector("#sign-up");
var signInButton = document.querySelector("#sign-in");

function testButton() {
    if (input.value === '' || input.value == null || input.value == "undefined") {
        return false;
        // https://stackoverflow.com/questions/43074658/stop-form-whitespace-when-user-pressing-submit
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    p = input.value;
    div.append("To-Do: ", p);
    parentDiv.appendChild(div);
    parentDiv.insertBefore(div, parentDiv.firstChild);
}

submitButton.addEventListener("click", testButton)
input.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        testButton();
    }
}, false);