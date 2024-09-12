const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'shivam@2003',
    database:'delta'
});
try{
    connection.query("SHOW TABLES",(err,result)=>{
    if(err) throw err;
    console.log(result);
});
}catch(err){
    console.log(err);
    
}

let getRandomUser=()=>{
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    
};
// console.log(getRandomUser());