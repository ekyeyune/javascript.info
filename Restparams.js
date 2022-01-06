function sum(a, b){
    return a + b;
}
alert(sum(1,2,3,4,5,6));
function sumAll(...args){
    let sum = 0;
    for(let arg of args) sum+=arg;
    return sum;
}
alert(sumAll(1));
alert(sumAll(1,2,3,4,5,6,7));

let arr = [3,5,7,4];
alert(Math.max(...arr));