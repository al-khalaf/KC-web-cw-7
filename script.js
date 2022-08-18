function BMI(weight, height){
    result = weight/ (height*height)
    return result
}

console.log(BMI(95,175))
console.log(BMI(90,175))
console.log(BMI(92,175))
console.log(BMI(93,175))
console.log(BMI(94,175))

var identifier = 0
function Status(bmi){
    if (bmi<18.5){
        identifier = 1
        return("Below Weight")
    }
    else if (bmi>=18.5 && bmi<25){    
        identifier = 2
        return("Perfect Weight!!")
    }
    else if (bmi>=25){ 
       identifier = 3
        return("OverWeighted")
    }
}

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = BMI(weight, height)
    let desc = Status(bmi)
    let div = document.getElementById('result')
    div.innerText = bmi + " == " + desc
    if (identifier==1){
        div.style.color = "orange"
    }
    else if (identifier==2){
        div.style.color = "green"
    }
    else if (identifier==3){
        div.style.color = "red"
    }
}   

