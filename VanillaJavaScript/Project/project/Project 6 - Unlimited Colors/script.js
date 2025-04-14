// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChangingColor = function(){
    if (!intervalId) { // Only start if no interval is running
        intervalId = setInterval(changeBgColor, 1000);

        function changeBgColor() {
            document.body.style.backgroundColor = randomColor();
        }
    }
}

const stopChangingColor = function(){
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // Reset intervalId to allow restarting
    }
}

// Attach the correct event listeners to the buttons
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
