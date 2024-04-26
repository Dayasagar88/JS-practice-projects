const notesContainer = document.querySelector(".notes-container");
// const writingArea = document.querySelector(".input-box");
const createBtn = document.querySelector(".createBtn");
const cleanBtn = document.querySelector(".cleanImg");
const deleteBtn = document.querySelector(".deleteImg");

function checkData(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
checkData();

let noteCount = 1;

function createNotes(){
    let inputBox = document.createElement("p");
    let cleanImg = document.createElement("img");
    let deleteImg = document.createElement("img");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.className = "input-box";
    cleanImg.src = "clean.png";
    cleanImg.className = "cleanImg";
    deleteImg.src = "dustbin.png";
    deleteImg.className = "deleteImg";
    notesContainer.appendChild(inputBox).append(cleanImg, deleteImg);
}

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


notesContainer.addEventListener("click", function(e){
    if(e.target.className === "deleteImg"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // else if(e.target.className === "cleanImg"){
    //     writingArea.textContent = "";
    // }

    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

createBtn.addEventListener("click", createNotes);


// function cleanNote(){
//     writingArea.textContent = "";
// }
// function deleteNote(){
//     notesContainer.removeChild(notesContainer.children[noteCount]);
//     noteCount--;
//     console.log(noteCount);
// }

// cleanBtn.addEventListener("click", cleanNote);
// deleteBtn.addEventListener("click", deleteNote);


// createBtn.addEventListener("click", () => {
//     createNotes();
//     noteCount++;
//     console.log(noteCount);
// });