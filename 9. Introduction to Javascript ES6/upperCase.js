var name = prompt("What is your name?");
name = (name.slice(0, 1)).toUpperCase() + name.slice(1, name.length);
console.log("Hello, " + name);