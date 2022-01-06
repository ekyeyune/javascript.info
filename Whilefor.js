let i = 0;
while(i <3){
    alert(i);
    i++;
}
let a = 0;
do{
    alert(a);
    a++;
}while(a < 3);

for(let n = 0; n < 3; n++){
    alert(n);
}
//alert(n);

//using the break keyword.
let sum = 0;
while(true){
    let value = +prompt("Enter a number", '');
    if(!value) break;
    sum+=value;
}
alert('Sum: ' +sum);

//using the continue keyword for even numbers
for(let h = 0; h < 10; h++){
    if(h % 2 ==0 ) alert(h);
    continue;
}

//Odd numbers without the continue keyword.
for(h = 0; h < 10; h++){
    if(h%2){
        alert(h);
    }
}

outer: for(let i = 0; i < 3; i++){
   inner: for(let j = 0; j < 3; j++){
        let input = prompt(`Value at coords(${i},${j})`, '');

        if(!input) break outer;
    }
}
alert('done');