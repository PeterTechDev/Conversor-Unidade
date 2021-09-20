const libra = 0.45359237

let entry = document.querySelector("#kg")
const submitBtn = document.querySelector("button")
const result = document.getElementById('result')
const resultContainer = document.getElementById('result-container')

submitBtn.addEventListener('click', () => {
    //Verificar se está vazio
    if (entry.value == '') {
        alert('Favor informar algum valor')
        prevantDefault()
    }

    //Adicionar animação
    resultContainer.classList.remove('rotate')
    void resultContainer.offsetWidth;
    resultContainer.classList.add('rotate')

    // Realiza o calcula 
    let finalValue = parseFloat((entry.value * libra).toFixed(2))

    // Atribui o valor à div e troca o display
    result.innerHTML = finalValue;
    resultContainer.style.display = 'inline-flex'
    
    // reseta o entry
    entry.value = ''
})

// Descobri como restartar a animação usando void no css tricks
// https://css-tricks.com/restart-css-animation/