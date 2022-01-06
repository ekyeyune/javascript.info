let user = {
    name: 'Kyeyune',
    age: 26
};
let clone = {};
for(let key in user){
    clone[key] = user[key];
}
clone.name = 'Kigozi';
alert(user.name);
alert(clone.name);

let clone = Object.assign({}, user);

let user = null;
alert(user?.address);
alert(user?.address.street);