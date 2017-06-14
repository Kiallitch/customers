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
  const name = firstUser.name;
  const email = firstUser.email;
  console.log(name);
  console.log(email);

})();
