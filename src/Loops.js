// Loops are used to control the flow of execution
// Loops let you repeat a block of code multiple times until a condition is met.
//For loop
var var1 = 10;
var result = "";
for (var i = 0; i <= var1; i++) {
    //console.log(i); prints in next lines
    result += i + " ";
}
console.log(result); // this will print the output in a single line
// While loop
var count = 1;
while (count < 10) {
    console.log("nuv thop ra babu.." + count);
    if (count === 5)
        break;
    count++;
}
//do while loop
var var2 = 1;
do {
    console.log("hey apparao..." + var2);
    var2++;
} while (var2 < 1);
// for of loop: {Iterates over values in an array or iterable.}
var arr = [1, 2, 3, 4, 5, 6];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
//for in loop:{iterates over the indices or keys}
for (var i in arr) {
    console.log(arr[i]);
}
//sum of number 1 to 100
var num1 = 1;
var sum = 0;
while (num1 <= 100) {
    sum += num1;
    num1++;
}
console.log("What I say isss..." + sum);
// reverse a string
var input = "Elephant";
var result2 = "";
var count3 = 0;
var vowels = "AEIOUaeiou";
for (var i = input.length - 1; i >= 0; i--) {
    result2 += input[i];
    for (var j = 0; j <= vowels.length; j++) {
        if (input[i] === vowels[j]) {
            count3++;
        }
    }
}
console.log(result2);
console.log("orey pichoodaaa count entho telusaa: " + count3);
if (input === result2)
    console.log("Palindrome");
else
    console.log("not palidrome..");
console.log("orey charii....count entho telusa.." + count3);
