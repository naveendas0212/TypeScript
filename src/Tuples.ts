// tuples are fixed size i.e we can't add values in runtime and order matters
let empInfo1: [string, number] = ["Naveen", 101];
let user:[string,number,boolean]=["Sagar",202,true];
console.log(empInfo1[1]);
for(let i in user){
    console.log(user[i]);
}
let user2:[string,number][] = [["Naveen",101],["sagar",102]];
// for(let i in user2){
//     console.log(user2[i]);
// }
for(let i=0;i<user2.length;i++){
    for(let j=0;j<user2.length;j++){
        // console.log(j,i);
        console.log(user2[i][j]); //0,0->naveen,
    }
}
//we can add data to the tuple by using the push method
user2.push(["ajay", 200]);
empInfo1.push("ajay",200);
console.log(empInfo1);
