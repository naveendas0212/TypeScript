/*
Conditional statements allow your code to execute different blocks depending on
whether a condition is true or false.
They’re essential for controlling program flow.
*/
// If condition:
let StuName = "Naveen";
if(typeof StuName === "string")
{
    console.log("Hey its string...");
}

// else condition:
let StuId = "dflk";
if(typeof StuId ==="string"){
    console.log("you have entered a wrong type..")
}
else
    console.log("the ID is "+ StuId);

//if else..if else..Chain
let Phone=phoneNum(true);
if(typeof Phone === "string")
    console.log("its a String..");
else if(typeof Phone ==="boolean")
    console.log("Its a boolean..");
else if(typeof Phone === "number")
    console.log("Its a number..")
else
    console.log("Pichoodaa em enter chesav ra...");

function phoneNum(phone:any):any{
    return phone;
}

// Switch condition
let day:number = 1;
switch(day){
    case 1 :
        console.log("hey mike its day one...");
        break;
    case 2 :
        console.log("idi rendava roju mike");
        break;
    default:
        console.log("neeku kavalsina roju raledu mike...pooi aadukoo..");
}
