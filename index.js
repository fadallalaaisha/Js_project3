const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button) {
    button.addEventListener('click', function(a) {
        console.log(a.target);
        if (a.target.id == 'red') {
            body.style.backgroundColor = a.target.id;
        }
        if (a.target.id == 'yellow') {
            body.style.backgroundColor = a.target.id;
        }
        if (a.target.id == 'grey') {
            body.style.backgroundColor = a.target.id;
        }
        if (a.target.id == 'white') {
            body.style.backgroundColor = a.target.id;
        }
        if (a.target.id == 'blue') {
            body.style.backgroundColor = a.target.id;
        }

    })
})