import * as request from 'request';


    request;
    //this function accepts parameter Address to get Latitude and Longitude
    export function getLocation( address: string) {
        return new Promise(
            function (resolve: any, reject: any) {
                if(address != null) {
                    
                    resolve();
                }
                else {
                    reject("Incorrect address might be, please enter valid address");
                }
            }
        );
    }



 