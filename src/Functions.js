//to declare a function we use the keyword "function"
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
//we have functions of diff typs: Parameterized and default
function display() {
    console.log("Hi I am a default method...I dont return anything");
}
function sub(num1, num2) {
    console.log("Hi..I am parameterized method and I have a return type");
    return num1 - num2;
}
console.log(display());
console.log(sub(20, 10));
