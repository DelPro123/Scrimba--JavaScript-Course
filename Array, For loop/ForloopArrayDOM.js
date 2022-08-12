let sentence = ["Hello", "my", "name", "is", "Del"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(g=0; g<sentence.length;g++){
    
    greetingEl.innerText+=sentence[g] + " "
}
