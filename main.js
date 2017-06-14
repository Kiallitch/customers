// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

  'use strict';
fetch('https://jsonplaceholder.typicode.com/users')

  .then(function(response){
    return response.json();
  })

  .then(function(user){
  const firstUser = user[0];
  const secondUser = user[1];
  const thirdUser = user[2];
  const fourthUser = user[3];
  const fifthUser = user[4];
  const sixthUser = user[5];
  const seventhUser = user[6];
  const eighthUser = user[7];
  const ninthUser = user[8];
  const tenthUser = user[9];
  const name = firstUser.name;
  const email = firstUser.email;
  console.log(firstUser.name)
  console.log(firstUser.email);
  console.log(secondUser.name);
  console.log(secondUser.email);
  console.log(thirdUser.name)
  console.log(thirdUser.email);
  console.log(fourthUser.name);
  console.log(fourthUser.email);
  console.log(fifthUser.name)
  console.log(fifthUser.email);
  console.log(sixthUser.name);
  console.log(sixthUser.email);
  console.log(seventhUser.name);
  console.log(seventhUser.email);
  console.log(eighthUser.name);
  console.log(eighthUser.email);
  console.log(ninthUser.name);
  console.log(ninthUser.email);
  console.log(tenthUser.name);
  console.log(tenthUser.email);
  
  
  })
  

