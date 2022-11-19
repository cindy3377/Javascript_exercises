document.write("Exercise 10<br><br>");

let num_of_dice = prompt("Input the number of dice:");
let user_sum = prompt("Input sum of eyes:");
let probability = 0;
let time = 0;

for (let i = 0; i <= 10000; i++) {
    let sum_of_dice = 0;
    for (let i = 0; i < num_of_dice; i++) {
        value_of_die = Math.floor(Math.random() * 6 + 1);
        sum_of_dice += value_of_die;
    }
    if (sum_of_dice == user_sum) {
       time ++;    
    }
}

probability = (time/10000)*100;
document.write("The probability is: " + probability.toFixed(2) + "%")