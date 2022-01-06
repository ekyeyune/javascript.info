let userName = 'Aine';
function showMessage(){
    let name = 'I am KYEYUNE ERIC BRIAN';
    alert(name + userName);
}

showMessage();
alert(name);

function showName(firstName, lastName){
    alert(`My name is ${firstName} ${lastName}`);
}
showName('Eric', 'Kyeyune');

function sum(a, b){
    return a + b;
}
let result = sum(3, 4);
alert(result);

function checkAge(Age){
    if(age>=18){
        return true;
    }else{
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('How old are you??', '');
if(checkAge(age)){
    alert('Access granted');
}else{
    alert('Access denied');
}

function showPrimes(n){
    nextPrime: for(let i = 2; i < n; i++){
        for(let j = 2; j < i; j++){
            if(i%j == 0) continue nextPrime;
        }
        alert(i);
    }
}