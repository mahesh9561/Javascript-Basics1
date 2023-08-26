// console.log(Math.random());

const randomColor = function () {
    let color = '#';
    const hex = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

let intercvalId;
const stratchangeColor = function () {
    if(!intercvalId){
        intercvalId = setInterval(changeColor, 1000)
    }

    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopchangeColor = function () {
    clearInterval(intercvalId);
    intercvalId = null;
}

document.querySelector('#start').addEventListener('click', stratchangeColor)
document.querySelector('#stop').addEventListener('click', stopchangeColor)