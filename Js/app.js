const input1 = document.getElementById('color1');
const input2 = document.getElementById('color2');
const linearGradingTextInput = document.getElementById('linear-gradient-content');
const body = document.getElementById('gradient');
const copyButton = document.getElementById('copy-button');


const setGradient = () => {
    body.setAttribute('style', `background: linear-gradient(to right, ${input1.value} , ${input2.value})`);
    linearGradingTextInput.value = `linear-gradient(to-right, ${input1.value}, ${input2.value})`;
}

const copyLinearGradingHtml = ()=>{
    linearGradingTextInput.select();
    document.execCommand('copy');

}

input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);
copyButton.addEventListener('click', copyLinearGradingHtml);