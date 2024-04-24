let friends=["Ali ", "Bisma ", "Shakeel ", "Daud"];

friends.splice(2, 3, "Ali Aman", "Shariq");
let a= friends[0];
let b= friends[1];
let c= friends[2];
let d= friends[3];
let closeFriends= friends.slice(1, 3);

console.log("They are my friends: "+friends)
console.log("They are my close friends: "+closeFriends);
console.log("They are my cousin friends: "+a+d);
