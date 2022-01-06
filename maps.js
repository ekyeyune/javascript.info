let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
alert(map.get(1));
alert(map.get('1'));
map.get(map.size);

let recipeMap = new Map([
    ['cucumber', 500], ['tomatoes', 350],['onion', 50]
]);
for(let vegetable of recipeMap.keys()){
    alert(vegetable);
}
for(let amount of recipeMap.values()){
    alert(amount);
}
for(let entry of recipeMap){
    alert(entry);
}

recipeMap.forEach((value, key, map) =>{
    alert(`${key}: ${value}`);
});

let map1 = new Map([
    ['1', 'str1'], [1, 'num1'], [true, 'bool1']
]);
alert(map.get('1'));

let obj = {
    name1: 'John',
    age: 30
};
let map2 = new Map(Object.entries(obj));
alert(map2.get('name1'));

let set = new Set();
let john = {name: 'John'};
let pete = {name: 'Pete'};
let mary = {name: 'Mary'};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
alert(set.size);
for(let user of set){
    alert(user.name);
}

let set1 = new Set(['oranges', 'apples', 'Bananas']);
for(let value of set1) alert(value);
set1.forEach((value, valueAgain, set) =>{
    alert(value);
});