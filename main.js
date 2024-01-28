document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to each navigation link
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            // Get the target section id from the link's href
            var targetId = this.getAttribute("href").substring(1);
            // Hide all content sections
            hideAllContent();
            // Show the target content section
            document.getElementById(targetId).style.display = "block";
        });
    });

    // Function to hide all content sections
    function hideAllContent() {
        var contentSections = document.querySelectorAll(".content");
        contentSections.forEach(function (section) {
            section.style.display = "none";
        });
    }
});
