var input = document.getElementById("todoInput");
var list = document.getElementById("list");

function add (){
    if (input.value !== ""){ 
        list.innerHTML +=  `<li>${input.value} <button id="crosbtn" onclick="remove(this)">   <img id="crosimg" src="https://clipart-library.com/images/gie5B478T.png" alt="Image Placeholder">
 
        </button></li>`;
        input.value = "";
    } else {
        alert("Please enter a Task");
    }
}

function remove(element){
    element.parentNode.remove();
} 

function clearAll() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
