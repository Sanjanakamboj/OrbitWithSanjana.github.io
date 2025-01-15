document.addEventListener("DOMContentLoaded", () => {
    const logoImg = document.querySelector(".logo-img");
    const gifPath = logoImg.getAttribute("data-gif");
    const staticPath = logoImg.getAttribute("data-static");

    // Temporarily set GIF
    logoImg.src = gifPath;

    // Switch to static image after 3 seconds (or GIF duration)
    setTimeout(() => {
        logoImg.src = staticPath;
    }, 3000); // Adjust duration based on the GIF length
});
