const login = document.getElementById("loginForm");
const register = document.getElementById("regForm");
const note = document.getElementById("noteForm")

if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('passwd').value;
    class User{
        constructor(username,password)
        {
            this.uname=username;
            this.pword=password;
        }
    getuname(){
        return this.uname;
    }
    setuname(newusername){
        this.uname = username;
    }
    getpword(){
        return this.pword;
    }
    setpword(newpassword){
        this.pword = password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);

}


function registerpageFunction(e)
{
    e.preventDefault()
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('passwd').value;

    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(fname,lname,email,password);
    console.log(user1);
}


function notepageFunction(e)
{
    e.preventDefault();
    let note=document.getElementById('note').value;

    class User{
        constructor(note)
        {
            this.tnotes=note;
        }
    
    
    gettnotes(){
        return this.tnotes;
    }
    settnotes(note){
        this.tnotes = note;
    }
   

    }

    const Userl=new User(note);
    console.log(Userl);

}


//--------------------------------------------------------------------------------------------
const usersBtn = document.getElementById("users-btn");
document.getElementById("users-btn").addEventListener('click', getUsers);

function getUsers() {
  //e.preventDefault();
  if(getUsers.innerText === "") {
    fetch('http://localhost:3000/users')
    .then((res) => res.json()) //JSON.parse(res)
    .then((data) => {
        let ul = document.getElementById("allUsers");
        data.forEach((user) => {
            let li = document.createElement('li');
            let text = document.createTextNode(user.userName);
            li.appendChild(text);
        })

    .catch(err => {
      console.log(err);
    })
    })
}}
