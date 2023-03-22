// prompts the user to enter the marks
let marks = prompt("Entermarks")
// function that receives the marks
function gradeGenerator(marks){
    if (marks>70){ 
    return grade="A";
    }
    else if(marks>60 && marks<=69){
        return grade="B";
    }
    else if(marks>49 && marks<=59){
        return grade="C";
    }
    else if(marks>40 && marks<=49){
        return grade="D";
    }
    else 
    return grade="E";
}
console.log (grade)