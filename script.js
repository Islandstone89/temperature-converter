
let body = document.getElementById("body");
let themeSwitch = document.getElementById("themeSwitch");

let textInput = document.getElementById("tempInput");
let radioBtn1 = document.getElementById("tempScale1");
let radioBtn2 = document.getElementById("tempScale2");
let convertBtn = document.getElementById("convertBtn");
let result = document.getElementById("conversionResult");
let errorMessage = document.getElementById("errorMessage");

let missingValue = "Please enter a value";
let missingNumber = "Please enter a number";
let emptyString = ""
let celcius = "C";
let fahrenheit = "F";


function convertTemp() {
    temp = textInput.value;

    if (temp === "") {
        errorMessage.textContent = missingValue;
    }

    else if (isNaN(temp)) {
        errorMessage.textContent = missingNumber;
    }

    else if (radioBtn1.checked) {
        errorMessage.textContent = emptyString;
        let convertedTemp = (temp - 32) * 5 / 9;
        result.textContent = `${convertedTemp.toFixed(1)} °${celcius}`;
    }

    else if (radioBtn2.checked) {
        errorMessage.textContent = emptyString;
        let convertedTemp = temp * 9 / 5 + 32;
        result.textContent = `${convertedTemp.toFixed(1)} °${fahrenheit}`;
    }
}

function changeTheme() {
    body.classList.toggle("dark")
}

convertBtn.addEventListener("click", convertTemp);

themeSwitch.addEventListener("click", changeTheme);