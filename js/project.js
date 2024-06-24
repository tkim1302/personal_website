let currentIndex = 0;

function slide(direction) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const projectCards = document.querySelectorAll('.project-card');
    const cardWidth = projectCards[0].offsetWidth + 60; // Card width + increased margin
    const totalCards = projectCards.length;

    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < totalCards - 1) {
        currentIndex++;
    } else if(currentIndex == totalCards - 1){
        currentIndex = 0;
    }

    const offset = (projectsWrapper.offsetWidth - cardWidth) / 2 - currentIndex * cardWidth;
    projectsWrapper.style.transform = `translateX(${offset}px)`;

    highlightFocusedCard();
}

function highlightFocusedCard() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });
}

setInterval(() => {
    slide('right');
}, 3000);


function updateVisibleCards() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const cardWidth = projectCards[0].offsetWidth + 60; // Card width + margin
    const totalCards = projectCards.length;

  

    // Center the next card
    const offset = (projectsWrapper.offsetWidth - cardWidth) / 2 - currentIndex * cardWidth;
    projectsWrapper.style.transform = `translateX(${offset - cardWidth/7}px)`;
}
updateVisibleCards();
highlightFocusedCard(); // Initial highlight

// Add this to your effect.js file or a new script file

document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".eduAndExp .container");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showContainers() {
        containers.forEach(container => {
            if (isElementInViewport(container)) {
                container.classList.add("show");
            }
        });
    }

    // Listen for scroll events
    window.addEventListener("scroll", showContainers);

    // Initial check in case the element is already in view
    showContainers();
});



// let currentIndex = 0;
// const intervalTime = 3000; // Interval time for automatic sliding

// function slide(direction) {
//     const projectsWrapper = document.querySelector('.projects-wrapper');
//     const projectCards = document.querySelectorAll('.project-card');
//     const totalCards = projectCards.length;

//     if (direction === 'left' && currentIndex > 0) {
//         currentIndex--;
//     } else if (direction === 'right' && currentIndex < totalCards - 1) {
//         currentIndex++;
//     } else if (direction === 'right' && currentIndex === totalCards - 1) {
//         currentIndex = 0; // Loop back to the first card
//     }

//     highlightFocusedCard();
// }

// function highlightFocusedCard() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const projectsContainer = document.querySelector('.projects-container');

//     projectCards.forEach((card, index) => {
//         if (index === currentIndex) {
//             card.classList.add('highlight');
//             projectsContainer.style.backgroundImage = `url(${card.dataset.background})`;
//             projectsContainer.style.backgroundSize = 'cover';
//             projectsContainer.style.backgroundPosition = 'center';
//         } else {
//             card.classList.remove('highlight');
//         }
//     });
// }

// setInterval(() => {
//     slide('right');
// }, intervalTime);

// highlightFocusedCard(); // Initial highlight


// let currentIndex = 0;
// const intervalTime = 3000; // Interval time for automatic sliding

// function slide(direction) {
//     const projectsWrapper = document.querySelector('.projects-wrapper');
//     const projectCards = document.querySelectorAll('.project-card');
//     const totalCards = projectCards.length;

//     if (direction === 'left' && currentIndex > 0) {
//         currentIndex--;
//     } else if (direction === 'right' && currentIndex < totalCards - 1) {
//         currentIndex++;
//     } else if (direction === 'right' && currentIndex === totalCards - 1) {
//         currentIndex = 0; // Loop back to the first card
//     }

//     highlightFocusedCard();
//     updateVisibleCards();
// }

// function highlightFocusedCard() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const projectsContainer = document.querySelector('.projects-container');

//     projectCards.forEach((card, index) => {
//         if (index === currentIndex) {
//             card.classList.add('highlight');
//             projectsContainer.style.backgroundImage = `url(${card.dataset.background})`;
//             projectsContainer.style.backgroundSize = 'cover';
//             projectsContainer.style.backgroundPosition = 'center';
//         } else {
//             card.classList.remove('highlight');
//         }
//     });
// }

// function updateVisibleCards() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const projectsWrapper = document.querySelector('.projects-wrapper');
//     const cardWidth = projectCards[0].offsetWidth + 60; // Card width + margin
//     const totalCards = projectCards.length;

//     projectCards.forEach((card, index) => {
//         if (index <= currentIndex) {
//             card.style.visibility = 'hidden'; // Hide the focused and previous cards
//         } else {
//             card.style.visibility = 'visible'; // Show the next cards
//         }
//     });

//     // Center the next card
//     const offset = (projectsWrapper.offsetWidth - cardWidth) / 2 - currentIndex * cardWidth;
//     projectsWrapper.style.transform = `translateX(${offset}px)`;
// }

// setInterval(() => {
//     slide('right');
// }, intervalTime);

// highlightFocusedCard(); // Initial highlight
// updateVisibleCards(); // Initial update of card visibility


// let currentIndex = 0;
// const intervalTime = 3000; // Interval time for automatic sliding

// function slide(direction) {
//     const projectsWrapper = document.querySelector('.projects-wrapper');
//     const projectCards = document.querySelectorAll('.project-card');
//     const totalCards = projectCards.length;

//     if (direction === 'left' && currentIndex > 0) {
//         currentIndex--;
//     } else if (direction === 'right' && currentIndex < totalCards - 1) {
//         currentIndex++;
//     } else if (direction === 'right' && currentIndex === totalCards - 1) {
//         currentIndex = 0; // Loop back to the first card
//     }

//     highlightFocusedCard();
//     updateVisibleCards();
//     updateBackgroundText();
// }

// function highlightFocusedCard() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const projectsContainer = document.querySelector('.projects-container');

//     projectCards.forEach((card, index) => {
//         if (index === currentIndex) {
//             card.classList.add('highlight');
//             projectsContainer.style.backgroundImage = `url(${card.dataset.background})`;
//             projectsContainer.style.backgroundSize = 'cover';
//             projectsContainer.style.backgroundPosition = 'center';
//         } else {
//             card.classList.remove('highlight');
//         }
//     });
// }

// function updateVisibleCards() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const projectsWrapper = document.querySelector('.projects-wrapper');
//     const cardWidth = projectCards[0].offsetWidth + 60; // Card width + margin
//     const totalCards = projectCards.length;

//     projectCards.forEach((card, index) => {
//         if (index <= currentIndex) {
//             card.style.visibility = 'hidden'; // Hide the focused and previous cards
//         } else {
//             card.style.visibility = 'visible'; // Show the next cards
//         }
//     });

//     // Center the next card
//     const offset = (projectsWrapper.offsetWidth - cardWidth) / 2 - currentIndex * cardWidth;
//     projectsWrapper.style.transform = `translateX(${offset - cardWidth/2}px)`;
// }

// function updateBackgroundText() {
//     const projectCards = document.querySelectorAll('.project-card');
//     const backgroundTitle = document.querySelector('.background-title');
//     const backgroundDescription = document.querySelector('.background-description');

//     projectCards.forEach((card, index) => {
//         if (index === currentIndex) {
//             backgroundTitle.textContent = card.querySelector('.card-title').textContent;
//             backgroundDescription.textContent = card.dataset.description;
//         }
//     });
// }

// setInterval(() => {
//     slide('right');
// }, intervalTime);

// highlightFocusedCard(); // Initial highlight
// updateVisibleCards(); // Initial update of card visibility
// updateBackgroundText(); // Initial update of background text

