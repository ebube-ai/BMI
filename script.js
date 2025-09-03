//let us create our variables
var firstName = document.querySelector("#firstname");
var lastname = document.querySelector("#lastname");
var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var button = document.querySelector(".btn");
var result = document.querySelector(".result");

//let's calculate the BMI value
var bmiValue = weight.value / (height.value * height.value);

//let us add an event list to the button
button.addEventListener("click", CalculateBMI);

//Let us declare the function
function CalculateBMI(){
    //let us create our variables
    var firstName = document.querySelector("#firstname");
    var lastname = document.querySelector("#lastname");
    var height = document.querySelector("#height");
    var weight = document.querySelector("#weight");
    var result = document.querySelector(".result");

    //let's calculate the BMI value
    var bmiValue = weight.value / (height.value * height.value);  

    //LET'S SET THE BMI VALUE TO 2 DECIMAL PLACES
    bmiValue = bmiValue.toFixed(1); 

    //LET'S CREATE FORM VALIDATION
    if(firstName.value == "" || lastname.value == "" || height.value == "" || weight.value == ""){
        setTimeout(() => {
            result.innerHTML = "Please fill in all sections"
            setTimeout(()=>{
                result.innerHTML = ""
            },3000)
        },100)
    } else {
        if(bmiValue < 18.5){
            result.innerHTML = firstName.value + " " + lastname.value + ", your BMI value is " + bmiValue + "kg/m<sup>2</sup>" + " Your BMI falls under the underweight category, Try Eating more frequently. Slowly begin to eat 5 to 6 smaller meals during the day, While Choosing food with lots of nutrients. You can as well see your Doctor for further directives."
            result.style.color = "red";
        } else if(bmiValue >=18.5 && bmiValue <=24.9){
            result.innerHTML = "Your BMI value is " + bmiValue + "kg/m<sup>2</sup>" + " Your BMI falls under the healthy category, focus on maintaining your healthy habits by regular physical activity, a balanced diet rich in fruits, vegetables, and whole grains, mindful eating."
            result.style.color ="green";
        } else if(bmiValue >=25 && bmiValue <=29.9){
            result.innerHTML = "Your BMI value is" + bmiValue + "kg/m<sup>2</sup>" + " Your BMI falls under the overweight category, Try Getting more physical activity or exercise, Consider making some lifestyle choices, nutriton-wise." 
            result.style.color = "orange"
        } else if(bmiValue >=30){
            result.innerHTML = "Your BMI value is" + bmiValue +  "kg/m<sup>2</sup>" + " Your BMI value falls under the obese category, Adopt healthy habits, such as eating more fruits and vegetables or being more physically active. Consult your physcian for more support."
            result.style.color = "red";
        }
    }
}