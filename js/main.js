var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("#to-do-item");
var userName = document.querySelector("#user-name");
var parentUl = document.querySelector("#parent-ul")
var signUpButton = document.querySelector("#sign-up");
var selectUser = document.querySelector("#select-user");
let myStorage = window.localStorage;
let todos = [];
let i = 0;
// let j = 0; // user id

// function submitToDo() {
//     if (input.value === '' || input.value == null || input.value == "undefined") {
//         return false;
//         // https://stackoverflow.com/questions/43074658/stop-form-whitespace-when-user-pressing-submit
//     }
//     let li = document.createElement("li");
//     let p = document.createElement("p");
//     let butt = document.createElement("button");
//     p = input.value;
//     butt.innerText = "Mark as complete!";
//     butt.setAttribute("class", "mark-complete-button");
//     // butt.setAttribute("id", i);
//     butt.dataset.id = i;
//     li.append("To-Do: ", p, butt);
//     // div.setAttribute("id", i);
//     li.dataset.id = i;
//     i++;
//     parentUl.appendChild(li);
//     parentUl.insertBefore(li, parentUl.firstChild);
//     butt.addEventListener("click", markAsComplete);
//     butt.style.marginLeft = "1rem";
//     myStorage.setItem(p, user[j]);
// }

// TO DO
// Maybe make the to-do list submission require a user to submit it under instead of a "log-in" system

function createListItem() {
    let newToDo = input.value;
    let addedToUser = userName.value;
    let temp = {
        id: i,
        userid: addedToUser,
        toDo: newToDo,
        complete: false,
    }
    todos.push(temp);
    let li = document.createElement("li");
    let p = document.createElement("p");
    let butt = document.createElement("button");
    p = todos[i].toDo;
    butt.innerText = "Mark as complete!";
    butt.setAttribute("class", "mark-complete-button");
    li.append("To Do: ", p, butt);
    li.dataset.id = i;
    parentUl.appendChild(li);
    parentUl.insertBefore(li, parentUl.firstChild);
    butt.addEventListener("click", markAsComplete);
    butt.style.marginLeft = "1rem";
    selectUser.options[selectUser.options.length] = new Option(userName.value, userName.value);
    i++;
}

function markAsComplete() {
    this.parentElement.style.textDecoration = "line-through";
    console.log(this.parentElement.dataset.id);
    console.log(todos[this.parentElement.dataset.id].complete);
    todos[this.parentElement.dataset.id].complete = true;
    console.log(todos[this.parentElement.dataset.id].complete);
    // this.parentElement.remove();
}

submitButton.addEventListener("click", createListItem);
input.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        submitToDo();
    }
}, false);