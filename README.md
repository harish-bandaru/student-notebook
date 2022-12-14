# student-notebook
This is a project to register, login and save notes.

**Introduction of the project:**
1. This project is used to take notes by each user.
2. Each user of this app can register/login with the details to start creating the notes. [New users should register to Login]
3. Each Note is linked with the user using the userId.
4. Only one user can create one note.
5. All the user specific exisitng notes will be fetched and displayed in a scrollable list on notes page so user can review.
6. The new note created is also fetched and displayed automatically.
7. If user is first time creating notes then the list in notes page will be empty and gets updated once the first note is created.


The below screenshot is the ER Diagram of this project.
![Tux, ER diagram](/public/images/ER_diagram.png)

##snapshot of a project
Sharing all the screens of the projects for register, login and notes below.

##Login page
![Tux, Login](/public/images/login.png)

##Register page
![Tux, Register](/public/images/register.png)

##Notes
![Tux, notes](/public/images/notes.png)

##some Errors we encounter are captured below

##Login page : when user does not exist

![Tux, login username error](/public/images/login_username_error.png)

user need to enter the correct user name or register the new user

##Login page: when password is incorrect

![Tux, login password error](/public/images/login_password_error.png)

User need to keyin the exact password used during register

##Register page : when registering the existing user

![Tux, register username error](/public/images/register_username_error.png)

User must enter the new username not the existing one
