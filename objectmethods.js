let user = {
    name: 'Brian',
    age: 45
};
for(let value of Object.values(user)){
    alert(value);
}
alert(Object.keys(user));
alert(Object.values(user));