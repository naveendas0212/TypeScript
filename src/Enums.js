// Enums are the data types that can hold set of constant
//numeric
//sting
//hetrogenious(numeric&string)
//numeric: the starting value is 0 by default, if we assign any value then the next values will be incremented by 1
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Edge"] = 1] = "Edge";
    Browser[Browser["Firefox"] = 5] = "Firefox";
    Browser[Browser["Safari"] = 6] = "Safari";
})(Browser || (Browser = {}));
console.log(Browser.Chrome); //0
console.log(Browser.Safari); //6
for (var i in Browser) {
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
function getName(name) {
    // return name;
    if (name == "naveen") {
        return 11;
    }
    else
        return -1;
}
var empDetails;
(function (empDetails) {
    empDetails[empDetails["empName"] = getName("Naveen")] = "empName";
    empDetails[empDetails["empId"] = 101] = "empId";
    empDetails[empDetails["empAge"] = 21] = "empAge";
})(empDetails || (empDetails = {}));
console.log(empDetails.empName);
//String type enum
var environments;
(function (environments) {
    environments["DEV"] = "dev";
    environments["Prod"] = "prod";
    environments["QA"] = "qa";
})(environments || (environments = {}));
//hrtrogenious enum:
var statusCode;
(function (statusCode) {
    statusCode["ACTIVE"] = "active";
    statusCode[statusCode["INACTIVE"] = -1] = "INACTIVE";
    statusCode[statusCode["PENDING"] = 0] = "PENDING";
})(statusCode || (statusCode = {}));
console.log(statusCode.INACTIVE);
console.log(statusCode.PENDING);
