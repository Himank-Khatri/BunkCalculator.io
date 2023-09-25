const classes_per_week = document.getElementById("classes-per-week");
const academic_weeks = document.getElementById("academic-weeks");
const current_attendance_percentage = document.getElementById("current-attendance-percentage");
const required_percentage = document.getElementById("required-percentage");
const classes_conducted_yet = document.getElementById("classes-conducted-yet");

const button = document.getElementById("calculate-button");
const output = document.getElementsByClassName("output")
const lty_output = document.getElementById("lty");
const lr_output = document.getElementById("lr");



button.addEventListener("click", function(){

    const cpw = classes_per_week.value;
    const aws = academic_weeks.value;
    const tc = cpw*aws;

    const cap = current_attendance_percentage.value;
    const rp = required_percentage.value;
    const ccy = classes_conducted_yet.value;

    const la = Math.floor(((100-rp)/100)*tc);
    const lty = Math.round(((100-cap)/100)*ccy);
    const lr = la-lty;


    if((tc>=0) && (rp<=100) && (ccy>=0) && (cap>=0)){
        lty_output.textContent = `You have missed ${lty} hours yet`;

        if (lr>0){
            lr_output.textContent = `You can miss ${lr} more hours to maintain ${rp}% attendance`;    
        }else if(lr===0){
            lr_output.textContent = `You need to attend all the classes to maintain ${rp}% attendance`;        
        }else{
            lr_output.textContent = `You can't maintain ${rp}% attendance even if you attend all classes`;
        };

    }else{
        lty_output.textContent = "Invalid Input";
    };

    for(i=0; i<output.length; i++){
        output[i].style.display = "flex";
    }

    console.log("total leaves allowed: "+la);
    console.log("leaves taken yet: "+lty);
    console.log("leaves remaining: "+lr+"\n");
});