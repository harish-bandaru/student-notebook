// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

//user constructor, get and set methods for users
function User(fname, lname, userName, password){
    this.fullName = `${fname} ${lname}`;
    this.userName = userName;
    this.password = password;
}
User.prototype.getFullName = function() {
    return this.fullName;
}
User.prototype.getUserName = function(){
    return this.userName;
}
User.prototype.getPassword = function(){
    return this.password;
}

User.prototype.setFullName = function(newFullName){
    this.fullName = newFullName;
}
User.prototype.setUserName = function(newUserName){
    this.userName = newUserName;
}
User.prototype.setPassword = function(newPassword){
    this.password = newPassword;
}

//Note constructor,  get and set methods for note
function Note(note){
    this.noteContent = note;
}
Note.prototype.getNoteContent = function(){
    return this.noteContent;
}

Note.prototype.getNoteContent = function(newNote){
    this.noteContent = newNote;
}


// Login functionality
const login = document.getElementById("loginForm");
if(login) login.addEventListener('submit',loginPageFunction)
function loginPageFunction(e){
    e.preventDefault();
    let uname=document.getElementById('username').value;
    let pword=document.getElementById('password').value;
    const user = new User('', '', uname, pword);
    console.log(user);
    console.log(fetchData("/user/login", user, "POST"));
    fetchData("/user/login", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
      console.log(`Error!!! ${err.message}`)
    }) 

    document.getElementById("loginForm").reset();
}

//Register functionality
const register = document.getElementById("registerForm");
if(register) register.addEventListener('submit',registerPageFunction)
function registerPageFunction(e){
    e.preventDefault();
    let firstName=document.getElementById('firstname').value;
    let lastName=document.getElementById('lastname').value;
    let userName=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    const user = new User(firstName, lastName, userName, password);
    console.log(user);
    fetchData("/user/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
      console.log(err);
    })
    document.getElementById("registerForm").reset();
    
}

//Note Functionality
const note = document.getElementById("noteForm");
if(note) note.addEventListener('submit',notePageFunction)
function notePageFunction(e){
    e.preventDefault();
    
    let notes = document.getElementById('note').value;
    let note = new Note(notes);
    let user = getCurrentUser();
    note.userID = user.userID;
    console.log(note);
    //getNotes()
    fetchData("/note/create", note, "POST")
    .then((data) => {
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
      console.log(err);
    })
    document.getElementById("noteForm").reset();
}


// logout event listener
let logout = document.getElementById("Logout");
if(logout) logout.addEventListener('click', removeCurrentUser);


// stateful mechanism for user
// setting up current user in local storage
function setCurrentUser(user) {
    console.log("adding ${user} to local storage");
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // getting current user function
  // FIX this next class
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  // logout function for current user
  function removeCurrentUser() {
    localStorage.removeItem('user');
    window.location.href = "login.html";
  }


function getNotes(){
  let user = getCurrentUser();
  fetchData("/note/", user, "POST")
  .then((data)=>{
      let ul=document.getElementById("notesList");
      //console.log(data)
      data.forEach((note)=>{
          let li=document.createElement('li');
          let text=document.createTextNode(note.noteContent);
          li.appendChild(text);
          ul.appendChild(li);
      })
  })
  .catch((err)=>console.log(`Error! ${err}`));
}
