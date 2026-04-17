let rawResponse: unknown  = {
    status: 200,
    body: {user: "admin", role: "tester"}

};

interface UserResponse{
    status: number;
    body:{
        user: string;
        role: string;
    }
}

let response = rawResponse as UserResponse;
console.log("status:", response.status);
console.log("user:", response.body.user);
console.log("role:", response.body.role);

