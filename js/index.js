// Example function for background toggle
function about() {
    const bgElement = document.getElementsByClassName("bg")[0];
    bgElement.classList.toggle("active");
}

// Check URL parameters for countdown trigger
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fromAbout = params.get("from") === "about";

    if (fromAbout) {
        // Redirect to countdown page for 5-second wait
        window.location.href = "../redirect.html?from=about";
    }
}

// Additional site-specific JS can go here
