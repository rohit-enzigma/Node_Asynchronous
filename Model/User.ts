import { NewUser } from './Register'
let readlineSync = require('readline-sync');

export function UserRegistration() {

    //user accepting data for registration
    let fName = readlineSync.question('Enter Your Name');
    let lName = readlineSync.question('Enter Your last Name');
    let add = readlineSync.question('Enter Your Address');

    //assign data to user object
    let User = {
        firstName: fName,
        lastName: lName,
        address:  add
    }

  //calling promise method for registering that user storing
  NewUser(User).then(
    function (result) {  
      console.log('User Accepted : \n'+ JSON.stringify(result));
    },
    ).catch( function (error) {
        console.log("Error is : "+ error);
      }
   )
}
    


function setCredentials() {
   //Accepting only username and password
    let Uid = readlineSync.question('Enter your Username');
    let pass = readlineSync.question('Enter Password');

   //assigning username and password
    let userLogin = {
        userID: Uid,
        userPass: pass
    }

   //calling to promise method
    NewUser(userLogin).then(
      function (result) {  
           console.log('User Login Accepted : \n'+ result);
      },
    ).catch( function (error) {
        console.log("Error is : "+ error);
       }
   )
}



