
let convertBtn = document.getElementById("convert-btn")





convertBtn.addEventListener("click", function(){
    let input = document.getElementById("value-input").value
    let lengthText = document.getElementById("length-text")
    let volumeText = document.getElementById("volume-text")
    let massText = document.getElementById("mass-text")


    lengthText.textContent = input + " feet" + " = " + (input * 3.28).toFixed(3) + " metres" 
                    + " | " + input + " metres " + " = " + (input / 3.28).toFixed(3) + " feet"

    volumeText.textContent = input + " litres" + " = " + (input * 0.264).toFixed(3) + " gallons" 
                    + " | " + input + " gallons " + " = " + (input * 3.785).toFixed(3) + " litres"
    
    massText.textContent = input + " kilograms" + " = " + (input * 2.204).toFixed(3) + " pounds" 
                    + " | " + input + " pounds " + " = " + (input / 2.204).toFixed(3) + " kilograms"                

   
})

