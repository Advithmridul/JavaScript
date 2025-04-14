const dice = () => {
    const min = 1;
    const max = 6;
    const diceElement = document.getElementById('diceResult');

    // Add animation class to trigger the rolling effect
    diceElement.style.animation = "roll 0.6s ease-in-out";

    // After the animation ends, update the dice number
    setTimeout(() => {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        diceElement.textContent = result;
        // Remove the animation once it finishes
        diceElement.style.animation = "none";
    }, 600);
}


// console.log(Math.floor((Date.now()/1000)/60/60))  Date in hrs