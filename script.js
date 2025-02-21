document.addEventListener("DOMContentLoaded", function () {
    const mainHeading = document.getElementById("main-heading");
    const nameHeading = document.getElementById("name-heading");
    const newTextElements = document.querySelectorAll(".new-text");
    const heart = document.getElementById("heart");
    const body = document.body;
    const valentinesCard = document.querySelector(".valentines-day-card");
    

    let delay = 2000; // Initial delay for text transitions

    // Function to fade out an element
    function fadeOut(element, nextDelay) {
        setTimeout(() => {
            element.style.animation = "fadeOut 1s forwards";
        }, nextDelay);
    }

    // Function to fade in an element
    function fadeIn(element, nextDelay) {
        setTimeout(() => {
            element.style.animation = "fadeInDelayed 2s ease-out forwards";
        }, nextDelay);
    }

    // Step 1: Fade out the first heading
    fadeOut(mainHeading, delay);
    fadeOut(nameHeading, delay);

    // Step 2: Loop through each new text, fading it in and out
    newTextElements.forEach((text, index) => {
        delay += 2000; // Delay for fade-in
        fadeIn(text, delay);

        delay += 3000; // Delay before fade-out
        fadeOut(text, delay);
    });

    // Step 3: Expand Heart (after last text fades out)
    setTimeout(() => {
        heart.style.opacity = "1"; // Make sure heart is visible
        heart.style.animation = "heartbeat 3s ease-in-out infinite, growHeart 5s ease-out forwards";
    }, delay + 2000);

    // Step 4: Background Change (as heart grows)
    setTimeout(() => {
        body.style.animation = "backgroundChange 5s ease-in-out forwards";
    }, delay + 5000);

    // Step 5: Hide heart and fade in the love letter card
    setTimeout(() => {
        heart.style.opacity = "0"; // Hide the heart smoothly
        valentinesCard.style.opacity = "1"; // Show the love letter
        valentinesCard.style.transform = "scale(1)"; // Ensure it's visible
        valentinesCard.style.transition = "opacity 2s ease-in-out, transform 1s ease-in-out";
    }, delay + 8000);
});
