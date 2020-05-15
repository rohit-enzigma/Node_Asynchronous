import * as Promise from 'promise'; 
let fs = require('fs');

//this function accepts object and returns promise
export function NewUser(user : any) {
    return new Promise(
        function (resolve: any, reject: any) {
            if(user != null) {
                console.log('Entered');
                fs.writeFileSync('./Model/userDetails.json',JSON.stringify(user));
                let rawdata = fs.readFileSync('./Model/userDetails.json'); 
                resolve(JSON.parse(rawdata)); 
            }
            else {
                console.log('in error part');
                reject("please enter data first");
            }   
       }
    );   
}