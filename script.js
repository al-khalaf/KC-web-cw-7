function BMI(weight, height){
    result = weight/ (height*height)
    return result
}

console.log(BMI(95,175))

function Status(bmi){
    if (bmi<18.5){
        return("Below Weight")
    }
    else if (bmi>=18.5 && bmi<25){
        return("Perfect Weight!!")
    }
    else if (bmi>=25){
        return("OverWeighted")
    }
}

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = BMI(weight, height)
    let desc = Status(bmi)
    let div = document.getElementById('result')
    div.innerTEXT = bmi + " == " + desc
}   

