var main = document.getElementById('main');
var done = document.getElementById('done');
var inputShowing = false;
var input = document.getElementById('input');
var inputFeild = document.getElementById('input-feild');
var addBtn = document.getElementById('add');
var ul = document.getElementById('ul');
var completedUl = document.getElementById('CompUl');
var li;
var liText;
var clonedLity; 

function showInput() {
    if (inputShowing === false) {
        input.style.display = 'flex';
        addBtn.style.display = 'none';
    } else {
        input.style.display = 'none';
        addBtn.style.display = 'flex';
    }
}

function addTask() {
    li = document.createElement('li');
    li.setAttribute("onclick", "doneTask(this)");
    ul.appendChild(li);
    liText = document.createTextNode(inputFeild.value);
    li.appendChild(liText);
    var btnDiv = document.createElement('div');
    btnDiv.setAttribute("class", "btn");
    li.appendChild(btnDiv);
    var editBtn = document.createElement('button');
    editBtn.setAttribute("onclick", "changeTask(this)");
    var editBtnI = document.createElement('i');
    editBtnI.setAttribute("class", "fa fa-edit");
    editBtn.appendChild(editBtnI);
    btnDiv.appendChild(editBtn);
    var delBtn = document.createElement('button');
    delBtn.setAttribute("onclick", "delTask(this)");
    var delBtnI = document.createElement('i');
    delBtnI.setAttribute("class", "fa fa-trash");
    delBtn.appendChild(delBtnI);
    btnDiv.appendChild(delBtn);
    addBtn.style.display = 'flex';
    input.style.display = 'none';
    inputFeild.value = "";
}

function delTask(button) {
    var listItem = button.parentNode.parentNode;
    ul.removeChild(listItem);
}

function changeTask(button) {
    var listItem = button.parentNode.parentNode;
    liText = listItem.firstChild;
    input.style.display = 'flex';
    inputFeild.value = liText.nodeValue;
    addBtn.style.display = 'none';

    inputFeild.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            var updatedText = inputFeild.value;
            if (updatedText !== "") {
                liText.nodeValue = updatedText;
            }
            input.style.display = 'none';
            addBtn.style.display = 'flex';
            inputFeild.value = "";
        }
    });
}

function doneTask(lity) {
    if (lity.style.boxShadow == "none") {
        clonedLity = lity.cloneNode(true);
        lity.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.09)";
        lity.style.textDecoration = "line-through";
        lity.style.backgroundColor = "rgb(253, 253, 253)";
        completedUl.appendChild(clonedLity);
    } else {
        lity.style.textDecoration = "none";
        lity.style.boxShadow = "none";
        lity.style.backgroundColor = "white";
        completedUl.removeChild(clonedLity);
    }
}

function showDoneTask(){
if(main.style.display == "flex"){
    main.style.display = "none";
    done.style.display = "flex";
    document.getElementById("h1").textContent = "Completed Tasks";
}
else{
    main.style.display = "flex";
    done.style.display = "none";
    document.getElementById("h1").textContent = "Azaan To-Do List";
}
}