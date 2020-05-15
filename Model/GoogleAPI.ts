import * as request from 'request';

    //this function accepts parameter Address to get Latitude and Longitude
    export function getLocation( address: string) {
        return new Promise(
            function (resolve: any, reject: any) {

                request({uri: "https://www.google.com/",  json:true},
                
                (error, response, body) => {
        
                   if(error) {
                    reject("Unable to connect");
                   }
                   else if(response.statusCode === 404) {
                    reject("Resource is Not Found");
                   }
                   else {
                    resolve(body.url);
                   }
                   
                });
            }
        );
    }



 