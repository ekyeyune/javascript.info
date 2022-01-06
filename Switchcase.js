let a = 2 + 2;
switch(a){
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert('I don\'t know such values');
}

//this is code that doesnt have the break keyword. I twill execute every statement that comes after the initial result has been obtained
let b = 2 + 3;
switch(b){
    case 3:
        alert('Too small');
        
    case 4:
        alert('Exactly');
        
    case 5:
        alert('Too big');
        
    default:
        alert('I don\'t know such values');
}

//grouping cases. This is doen when we want a single block of code to execute two or more cases.
let c = 2 + 2;
switch(c){
    case 3:
        alert('Too small');
        break;
    case 4:
    case 5:
        alert('Exactly');
        alert('Too big');
        break;
    default:
        alert('I don\'t know such values');
}

let arg = prompt('Enter a value');
switch (arg){
    case '0':
    case '1':
        alert('Zero or One');
        break;
    case '2':
        alert('Two');
        break;
    case 3:
        alert('Never executed');
        break;
    default:
        alert('An unknown value');
}