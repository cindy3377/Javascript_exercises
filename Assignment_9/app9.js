document.write("Exercise 9<br><br>");

num = parseInt(prompt("Enter a number:"));

let isPrime = true;

for (let i = 2; i < num; i ++) {
    if (num % i == 0) {
    isPrime = false;
    break;   
    }
}

if (isPrime) {
    document.write(num + " is a prime number.");
} else {
    document.write(num + " is not a prime number.");
}