const _ = require('lodash');
const people = require('./people.js');
// console.log(_.lastIndexOf([1,2,3],2));
// console.log(_.last([1,2,3]));
// var x =2;
// console.log(x);
people.test();

console.log("hi");
console.log(people.x);
console.log(_.last(people.x));

const path = require('path');
const os = require('os');
const fs = require('fs');
const myPath = 'F:/my_project';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
console.log(os.platform());
console.log(os.freemem());
console.log(os.cpus());
fs.writeFileSync('myfile.txt', 'yes');
fs.appendFileSync('myfile.txt', 'You are done!');

const data = fs.readFileSync('myfile.txt');
console.log(data);
console.log(data.toString());

fs.readFile('myfile.txt', (err, data) =>{
    console.log(data.toString());
});

console.log("hello");

const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello programmers!');
        res.end();
    } else if(req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else{
        res.write('Not found');
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000');


function checknum(x){
    if(x % 2 == 0){
        console.log("Even Number.");
    }
    else{
        console.log("Odd Number.");
    }
}
//checknum(1);
function checkall(c){
    for(let i=0; i<=c; i++){
        console.log(i +":");
        checknum(i);
    }
}
checkall(10);


function checknum(x){
    if(x % 2 == 0){
        return "Even Number.";
    }
    else{
        return "Odd Number.";
    }
}
//checknum(1);
function checkall(nums){
    result_arr = [];
    for(let i=0; i<nums.length; i++){
        arr = nums[i];
        res = checknum(arr);
        console.log(arr + ":" + res);
        result_arr.push(res);
    }
}
nums = [11,22,32,45,15];
checkall(nums);
console.log(result_arr[2]);

