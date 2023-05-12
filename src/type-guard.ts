// keyof guard
type Alphanumeric = string | number;

function add(param1:Alphanumeric, param2:Alphanumeric):Alphanumeric{
    if(typeof(param1)=== "number" && typeof(param2) === "number"){
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
}

// in guard

type NormalUser = {
    name:string
}

type AdminUser = {
    name:string,
    role:"admin"
}

const normalUser1:NormalUser= {name:"Arif"};
const adminUser1:AdminUser = {name:"Binu", role:"admin"};

function checkUser(user:NormalUser|AdminUser):string{
    if("role" in user){
        return `${user?.name} is an admin`;
    }else{
        return `${user.name} is an user`;
    }
}

console.log(checkUser(normalUser1));
console.log(checkUser(adminUser1));
