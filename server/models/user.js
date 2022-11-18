const users = [{
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

let getUsers = () => users;

module.exports = { getUsers };
