const addTask = document.querySelector("#add-task");
const addBtn = document.querySelector("#btn");
const taskContainer = document.querySelector(".task-container");



function addNewTask(event){
    event.preventDefault();
    if(addTask.value === ""){
        alert("Please input some task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-circle  circle"></i> ${addTask.value}`;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        li.appendChild(span);
        addTask.value = "";
    }
    saveData();
}


addBtn.addEventListener("click" ,addNewTask);
taskContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // console.log("Span clicked");
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML)
}
function showData(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
showData();

// addBtn.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.innerText = addTask.value;
//     taskContainer.appendChild(li);
// });

