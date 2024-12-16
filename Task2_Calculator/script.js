let input = '';
let result = 0;

document.querySelectorAll(".button").forEach((btn) => {
    btn.addEventListener("click", function () {
        const value = this.dataset.value;
        if (value === 'C') {
            clearInput();
        } else if (value === '=') {
            calculate();
        } else if (value === 'X'){
            clearLastCharacter();
        } else {
            input += value;
            updateDisplay(input);
        }
    });
});

function clearInput() {
    input = '';
    result = 0;
    updateDisplay('0');
}

function clearLastCharacter() {
    input = input.slice(0, -1);
    if (!input){
        updateDisplay(0);
    } else{ 
        updateDisplay(input);
    }
}

function calculate() {
    try{
        result = eval(input);
        updateDisplay(result);
        input = result.toString();
    } catch(err){
        updateDisplay("Error...")
    }
}

function updateDisplay(value) {
    document.querySelector('#display').innerText = value;
}