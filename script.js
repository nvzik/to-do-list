const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const taskCounter = document.getElementById("task-counter")


function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    showTask();
}

function checkStatus(){
    let checked = document.getElementsByClassName("checked");
    let num = listContainer.childElementCount - checked.length;
    taskCounter.innerHTML = "Active tasks: " + num;
}


listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
        showTask();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
        showTask();
    }
}, false);


function deleteAll(){
    localStorage.removeItem("data", listContainer.innerHTML);
    showTask();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    checkStatus();
}

showTask()
