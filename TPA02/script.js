let heightInput = document.querySelector(".height-input")
let weightInput = document.querySelector(".weight-input")
let calculate = document.querySelector(".calculate-btn")
let result = document.querySelector(".result")
let BMI, height, weight


calculate.addEventListener("click",()=>{
    height=heightInput.value
    weight=weightInput.value
    BMI=(weight/((height/100)**2)).toFixed(2)

    if(BMI < 18.5){
        result.innerHTML="Your BMI is "+BMI+" which means your weight is Underweight";
        console.log("Underweight");
    }else if((BMI > 18.5)&&(BMI<24.9)){
        result.innerHTML="Your BMI is "+BMI+" which means your weight is Normal";
        console.log("Normal Weight");
    }else if((BMI>25)&&(BMI<29.9)){
        result.innerHTML="Your BMI is "+BMI+" which means your weight is Overweight";
        console.log("Overweight");
    }else{
        result.innerHTML="Your BMI is "+BMI+" which means your weight is Obesity";
        console.log("Obesity");
    }
})
console.log('Nama Saya Firdaus Kuncoro Ramadhani');