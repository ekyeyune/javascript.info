let student = {
    name: 'Kyeyune',
    age: 26,
    isAdmin: false,
    courses: ['Chemistry', 'CSS', 'JAVASCRIPT'],
    wife: null
};
let json = JSON.stringify(student);
alert(typeof json);
alert(json);

let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};
room.occupiedBy = meetup;
alert(JSON.stringify(meetup, ['title','participants','name','number']));