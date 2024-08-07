import {
  doc,
  setDoc,
  db,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  serverTimestamp ,
  query, 
  where,
} from "./firebase.js";

let todo = document.getElementById("todoInput");
var list = document.getElementById("list");

let add = document.getElementById("add");

let addfOO = async () => {
  if (todo.value !== "") {
    //         list.innerHTML +=  `<li>${todo.value} <button id="crosbtn" onclick="remove(this)">   <img id="crosimg" src="https://clipart-library.com/images/gie5B478T.png" alt="Image Placeholder">
    //  </button></li>`;

    let ref = collection(db, "todos");
    await addDoc(ref, {
      date: new Date().toLocaleString(),
      todo: todo.value,
      id: 1,
      timestamp: serverTimestamp(),
    });
    console.log("todo added");
    todo.value = "";
  } else {
    alert("Please enter a Task");
  }
};

add && add.addEventListener("click", addfOO);

let crosbtn = document.getElementById("crosbtn");

// function remove(element){
//     element.parentNode.remove();
// }
// crosbtn && crosbtn.addEventListener("click" , remove)

// let clearbtn = document.getElementById("clearbtn");

// function clearAll() {
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
// }

// clearbtn && clearbtn.addEventListener("click", clearAll);

let getTodos = () => {
let q = query(collection(db, "todos") , where("id", "<=",  10));

  onSnapshot (q ,(Snapshot) => {
    list.innerHTML = "";
    Snapshot.docChanges().forEach((changes) => {
      console.log("🚀 ~ Snapshot.docChanges ~ changes:", changes.type);
    });

    Snapshot.forEach((doc) => {
      let { todo } = doc.data();

      list.innerHTML += `<li>${todo} <button id="crosbtn" onclick="delTodo('${doc.id}')">   <img id="crosimg" src="https://clipart-library.com/images/gie5B478T.png" alt="Image"> </button></li>`;
    });
  });
};
getTodos();

let delTodo = async (id) => {
  console.log("🚀 ~ delTodo ~ id:", id);
  await deleteDoc(doc(db, "todos", id));
  console.log("Todo Deleted");
};

window.delTodo = delTodo;

// let getTodos = async () => {
//     const ref = collection(db, "todos");
//     onSnapshot(ref, (doc) => {
//         doc.forEach((doc) => {
//         list.innerHTML += `<li>${doc.data().todo} <button id="crosbtn" onclick="remove(this)">   <img id="crosimg" src="https://clipart-library.com/images/gie5B478T.png" alt="Image">
//         </button></li>`;
//         })
//     })
// }
// getTodos()
