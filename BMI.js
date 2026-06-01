let weight = 70; // kg
let heightInFeet = 5.8;

let heightInMeters = heightInFeet * 0.3048;

let bmi = weight / (heightInMeters * heightInMeters);

console.log("BMI:", bmi.toFixed(2));
