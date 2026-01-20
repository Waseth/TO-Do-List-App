const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const warning = document.getElementById("char-warning");
const maxLength = 30;


function addTask(){
    if(inputBox.value === ""){
        warning.textContent = "Please enter a text!";
        warning.style.display = "block";
    }
    else if(inputBox.value.length > maxLength){
        warning.textContent = `Task cannot be more than ${maxLength} characters!`
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    saveData();
    inputBox.value = "";

}

inputBox.addEventListener("input", () => {
  if (inputBox.value.length > maxLength) {
    warning.textContent = `Task cannot be more than ${maxLength} characters!`;
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
