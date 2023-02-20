// Recuperando as referências dos ponteiros
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Buscar hora atual
const getTime = () => {
    // Estamos instanciado o objeto Date()
    const date = new Date();
    // Recuperando Horas, Minutos e Segundos
    const obj = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
    // Retornando o Objeto para recuperar o horário
    return obj;
}

// Criar um loop que vai ficar rodando a cada segundo
setInterval(() => {

    secondHand.style.transform = `translate(0, -50%) rotate(${getTime().seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${getTime().minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${getTime().hours * 30}deg)`;

}, 1000); // A cada intervalo de tempo nós vamos executar uma função