//unary operators
let x = 1;
x = -x;
alert(x);

let a = 3, b = 5;//actions of a binary operator. It works on two operands.
alert(`The sum of ${a} and ${b} is ${a + b}` );

alert(b % a); //this will give the remainder of b divided by a (2)
alert(5**3);
alert(2**8);
alert(8**(1/3));
alert(256**(2));

let word = "my" + "Sensors";//string concatenation
alert(word);
alert('2' + 2 + 4);     //224
alert(2 + 4 + '2');     //62

let oranges = "3";
let mangoes = "4";

alert(oranges + mangoes);
alert(+oranges + +mangoes);
alert(Number(oranges) + Number(mangoes));

let n = 2;
n+=5; //7
n*=2; //14
alert(n); //14

//Increment
let counter = 1;
counter++;
alert(counter);//

//decrement
let counters = 2;
counters--;
alert(counters);

let f = (1+2, 3+4);
alert(f);


let m = prompt("First number?", 1);
let n1 = prompt("Second number?", 2);
alert(+m + +n1);