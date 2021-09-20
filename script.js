const libra = 0.45359237

let entry = document.querySelector("#kg")
const submitBtn = document.querySelector("button")
const result = document.getElementById('result')

submitBtn.addEventListener('click', () => {
    if (entry.value == '') {
        alert('Favor informar algum valor')
        prevantDefault()
    }
    result.innerText = (entry.value * libra).toFixed(2) + "kg";
    entry.value = ''
})