const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn =document.getElementsByTagName('button');


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !!");
    }
    else{
        // create new ele -> add input box val into it -> append in listContainer
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // addd cross icon after text to delete the text
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';  // after add remove from input box
    saveData();  // to save the data
}


// to delete the text
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// save the data after to refresh the page

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();