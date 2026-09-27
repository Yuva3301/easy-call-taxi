function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}


// Close mobile menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navMenu").classList.remove("active");
    });
});


// Simple booking greeting
document.querySelectorAll('a[href^="tel:"]').forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Easy Call Taxi - Calling 9384004244");
    });
});


// Add current year automatically
const yearElement = document.querySelector("footer p:last-child");

if (yearElement) {
    yearElement.innerHTML =
        "© " + new Date().getFullYear() +
        " Easy Call Taxi. All Rights Reserved.";
}