import * as Promise from 'promise'; 
let fs = require('fs');

//Retriving data from userDetails file.
export function retrieveUs() {
    return new Promise(
        function (resolve: any, reject:any) {
            let entry = 1;
            if(entry == 1) {
                console.log('Entered in Retrieve promise block');
                let rawdata = fs.readFileSync('./Model/userDetails.json');
                let user = JSON.parse(rawdata);   
                resolve(user);
            }
            else {
                reject("Something Might Gone Wrong");
            } 
        }
    );   
}