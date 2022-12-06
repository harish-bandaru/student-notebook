/*const users = [{
    userId: 12345 ,
    userName: "HariBandaru",
    password: "Default123",
    fullName: "HarishBabuBandaru"
},
{
    userId: 12346,
    userName: "ArjunA",
    password: "Default123",
    fullName: "ArjunAllu"
}, 
{
    userId: 12347,
    userName: "NishaK",
    password: "Default123",
    fullName: "NishaKajal"
}]

function getAllUsers() {
    return users;
  }

//let getUsers = () => users;

module.exports = { getAllUsers };*/

const con = require("./db_connect");

async function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS users ( 
        userID INT NOT NULL AUTO_INCREMENT,
        userName VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255),
        fullName VARCHAR(255),
    CONSTRAINT user_pk PRIMARY KEY (user_id)
    )`;
    await con.query(sql);
}
createTable();

//getting all the users from the data base
async function getAllUsers(){
    const sql = `SELECT * FROM users;`;
    let users = await con.query(sql);
    console.log(users)
}
// Create  User 
async function register(user) {
    let cUser = await getUser(user);
    if(cUser.length > 0) throw Error("Username already in use");
  
    const sql = `INSERT INTO users (userName, password, fullName)
      VALUES ("${user.userName}", "${user.password}", "${user.fullName}");
    `
    await con.query(sql);
    return await login(user);
  }
  
  // Read User 
  async function login(user) { 
    let cUser = await getUser(user); 
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  // function to Update User
  async function editUser(user) {
    let sql = `UPDATE users 
      SET userName = "${user.userName}", fullName = "${user.fullName}"
      WHERE userID = ${user.userID}
    `;
  
    await con.query(sql);
    let updatedUser = await getUser(user);
    return updatedUser[0];
  }
  
  // funtion to Delete User 
  async function deleteUser(user) {
    let sql = `DELETE FROM users
      WHERE userID = ${user.userID}
    `
    await con.query(sql);
  }
  
  // Useful Functions
  async function getUser(user) {
    let sql;
  
    if(user.userID) {
      sql = `
        SELECT * FROM users
         WHERE userID = ${user.userID}
      `
    } else {
      sql = `
      SELECT * FROM users 
        WHERE userName = "${user.userName}"
    `;
    }
    return await con.query(sql);  
  }

module.exports = { getAllUsers, login, register, editUser, deleteUser};