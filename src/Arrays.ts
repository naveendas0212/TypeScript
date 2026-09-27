//Arrays in TypeScript are strongly typed collections that allow you to store multiple values of the same or union types, with full support for JavaScript’s array methods but enhanced by compile-time type safety.
// there are two types one dimentional and two dimentional array
let num:number[] = [20,40,45];
let names:string[] = ["Naveen","sai","vamsi"];
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}
//using generics
let empNames: Array<string> = ["Naveen","sai","vamsi"];
let empId: Array<number> = [101,102,103];
//multi type array
let empInfo: (number|string)[] = ["Naveen", 102];
console.log(empInfo[0]);
// for-in loop
for(let i in empInfo){
    console.log(empInfo[i]);
}
empInfo.push(103);

