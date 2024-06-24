// document.addEventListener("scroll", function() {
//     const topBarSection = document.querySelector('.top-bar');
//     const aboutSection = document.querySelector('.about');
//     const eduAndExpSection = document.querySelector('.eduAndExp');
//     const projectsSection = document.querySelector('.projects');
//     const eduTrigger = aboutSection.offsetTop + aboutSection.offsetHeight/2;
//     const projectsTrigger = eduAndExpSection.offsetTop/2 + eduAndExpSection.offsetHeight;
//     const charcol = "#1A1A1A";
//     const black = "#000000";


//     if (window.scrollY >= projectsTrigger) {
//         projectsSection.style.backgroundColor = black; // Transition to black
//         topBarSection.style.backgroundColor = black; // Transition to black
//     } else if (window.scrollY >= eduTrigger) {
//         eduAndExpSection.style.backgroundColor = charcol; // Transition to charcoal
//         projectsSection.style.backgroundColor = charcol; // Initially charcoal
//         topBarSection.style.backgroundColor = charcol; // Transition to charcoal
//     } else {
//         eduAndExpSection.style.backgroundColor = black; // Original color
//         projectsSection.style.backgroundColor = charcol; // Original color
//         topBarSection.style.backgroundColor = black; // Original color
//     }

// });

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function refreshPage() {
    window.location.reload();
}










