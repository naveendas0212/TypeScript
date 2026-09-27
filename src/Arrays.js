//Arrays in TypeScript are strongly typed collections that allow you to store multiple values of the same or union types, with full support for JavaScript’s array methods but enhanced by compile-time type safety.
// there are two types one dimentional and two dimentional array
var num = [20, 40, 45];
var names = ["Naveen", "sai", "vamsi"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//using generics
var empNames = ["Naveen", "sai", "vamsi"];
var empId = [101, 102, 103];
//multi type array
var empInfo = ["Naveen", 102];
console.log(empInfo[0]);
// for-in loop
for (var i in empInfo) {
    console.log(empInfo[i]);
}
