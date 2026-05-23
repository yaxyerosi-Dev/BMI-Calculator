function calculateBMI() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const bmiResult = document.getElementById("bmiResult");
    const resultText = document.getElementById("resultText");

    if(height === "" || weight === "") {
        alert("Please enter height and weight");
        return;
    }

    // Convert cm to meters
    const heightInMeters = height / 100;

    // BMI Formula
    const bmi = weight / (heightInMeters * heightInMeters);

    bmiResult.innerHTML = bmi.toFixed(1);

    // BMI Categories
    if(bmi < 18.5) {

        resultText.innerHTML = "Underweight";
        resultText.className =
        "mt-6 text-center text-2xl font-bold text-gray-500";

    }

    else if(bmi >= 18.5 && bmi <= 24.9) {

        resultText.innerHTML = "Healthy";
        resultText.className =
        "mt-6 text-center text-2xl font-bold text-green-600";

    }

    else if(bmi >= 25 && bmi <= 29.9) {

        resultText.innerHTML = "Overweight";
        resultText.className =
        "mt-6 text-center text-2xl font-bold text-blue-600";

    }

    else {

        resultText.innerHTML = "Obesity";
        resultText.className =
        "mt-6 text-center text-2xl font-bold text-purple-600";

    }

}

function resetBMI() {

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";

    document.getElementById("bmiResult").innerHTML = "0.0";
    document.getElementById("resultText").innerHTML = "Result";

}