// JavaScript to show/hide scroll-to-top button
const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//END OF JAVASCRIPT FOR SCROLL TO TOP BUTTON


// START OF JAVASCRIPT FOR POP UPS IN SERVICES //
document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".popup-cancel");

    popupLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const popupId = this.getAttribute("data-popup-target");
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = "block";
            }
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const popup = this.closest(".popup");
            if (popup) {
                popup.style.display = "none";
            }
        });
    });

    // Close pop-ups when clicking outside
    window.addEventListener("click", function (e) {
        popups.forEach(function (popup) {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});

// END OF JAVASCRIPT FOR POP UPS IN SERVICES //

// Function to open the license agreement pop-up
function openLicenseAgreementPopup() {
    document.getElementById("license-agreement-popup").style.display = "flex";
}

// Function to close the license agreement pop-up
function closeLicenseAgreementPopup() {
    document.getElementById("license-agreement-popup").style.display = "none";
}

// Add an event listener to the "LICENSE AGREEMENT" link to open the pop-up
document.querySelector(".open-license-popup").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    openLicenseAgreementPopup();
});

// Add an event listener to close the pop-up when clicking outside
document.querySelector(".license-popup-background").addEventListener("click", function (e) {
    if (e.target === this) {
        closeLicenseAgreementPopup();
    }
});





