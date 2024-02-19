document.addEventListener('DOMContentLoaded', () => {
    const persona = document.querySelector('.persona');
    const pipe = document.querySelector('.pipe');

    const jump = () => {
        persona.classList.add('jump');

        setTimeout(() => {
            persona.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {



        const pipePosition = pipe.offsetLeft;
        const personaPosition = +window.getComputedStyle(persona).bottom.replace('px', '');


        if (pipePosition <= 120 && pipePosition > 0 && personaPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            persona.style.animation = 'none';
            persona.style.bottom = `${personaPosition}px`;

            persona.src = './img/game-over.png';
            persona.style.width = '75px';
            persona.style.marginLeft = '50px';

            clearInterval(loop);

        }
    }, 10);

    document.addEventListener('keydown', jump);
});
