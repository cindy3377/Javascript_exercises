document.write("Exercise 6<br><br>")

if (confirm("Should we calculate the square root?") == true) {
  number = parseInt(prompt("Put in a number"));
  square_root = Math.sqrt(number);
  document.write("The square root of " + number + " the number is: " + square_root);
} else {
  document.write("The square root is not calculated.");
}
