let sum = (a, b) => a + b;
alert(sum(1,2));

/* This abovr is the same as
let sum = function(a,b){
    return a + b;
};*/
 let double = n => n*2;
 alert(double(3));

 let double1 = function(n){
     return n*2;
 };
 alert(double1(4));

 let sum1 = (a, b) =>{
     let result = a + b;
     return result;
 };
 alert(sum1(3, 4));

 let ask = (question, yes, no) => {
     if(confirm(question)) yes();
     else no();
 }
 ask(
     "Do you agree?",
     () => alert("You agreed."),
     () => alert("You canceled the execution")
 );