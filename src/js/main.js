var submitButton = document.querySelector("#submit-todo");
var input = document.querySelector("#to-do-item");
var userName = document.querySelector("#user-name");
var parentUl = document.querySelector("#parent-ul")
var signUpButton = document.querySelector("#sign-up");
var selectUser = document.querySelector("#select-user");
let myStorage = window.localStorage;
let todos = (myStorage.getItem("todos") !== null ? JSON.parse(myStorage.getItem("todos")) : []);
let i = 0;

window.onload = function () {
    if (myStorage.getItem("todos") !== null) {
        for (let i = 0; i < todos.length; i++) {
            let userid = todos[i].userid;
            if (!checkIfUserNameExists(userid)) {
                selectUser.options[selectUser.options.length] = new Option(userid, userid);
            }
        }
        showToDos();
    }
}

function createListItem() {
    if (input.value === '' || input.value == null || input.value == 'undefined') {
        return false;
    }
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
    p = temp.toDo;
    butt.innerText = "Mark as complete!";
    butt.setAttribute("class", "mark-complete-button");
    li.append("To Do: ", p, butt, "User: ", userName.value);
    li.dataset.id = i;
    parentUl.appendChild(li);
    parentUl.insertBefore(li, parentUl.firstChild);
    butt.addEventListener("click", markAsComplete);
    butt.style.marginLeft = "1rem";
    butt.style.marginRight = "1rem";
    if (!checkIfUserNameExists(userName.value)) {
        selectUser.options[selectUser.options.length] = new Option(userName.value, userName.value);
    }
    myStorage.setItem("todos", JSON.stringify(todos));
    input.value = null;
    userName.value = null;
    i++;
}

function checkIfUserNameExists(userName) {
    let options = Array.apply(null, selectUser.options).map((option) => option.value);
    return options.includes(userName);
}

function markAsComplete() {
    this.parentElement.style.textDecoration = "line-through";
    todos[this.parentElement.dataset.id].complete = true;
    // this.parentElement.remove();
}

function updateList() {
    while (parentUl.firstChild) {
        parentUl.removeChild(parentUl.lastChild);
    }
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].userid === selectUser.value) {
            let li = document.createElement("li");
            let p = document.createElement("p");
            let butt = document.createElement("button");
            let underUser = document.createElement("p");
            underUser = todos[i].userid;
            p = todos[i].toDo;
            butt.innerText = "Mark as complete!";
            butt.setAttribute("class", "mark-complete-button");
            li.append("To Do: ", p, butt, "User: ", underUser);
            li.dataset.id = i;
            parentUl.appendChild(li);
            parentUl.insertBefore(li, parentUl.firstChild);
            butt.addEventListener("click", markAsComplete);
            butt.style.marginLeft = "1rem";
            butt.style.marginRight = "1rem";
        }
    }
}

function showToDos() {
    let todos = myStorage.getItem("todos");
    todos = JSON.parse(todos);
    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let butt = document.createElement("button");
        let underUser = document.createElement("p");
        underUser = todos[i].userid;
        p = todos[i].toDo;
        butt.innerText = "Mark as complete!";
        butt.setAttribute("class", "mark-complete-button");
        li.append("To Do: ", p, butt, "User: ", underUser);
        li.dataset.id = i;
        parentUl.appendChild(li);
        parentUl.insertBefore(li, parentUl.firstChild);
        butt.addEventListener("click", markAsComplete);
        butt.style.marginLeft = "1rem";
        butt.style.marginRight = "1rem";
    }
}

selectUser.addEventListener("change", updateList);
submitButton.addEventListener("click", createListItem);
input.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        createListItem();
    }
}, false);
userName.addEventListener("keyup", function(e) {
    // https://www.tutorialspoint.com/javascript-submit-textbox-on-pressing-enter
    if (e.code === 'Enter') {
        e.preventDefault();
        createListItem();
    }
}, false);