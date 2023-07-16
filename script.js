const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');

calculateBtn.addEventListener('click', () => {
    const glasgowEyeValue = parseInt(document.getElementById('glasgow-eye').value);
    const glasgowVerbalValue = parseInt(document.getElementById('glasgow-verbal').value);
    const glasgowMotorValue = parseInt(document.getElementById('glasgow-motor').value);

    const totalScore = glasgowEyeValue + glasgowVerbalValue + glasgowMotorValue;

    displayResult(totalScore);
});

function displayResult(score) {
    const resultDiv = document.getElementById('result-container');
    resultDiv.innerHTML = `
        <h2>Resultado de la Escala de Glasgow</h2>
        <p>Puntuación Total: ${score}</p>
        <p>Interpretación:</p>
        <ul>
            <li>13-15: Leve</li>
            <li>9-12: Moderado</li>
            <li>3-8: Grave</li>
            <li>3: Estado de coma</li>
        </ul>
    `;

    resultDiv.style.display = 'block';
}



//footer
const name = "Herramientas utiles para Enfermeria!";
const typedTextElement = document.getElementById("typed-text");
const cursorElement = document.getElementById("cursor");

let index = 0;

function typeWriter() {
  if (index < name.length) {
    typedTextElement.textContent += name.charAt(index);
    index++;
    setTimeout(typeWriter, Math.random() * 200 + 100); // Añade un retraso aleatorio para simular la velocidad de escritura
  } else {
    cursorElement.style.display = "none"; // Oculta el cursor al finalizar la escritura
  }
}

typeWriter();
