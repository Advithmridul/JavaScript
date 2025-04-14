// const clock = document.querySelector('#clock');  we canuse this also but just for change we will use
const clock = document.getElementById('clock');

// setInterval( () => {
//     let date = new Date;
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)

// setInterval( function(){
//     let date = new Date;
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)

setInterval(() => {
    let date = new Date();
    
    // Get the time in 12-hour format with AM/PM
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    clock.innerHTML = date.toLocaleTimeString('en-US', options);
}, 1000);
