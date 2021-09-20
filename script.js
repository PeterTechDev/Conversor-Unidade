const libra = 0.45359237

let entry = document.querySelector("#kg")
const submitBtn = document.querySelector("button")
const result = document.getElementById('result')

submitBtn.addEventListener('click', () => {
    if (entry.value == '') {
        alert('Favor informar algum valor')
        prevantDefault()
    }
    result.classList.remove('rotate')
    void result.offsetWidth;
    result.classList.add('rotate')
    result.innerText = (entry.value * libra).toFixed(2) + "kg";
    entry.value = ''
})

// Descobri como restartar a animação usando void no css tricks
// https://css-tricks.com/restart-css-animation/