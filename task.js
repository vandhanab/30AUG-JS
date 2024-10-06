console.log("-------**QUESTION-01**-------");

// Using for loop
console.log("1. Using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using while loop
console.log("2. Using while loop:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// Using do-while loop
console.log("3. Using do-while loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);


console.log("-------**QUESTION-02**-------");

// Using for loop
console.log("1. Using for loop to print even numbers:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Using while loop
console.log("2. Using while loop to print even numbers:");
let l = 2;
while (l <= 20) {
    console.log(l);
    l += 2;
}

// Using do-while loop
console.log("3. Using do-while loop to print even numbers:");
let m = 2;
do {
    console.log(m);
    m += 2;
} while (m <= 20);

console.log("-------**QUESTION-03**-------");

// Using for loop
console.log("1. Using for loop to print odd numbers:");
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

// Using while loop
console.log("2. Using while loop to print odd numbers:");
let n = 1;
while (n < 20) {
    console.log(n);
    n += 2;
}

// Using do-while loop
console.log("3. Using do-while loop to print odd numbers:");
let o = 1;
do {
    console.log(o);
    o += 2;
} while (o < 20);

console.log("-------**QUESTION-04**-------");

// Function to determine grade based on marks
function checkGrade(marks) {
    if (marks >= 35 && marks <= 45) {
        console.log("Grade: D");
    } else {
        console.log("Not in the grade range for D.");
    }
}

// Example usage
let studentMarks = 40; // Change this value to test different cases
checkGrade(studentMarks);


