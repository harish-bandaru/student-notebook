const user = document.getElementById("regForm");
const note = document.getElementById("noteForm");
if(user) user.addEventListener('submit', userfunction);
if(note) note.addEventListener('submit', notefunction);

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

function userFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('passwd').value;
    const Userl=new User(username,password);
    console.log(Userl);
}
