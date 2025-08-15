// Function to remove background class (used for visual effect)
function about() {
    document.getElementsByClassName("bg")[0].setAttribute("class", "")
}

// This script triggers the 5-second redirect if user clicked the logo from About page
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fromAbout = params.get("from") === "about";

    if (fromAbout) {
        // Redirect to the root redirect page for countdown
        window.location.href = "../redirect.html?from=about";
    }
}
