function getInputs() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    return { input1, input2 };
}

function Addition() {
    const { input1, input2 } = getInputs();
    const result = input1 + input2;
    document.getElementById('Ans').innerText ="Result:-"+result;
}

function Subtraction() {
    const { input1, input2 } = getInputs();
    const result = input1 - input2;
    document.getElementById('Ans').innerText = "Result:-"+result;
}

function Multiplication() {
    const { input1, input2 } = getInputs();
    const result = input1 * input2;
    document.getElementById('Ans').innerText = "Result:-"+result;
}

function Division() {
    const { input1, input2 } = getInputs();
    if (input2 === 0) {
        document.getElementById('Ans').innerText = 'Error: Division by zero';
    } else {
        const result = input1 / input2;
        document.getElementById('Ans').innerText = "Result:-"+result;
    }
}