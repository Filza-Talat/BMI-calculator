const weightInput = document.querySelector(".weight input");
const heightInput = document.querySelector(".height input");
const weightUnit = document.querySelector(".weight select");
const heightUnit = document.querySelector(".height select");
const ageInput = document.querySelector(".age input");
const genderInputs = document.querySelectorAll("input[name='gender']");
const  calBtn = document.querySelector(".cal");
const  resetBtn = document.querySelector(".reset");
const bmi= document.querySelector(".bmi");
const youAre = document.querySelector(".youare");
const resMsg = document.querySelector(".resmsg p");


calBtn.addEventListener("click", calculateBMI);
resetBtn.addEventListener("click",resetForm);
function calculateBMI(){
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);
    let wUnit = weightUnit.value;
    let hUnit = heightUnit.value;


        if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid height.");
        return;
    }
    if (ageInput.value === "" || ageInput.value <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    let genderSelected = false;
    genderInputs.forEach(g => {
        if (g.checked) genderSelected = true;
    });
    if (!genderSelected) {
        alert("Please select your gender.");
        return;
    }


    if(wUnit === "g"){
        weight = weight/1000;
    }
    if(hUnit === "cm"){
        height = height/100;
    }
    let bmires = weight / (height * height);
    bmires= bmires.toFixed(2);
    let category = "";
    let msg =""
    if (bmires < 18.5){
        category = "Underweight";
        msg="You should gain some healthy weight."
    }else if (bmires >= 18.5 && bmires < 25){
        category = "Healthy Weight";
        msg="Great! Maintain your healthy lifestyle."
    } else if (bmires >= 25 && bmires < 30){
        category = "Overweight";
        msg="You should try to lose some weight."
    }else {
        category = "Obese";
        msg="It’s important to lose weight for better health."
    }

    bmi.innerText=bmires;
youAre.innerText = category;
resMsg.innerText = msg;

}

function resetForm() {
    weightInput.value = "";
    heightInput.value = "";
    ageInput.value = "";
    weightUnit.value = "kg"; 
    heightUnit.value = "cm"; 


    genderInputs.forEach(gender => {
        gender.checked = false;
    });

    bmi.innerText = "";
    youAre.innerText = "";
    resMsg.innerText = "";
}
