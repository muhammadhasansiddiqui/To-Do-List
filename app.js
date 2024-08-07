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
  limit,
  orderBy,
  startAt,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
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

// where("id", "<=",  10) ye q ma use kiya tha 

let getTodos = () => {
let q = query(collection(db, "todos"),orderBy("todo" )  );

  onSnapshot (q ,(Snapshot) => {
  console.log("🚀 ~ onSnapshot ~ Snapshot:", Snapshot);

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



let uploadBtn = document.getElementById("uploadBtn");

let uploadFile = ()=> {
let file = document.getElementById("file");

const storageRef = ref(storage, `images/${file.files[0].name}`);

const uploadTask = uploadBytesResumable(storageRef, file.files[0]);

uploadTask.on('state_changed', 
  (snapshot) => {
    
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);




}


uploadBtn && uploadBtn.addEventListener("click",uploadFile)



















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
