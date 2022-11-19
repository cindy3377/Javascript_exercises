document.write("Exercise 4<br><br>")

student = prompt("What is your name?");
room_number = Math.floor(Math.random() * 4 + 1);

if (room_number === 1) {
    room = "Gryffindor";
}
else if (room_number === 2) {
    room = "Slytherin";
}
else if (room_number === 3) {
    room = "Hufflepuff";
}
else if (room_number === 4) {
    room = "Ravenclaw";
}

document.write(`${student}, you are ${room}`);