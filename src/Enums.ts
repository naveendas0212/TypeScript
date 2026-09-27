// Enums are the data types that can hold set of constant
//numeric
//sting
//hetrogenious(numeric&string)

//numeric: the starting value is 0 by default, if we assign any value then the next values will be incremented by 1
enum Browser {
    Chrome,
    Edge,
    Firefox=5,
    Safari
}
console.log(Browser.Chrome); //0
console.log(Browser.Safari); //6
for(let i in Browser){
    console.log(Browser[i]);
}
//we can declare a function to the enums as well
// function getName(name:string): string {
//     return name;
// }
// enum empData {
//     empName  = getName("naveen"),
//     // empName = "anveen",
//     // empId,
//     // empPhone
// }

function getName(name:string): number {
    // return name;
    if(name=="naveen"){
        return 11;
    }
    else return-1;
}

enum empDetails {
    empName = getName("Naveen"),
    empId = 101,
    empAge = 21
}
console.log(empDetails.empName);

//String type enum
enum environments {
    DEV = "dev",
    Prod = "prod",
    QA = "qa"
}

//hrtrogenious enum:
enum statusCode {
    ACTIVE = "active",
    INACTIVE = -1,
    PENDING
}
console.log(statusCode.INACTIVE);
console.log(statusCode.PENDING);
