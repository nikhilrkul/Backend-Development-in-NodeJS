/**
 * Program to print the even numbers from 1 to 25
 */

// 1st Approach :

for (let i = 1; i <= 25; i += 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 2nd Approach

for (let i = 2; i <= 25; i += 2) {
  console.log(i);
}
