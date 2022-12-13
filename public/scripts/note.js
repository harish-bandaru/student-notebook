getNotes()

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

  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

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