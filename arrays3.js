//Write a function that accepts an array of strings and console.logs each element using a for loop.
let str=["country","identity","diversity","originality"];
function string(str){
    for(let i=0;i<str.length;i++){
    console.log(str[i])
    }
}
string(str);
//Write a function that accepts an array of numbers and uses 
//the forEach() method to console.log each number multiplied by 2.

let arrnum=[20,13,40,17,19]
function accept(arrnum){
    arrnum.forEach((a) =>console.log(a*2)
    )}
 accept(arrnum);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5.
// Console the array with the new values
 let arr5=[4,7,9,11,22,30]
 function takes(arr5){
    for(let m=0;m<4;m++){
        arr5[m]=arr5[m]*8
        
    }
    arr5[arr5.length -2]+=5
    arr5[arr5.length -1]+=5
    console.log(arr5)

 }
 takes(arr5)
//Write a function that takes in the following array and use a while loop to iterate and
// break when the item is equal to the fourth index
 let arrNum=[1,2,3,4,5,6,7,8,9]
 function inside(arrNum){
    let i=0;
    while(i<arrNum.length){
        console.log(arrNum[i])
        if (i===4) {
            break;
        }
        i++
        
    }
 }
 inside(arrNum);
//Write a function that takes in a 
//an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
 function fruity(fruits){
    for(let a=2;a<fruits.length;a++){
        if(a===2){
            continue;
        }
        console.log({"continue":fruits[a]})
    }
 }
 let fruits=["apple","plam","banana","strawberries","kiwi"];
fruity(fruits);
