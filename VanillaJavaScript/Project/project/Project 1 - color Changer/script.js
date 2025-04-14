// for selection button
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

//for Selecting body
const bodys = document.querySelector('body');

// because we get nodeList we can operate with forEach()
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target)

        if(e.target.id === 'grey'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#fff';
        } else if(e.target.id === 'white'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#000000';
        } else if(e.target.id === 'blue'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#fff';
        } else if(e.target.id === 'yellow'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#000000';
        } else if(e.target.id === 'red'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#000000';
        } else if(e.target.id === 'silver'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#000000';
        } else if(e.target.id === 'purple'){
            bodys.style.backgroundColor = e.target.id;
            bodys.style.color = '#fff';
        }
    })
})

// normal function example method
// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
//     })
// })