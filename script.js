document.addEventListener("DOMContentLoaded", function() {
    var contactBtn = document.getElementById('contact-btn');
    var contactBtn1 = document.querySelector('.contact')

    if (contactBtn, contactBtn1) {
        contactBtn.addEventListener("click", function() {
            console.log("Button clicked!");

             window.scrollTo({
                top: 2150,
                behavior: 'smooth'
            });
        });

        contactBtn1.addEventListener("click", function() {
            console.log("Button clicked!");

             window.scrollTo({
                top: 2150,
                behavior: 'smooth'
            });
        });
    } else {
        console.log("Contact button not found!");
    }
});

document.addEventListener("click", function() {
    var projectBtn = document.querySelector('.projects-btn');

    if(projectBtn) {
        projectBtn.addEventListener("click", function() {
            console.log("button clicked!");

            window.scrollTo({
                top: 900,
                behavior: 'smooth'
            });
        });
    } else {
        console.log("project button not found!")
    }
});


document.addEventListener("click", function() {
    var homeBtn = document.querySelector('.home');
    var aboutBtn = document.querySelector('.about');


    if(homeBtn, aboutBtn) {
        homeBtn.addEventListener("click", function() {
            console.log("button clicked!");

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        aboutBtn.addEventListener("click", function() {
            console.log("button clicked!");

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.log("project button not found!")
    }
});


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, { duration: 500, fill: "forwards" });

});