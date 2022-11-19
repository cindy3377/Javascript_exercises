document.write("Exercise 7<br><br>");

num_of_dice = parseInt(prompt("The number of dice rolls: "));
let sum_of_dice = 0;

for (var rollCount = 0; rollCount < num_of_dice; rollCount++) {
    value_of_die = Math.floor(Math.random() * 6 + 1);
    document.write("You got: ", value_of_die, "<br>");
    sum_of_dice += value_of_die;
}
document.write("Sum of the results: " + sum_of_dice);