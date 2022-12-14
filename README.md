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

![login](https://user-images.githubusercontent.com/40355445/207682209-68afb1ed-5cfc-44af-a7d2-50dc00c935c8.PNG)

##Register page

![register](https://user-images.githubusercontent.com/40355445/207682512-d3be8440-4cc4-4a87-9f4a-72fef1a66078.PNG)

##Notes for new users

![notes](https://user-images.githubusercontent.com/40355445/207682889-83dcd316-a54a-4ae5-8489-87e8095128ac.PNG)

##Notes page for returning users[whose notes are already available in database]

![notesWithData](https://user-images.githubusercontent.com/40355445/207684100-77be5cca-aaea-4395-8458-70eb214a76c6.PNG)

##some Errors we encounter are captured below

##Login page : when user does not exist

![login_username_error](https://user-images.githubusercontent.com/40355445/207683019-f9e2060e-d5e8-46c8-b8c4-a82fa7cfd2fc.PNG)

user need to enter the correct user name or register the new user

##Login page: when password is incorrect

![login_password_error](https://user-images.githubusercontent.com/40355445/207683180-cebdd6cc-3bad-4b02-a3aa-62442855c438.PNG)

User need to keyin the exact password used during register

##Register page : when registering the existing user

![register_username_error](https://user-images.githubusercontent.com/40355445/207683255-4ad2e4a6-4a5e-4a21-81dd-eddaaf5d6efd.PNG)

User must enter the new username not the existing one
