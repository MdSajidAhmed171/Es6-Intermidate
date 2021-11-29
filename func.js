function explain (name, age, task){
    console.log("Name:", name);
    console.log("Age:", age);
    task();
}
function washHand(){
    console.log("Wash your hand");
}
function takeShower(){
    console.log("Do shower");
}
explain("rahim", 17, washHand);
explain("Kahim", 16, takeShower);

function sum(x, y){
    
    for(let  i=0; i<=3; i++){
        console.log(arguments[i]);
    }
    return x+y;
}
console.log(sum(4,2,3,4));


let xy  = function(x,y){
    return x * y;
}
console.log(xy(2,3));

nums = [12,1,5,3,8,3,23,55];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if(num % 2 ==0){
        console.log(num);
    }
    else{
        console.log(num*2);
    }
    
    
}
let x = 2;
x = 5;
console.log(x);

const age5 = [12,33,10,22];
const age2 = [18,23,15,21];
const age3 = [45,22,12,33];

const allAge = age5.concat(age2).concat(age3);
const prac = [...age5, ...age3];
const maxi = Math.max(...age5);
console.log(allAge);
console.log("2nd:",prac);
console.log(maxi);

const person = {name: 'Md Sajid Ahmed',age: 23, friends: ['iftiaz', 'ziad', 'shadman'] };

const {friends, age} = person;
// const name = person.name;

console.log(age); 

const friendss = ['sakib', 'Jack', 'noob'];
const [choto, ...olderF] = friendss;
console.log(olderF);

const complexInfo = {
    name: "Rahim",
    info : {
        address: 'Kola bagan',
        leader: 'Tiger Leader',
        
    }
}
const {leader} = complexInfo.info;

console.log(leader);
const f2 = `${20+50+30} ${leader}`;
console.log(f2);

const namee ="";
if(namee.length>0){
    console.log("conditon is true");
}
else{
    console.log("conditon is false");
}
//undefined
let pakhi;
console.log(pakhi);

const premik = {name:"start dude",phone:22222};
console.log(premik.gf);

let fun = undefined;
console.log(fun);

function add(num1,num2){
    console.log(num1+num2);
}
const res = add(2,3);
console.log(res);

let xd = function (x,y){
    // let sum = x+y;
    console.log(y);
}
xd(2);
let n = null;
console.log(n);

