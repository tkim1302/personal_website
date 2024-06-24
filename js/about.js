const introduction = [
    "A frontend Developer.",
    "A passionate coder.",
    "A creative problem solver.",
    "A supportive team player.",
];

function updateIntroduction() {
    const introElement = document.querySelector('.introduction');
    const randomIntro = introduction[Math.floor(Math.random() * introduction.length)];
    introElement.textContent = randomIntro;
}

function firstIntro() {
    const introElement = document.querySelector('.introduction');
    introElement.textContent = introduction[0];
}

setTimeout(firstIntro, 1500);

setTimeout(() =>{
    updateIntroduction();
    setInterval(updateIntroduction, 4000);
},3500);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.about-bg').classList.add('visible'); // Changed to target the background div
    }, 3000); // 2 seconds delay
});






