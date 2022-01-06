let now = new Date();
alert(now);
let date = new Date('2017-01-26');
alert(date);
alert(now.getHours());
alert(now.getMonth());
alert(now.getFullYear());


let start = new Date();
for(let i = 0; i < 100000; i++){
    let doSomething = i * i * i;

}
let end = new Date();
alert(`The loop took ${end - start}ms`);

//Bench mark
function diffSubtract(date1, date2){
    return date2 - date1;
}
function diffGetTime(date1, date2){
    return date2.getTime() - date1.getTime();
}
function bench(f){
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for(let i = 0; i < 100000; i++)
        date1, date2;
        return Date.now() - start;
}
alert('Time of diffSubtract: ' +bench(diffSubtract)+ 'ms');
alert('Time for diffGetTime: '+bench(diffGetTime) + 'ms');