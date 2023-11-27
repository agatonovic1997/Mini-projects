var currentExpression = '';
var twoID;

function appendToTextarea(value) {
    var resultInput = document.getElementById('resultTextarea');

    if (currentExpression === '0' && value !== '.') {
        currentExpression = value;
    } else {
        currentExpression += value;
    }

    resultInput.value = currentExpression;

}

function toggleSign() {
    var resultInput = document.getElementById('resultTextarea');

    if (currentExpression === '') {
        currentExpression = '-';
        resultInput.value = currentExpression;
    } else {

        if (currentExpression.charAt(0) === '-') {
            currentExpression = currentExpression.slice(1);
        } else {
            currentExpression = '-' + currentExpression;
        }
        resultInput.value = currentExpression;
    }
}

function clearTextarea() {
    var resultInput = document.getElementById('resultTextarea');
    var resultInput_2 = document.getElementById('expressionTextarea');
    resultInput_2.value = '';
    resultInput.value = '';
    currentExpression = '';
}

function calculateResult() {
    var resultTextarea = document.getElementById('resultTextarea');
    twoID = document.getElementById('expressionTextarea');
    twoID.value = currentExpression;
    try {
        var result = eval(currentExpression);

        if (isNaN(result)) {
            throw new Error('Izraz nije validan matematički izraz.');
        }

        resultTextarea.value = result;
        currentExpression = '';

    } catch (error) {
        console.error('Greška prilikom evaluacije:', error);
        resultTextarea.value = 'Error';
    }
}

// Funkcija za promenu boje kalkulatora

function toggleColor() {
    var calculator = document.querySelector('.calculator');
    var col_elements_3 = document.querySelectorAll('.change-class');
    var col_elements_6 = document.querySelectorAll('.change-class');
    var textarea_1 = document.querySelector('#expressionTextarea');
    var textarea_2 = document.querySelector('#resultTextarea');
    var img = document.querySelector('img');

    var img = document.getElementById('toggleImage');

    var isImageWhite = img.classList.contains('white-image');

    if (isImageWhite) {
        calculator.style.backgroundColor = 'rgb(34, 35, 41)';

        col_elements_3.forEach(function (element) {
            element.style.backgroundColor = 'rgb(34, 35, 41)';
            element.style.color = 'rgb(255, 255, 255)';
            element.style.boxShadow = '0 0 10px rgb(255, 255, 255)';
            textarea_1.style.backgroundColor = 'rgb(34, 35, 41)';
            textarea_2.style.backgroundColor = 'rgb(34, 35, 41)';
            img.style.backgroundColor = 'rgb(34, 35, 41)';
            img.style.color = 'rgb(255, 255, 255)';
        });

        col_elements_6.forEach(function (element) {
            element.style.backgroundColor = 'rgb(34, 35, 41)';
            element.style.color = 'rgb(255, 255, 255)';
            element.style.boxShadow = '0 0 10px rgb(255, 255, 255)';
        });

        img.classList.remove('white-image');
    } else {
        calculator.style.backgroundColor = 'rgb(255, 255, 255)';

        col_elements_3.forEach(function (element) {
            element.style.backgroundColor = 'rgb(255, 255, 255)';
            element.style.color = 'rgb(34, 35, 41)';
            element.style.boxShadow = '0 0 10px rgb(34, 35, 41)';
            textarea_1.style.backgroundColor = 'rgb(255, 255, 255)';
            textarea_2.style.backgroundColor = 'rgb(255, 255, 255)';

        });

        col_elements_6.forEach(function (element) {
            element.style.backgroundColor = 'rgb(255, 255, 255)';
            element.style.color = 'rgb(34, 35, 41)';
            element.style.boxShadow = '0 0 10px rgb(34, 35, 41)';
        });

        img.classList.add('white-image');
    }
}

document.getElementById('toggleImage').addEventListener('click', toggleColor);
