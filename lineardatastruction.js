let array1 = [2, 5, 4, 7, 3];
let array2 = [2, 9, 7, 4];
let sum = 0;
let sum2 = 0;

//sum of overlapping element
for (i = 0; i < array1.length; i++) {
  for (j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      sum += array1[i] + array2[j];
    }
  }
}
console.log("This is sum of overlapping element : ", sum);

//sum of distinct element
for (i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i]) === false) {
    sum2 += array1[i];
  }
}
for (j = 0; j < array2.length; j++) {
  if (array1.includes(array2[j]) === false) {
    sum2 += array2[j];
  }
}
console.log(" This is sum of distinct element : ", sum2);
