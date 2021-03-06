import './index.css';
import numeral from 'numeral';
import {getUsers} from './api/userApi';
//import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

global.document.getElementById('users').innerHTML = usersBody;
});



const courseValue = numeral(1000).format('$0,0.00');

debugger;// eslint-disable-line no-debugger
console.log(`Je voudrais payer ${courseValue} pour cet excellent cours!`);// eslint-disable-line no-console
