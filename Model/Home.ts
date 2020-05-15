import { retrieveUs } from './RetriveUser';
import { getLocation } from './GoogleAPI';
import { UserRegistration } from './User';

let readlineSync = require('readline-sync');

let choice = readlineSync.questionInt('*****Enter Your Choice as Follows to perform Task*****\n'+
                                       '1 : Registration of User\n'+
                                       '2 : Retriving User Details\n'+
                                       '3 : Find Latitude and Longitude for specidfied address\n');


switch (choice) {
    case 1:
        UserRegistration();
        break;
    case 2:
       //calling following method for retriving data from userDetails.json
        retrieveUs().then(
           function (result) {  
               console.log('User Retrived : \n'+ JSON.stringify(result));
            },
           ).catch( function (error) {
             console.log("Error is : "+ error);
             }
        )
        break;
    case 3:
        //calling following function for to know latitude and longitude for given address
        let mapOf: string;
           let location =  getLocation(mapOf).then(
             function (result) {  
                console.log(`Latitude and Longitude for ur specified Address is : \\n${result}`);
             },
             ).catch( function (error) {
                console.log("Error is : "+ error);
                } 
           )
        break;  
    default:
        console.log('Enter Valid Choice');
        break;
}



  

   