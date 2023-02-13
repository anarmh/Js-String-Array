"use strict";

// let date=new Date();
// console.log(date.getFullYear()+"-"+ (date.getMonth()+1)+"-"+(date.getDay()+12)+" "+date.getHours()+":"+date.getMinutes());

// var name="test";
// var name="test2";
// var name="test3";
// console.log(name)

// if(true){
//     var age=36;
// }
// console.log(age)

// function getAge(){
//     var age=36;
//     console.log(age)
// }
// getAge();

let str1 = "Huseynli-Tunar-Anar";
// var str2="Huseynli Elnar Anar";

// for (let i = 0; i < address.length; i++) {
//   if(address[i]=="a"){
//     console.log(address[i]);
//   }

// }
// function search(str){
// for (let i = 0; i < str.length; i++) {
//     if(address[i]=="m"){
//         return true;
//     }

// }
//     return false;
// }
// console.log(search(address) ? "Found" : "NotFound");

// console.log(address.slice(1,5));
// console.log(address.substring(0,5));
// console.log(address.substr(1,3));
// console.log(address.replace("Anar","Elnar"));
// console.log(address.replaceAll("a","A"));
// console.log(address.toUpperCase());
// console.log(address1.concat( address2))
// console.log(str1.startsWith("h".toLowerCase()));
// let result=str1.split("-");
// console.log(result);

// const SUCCESS_MESSAGE="Registered succesfuly";
// const ERROR_MESSAGE="This email already used"

// let user={
//     name:"Anar",
//     surname:"Huseynov",
//     email:"anar@gmail.com",
//     password:"12345"
// };

// function getEmails(){
//     let emails="elnar@gmail.com,tunar@gmail.com,anar@gmail.com"
//     return emails.split(",")
// }

// function registered(user){

//     let emails=getEmails();
//     if(user.name==""){
//         return "Dont empty"
//     }

//     for (const item of emails) {
//         if(user.email==email){
//             return ERROR_MESSAGE;
//         }
//     }
//     return SUCCESS_MESSAGE;
// }

// console.log(registered(user));

// const strToUpper=str=>{
//     return str.charAt(0).ToUpperCase()+str.slice(1);
// }
// console.log(strToUpper("azerbaycan"));

let names = ["Anar", "Tunar", "Elnar", "Cavid", "Atilla"];
// console.log(names[0]);
// console.log(names[names.length-1]);
// names.reverse();
// names.sort();
// console.log(names);

// console.log(names.join(","));

// const arr1=["A","B"];
// const arr2=["C","D"];
// const children=arr1.concat(arr2);
// console.log(children);

// names.push("Tuncay");
// names.pop()
// names.shift()
// names.unshift("Tuncay")

// console.log(names);

// let nums = [1, 2, 3, 5, 78, 90, 4];
// console.log(nums.every(m=>m>6));
// nums.fill(12,0,3);

// console.log(nums);

// console.log(names.filter(m=>m.includes("l")));

// let reuslt = nums.find((m) => m > 5);
// console.log(result);

// console.log(nums.findIndex(m=>m>5));

// function search(searchtext){
//     const fruits=["Banana","Apple","Mango","Orange"];
//     let index=fruits.indexOf(searchtext)
//     if(index==-1){
//         console.log("NotFound")
//        return;
//     }
//     console.log("Success")
// }

// search("Mango");

// let nums = [1, 2, 3, 5, 78, 90, 4];

// console.log(nums.lastIndexOf(5));

// function checkArray(data){
//     return Array.isArray(data);
// }

// console.log(checkArray(nums));

// let result=nums.reduce((total,current)=>(total+current),17);
// console.log(result);

let nums=[1,2,3,4,5,6,7,8];

function findOddNums(arr){
    // let oddArr=[];
    // for (const item of arr) {
    //     if(item%2==1){
    //         oddArr.push(item);
    //     }
    // }

    let oddArr=arr.filter(m=>m%2==1);
    return oddArr.reduce((total,current)=>total+current)
}
console.log(findOddNums(nums));






