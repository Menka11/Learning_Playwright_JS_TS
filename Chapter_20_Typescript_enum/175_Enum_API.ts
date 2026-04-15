enum HTTPMethods{
    get= "GET",
    post = "POST",
    put = "PUT"
}

function sendRequest(method: HTTPMethods, endPoint: string): void{
    console.log(method + " " + endPoint + " " + "200 OK"); 
    }

sendRequest(HTTPMethods.get, "/api/users");