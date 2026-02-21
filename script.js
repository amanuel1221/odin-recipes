const users=[
    {name:"Amanuel",online:true},
    {name:"John",online:false},
    {name:"Jane",online:true},
    {name:"Doe",online:false}
];

const userson=users.filter(user=> user.online===true).map(user=> user.name);
console.log(userson);