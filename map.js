const ww = [3,4,5,6,1,8];

const output = [];
for(let i=0; i<ww.length; i++){
    const element = ww[i];
    const res = element*element;
    output.push(res);
}
console.log(output);

function square (element){
    return element*element;
}
ww.map(function(element,index,array){
    console.log(element,index,array);
})

const res2 = ww.map(function(element){
    return element*element; 
})
const res4 = x => x*x;
const res3 = ww.map(x => x*x);
console.log(res3);
console.log(res4(2));
const res5 = ww.filter(x => x>5);
console.log(res5);

const res6 = ww.find(x => x>5);
console.log(res6);