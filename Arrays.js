let fruit = ["Jackfruits", "Mango", "Plum"];
alert(fruit[0]);
alert(2,8);

for(let key in fruit){
    alert(fruit[key]);
}
for(let fruits of fruit){
    alert(fruits);
}
fruit.splice(0, 1);
alert(fruit);