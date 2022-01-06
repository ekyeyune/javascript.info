let user = {
    name: "JOHN",
    age: 24,
    DOB: "12/13/2000"
};
alert(user.name);
alert(user.age);
alert(user.DOB);
user.isAdmin = true; //adding an item to an object.
delete user.DOB; //syntax for deleting an item from an object.

let user1 = {};
user1["likes birds"] = true;

alert(user1["likes birds"]);

let fruit = prompt("Which fruits to do buy", "apple");
let bag = {
    [fruit]: 5
}

let user2 = {name: "John", age: 30};
alert("age" in user2);
alert("year" in user2);

let user3 = {
    name3: "John",
    age3: 30,
    isAdmin3: true
};
for(let key in user3){
    alert(key);
    alert(user3[key]);
}