let age: number = 10;
let name1: string = 'Naveen';
let isHuman: boolean = true;
console.log(age + ' ' + name1 + ' ');
//If we declare a variable as let then it can be modified

const salary: number = 10000;
//If we declare a variable as const it's fixed
//salary = salary+10;  -->will get an error
console.log(salary);

// we have a "any" type it means the variable can contain data of any type
let data: any;
data = 20;
data = 'naveen';
console.log(data);
