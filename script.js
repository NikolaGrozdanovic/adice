

const btn = document.getElementById('btn');
const number = document.getElementById('number');

btn.addEventListener('click', rollingDices);

function rollingDices() {
    let numbaz = [1, 2, 3, 4, 5, 6];
    let random = Math.floor(Math.random() * numbaz.length + 1);
    console.log(random);

    number.innerHTML = random;

}