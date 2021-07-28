var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("input");
var parentUl = document.querySelector("#parent-ul")
var signUpButton = document.querySelector("#sign-up");
var signInButton = document.querySelector("#sign-in");
let myStorage = window.localStorage;
let todos = [];
let i = 0;
let j = 0; // user id

function submitToDo() {
    if (input.value === '' || input.value == null || input.value == "undefined") {
        return false;
        // https://stackoverflow.com/questions/43074658/stop-form-whitespace-when-user-pressing-submit
    }
    let li = document.createElement("li");
    let p = document.createElement("p");
    let butt = document.createElement("button");
    p = input.value;
    butt.innerText = "Mark as complete!";
    butt.setAttribute("class", "mark-complete-button");
    // butt.setAttribute("id", i);
    butt.dataset.id = i;
    li.append("To-Do: ", p, butt);
    // div.setAttribute("id", i);
    li.dataset.id = i;
    i++;
    parentUl.appendChild(li);
    parentUl.insertBefore(li, parentUl.firstChild);
    butt.addEventListener("click", markAsComplete);
    butt.style.marginLeft = "1rem";
    myStorage.setItem(p, user[j]);
}

// TO DO
// Maybe make the to-do list submission require a user to submit it under instead of a "log-in" system

function markAsComplete() {
    this.parentElement.style.textDecoration = "line-through";
    // this.parentElement.remove();
}

submitButton.addEventListener("click", submitToDo);
input.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        submitToDo();
    }
}, false);