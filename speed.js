const form = document.getElementById("form");
const pointsDisplay = document.getElementById("points");
const speedDisplay = document.getElementById("speedDisplay");
const speedInput=document.getElementById("speed");

form.addEventListener("submit",function(event){
    event.preventDefault();

const speedInputValue = speedInput.value
pointsDisplay.innerHTML = speedDetector(speedInputValue);
})


function speedDetector(speed){
   
   let points = 0;
    if (speed<70){ 
    return "Ok";
    }
    else if(speed>70){
        points = Math.floor((speed-70)/5)
        return points
    }
     if(points>12){
     return"License suspended"
    
    }
}
console.log(speedDetector(45))