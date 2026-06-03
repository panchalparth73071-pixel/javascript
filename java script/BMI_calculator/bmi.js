 function calculateBMI() {
            let weight = parseFloat(document.getElementById("weight").value);
            let heightInFeet = parseFloat(document.getElementById("height").value);

            if (weight <= 0 || heightInFeet <= 0 || isNaN(weight) || isNaN(heightInFeet)) {
                document.getElementById("result").innerText =
                    "Please enter valid values.";
                return;
            }

            let heightInMeters = heightInFeet * 0.3048;
            let bmi = weight / (heightInMeters * heightInMeters);

            document.getElementById("result").innerText =
                "Your BMI is: " + bmi.toFixed(2);
        }