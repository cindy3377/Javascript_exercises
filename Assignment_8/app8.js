document.write("Exercise 8<br><br>");

start = parseInt(prompt("Enter the start year:"));
end = parseInt(prompt("Enter the end year:"));

var ul = document.createElement("ul");

for (let leap = start; leap <= end; leap ++) {
    if (leap % 4 === 0 && leap % 100 !== 0 || leap % 400 === 0) {
    ul.innerHTML += `<li>${leap}</li>`;
    }
}

document.body.appendChild(ul);