const celsiusField = document.querySelector("#celcius"); 
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // Add loading feature
    convertBtn.innerHTML = '<span><i class="fa fa-spinner fa-spin"></i> Converting...</span>';
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>"; 
    }, 1000);
});

function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg; C`;
        }
    }, 1200);
}