// we can use the union type to declare a variable which can hold the declared data type
var User;
function verify(userDetails) {
    if (typeof (userDetails) === "number") {
        return userDetails + "_numberDetails";
    }
    else if (typeof (userDetails) === "string") {
        return userDetails + "_stringDetails";
    }
}
User = "naveen";
console.log(verify("naveen"));
