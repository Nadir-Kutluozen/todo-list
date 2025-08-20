
//creating Types. 
// type user = {
//         name: string;
//         age: number;
//         userID: number | string;
//         isAdmin: boolean;
//     }

type AddFn = (a:number,b:number) => number

let user: User // user obj the type user!
user = {
    name : "nadir",
    age : 23,
    userID : 34324,
    isAdmin : true
  }

export function add(a:number ,b:number): number{
    return a+b;
}

export function calculate (
    a:number,
    b:number,
    calcFun: AddFn // our add type
) :number
{
    
    return calcFun(a,b)
}

// Now creating an interface!

interface User {
        name: string;
        age: number;
        userID: number | string;
        isAdmin: boolean;
}

let nadir : User;
nadir : {
name: "nadir";
}

type Admin = {
    credentials : string[];
}

type AppUser = {
    userName : string;
}

type AppAdmin = Admin & AppUser;

//Generics

type DataStorage <T> = {
    storage: T[]; // the generic array creating
    add: (data:T) => void; // we can also add the function make the type generic
}

let data: DataStorage<string> 

data = {
    storage: [],
    add (data) {}
}


