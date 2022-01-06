let year = prompt('Which year was ECMASCRIPT-2015 founded', '');
// if(year ==2015) alert('You are right');

//if else
// if(year == 2015){
//     alert("You guessed right");
// }else{
//     alert("How can you be wrong");
// }

//else if
if(year < 2015){
    alert("Too early");
}else if(year > 2015){
    alert("Too late");
}else{
    alert("Exactly");
}

let accessAllowed;
let age = prompt("How old are you?", '');
// if(age > 18){
//     accessAllowed = true;
// }else{
//     accessAllowed = false;
// }
// alert(accessAllowed);

accessAllowed = age > 18 ? true: false;
alert(accessAllowed);

let age1 = prompt('age?', 18);
let message = (age1 < 3) ? 'Hi baby':(age1 < 18) ? 'Hello!!': (age1 < 100) ? 'Greetings' : 'What an unusual age';
alert(message);

let official = prompt("Whats the \"offical\" name of Javascript?", '');
if(official == 'ECMAScript'){
    alert("Right");
}else{
    alert("You dont know \"ECMAScript\"!");
}