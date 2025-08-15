// Function to remove background class (visual effect)
function about() {
    document.getElementsByClassName("bg")[0].setAttribute("class", "")
}

// Redirect countdown only if user clicked logo from About page
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fromAbout = params.get("from") === "about";

    if (fromAbout) {
        window.location.href = "../redirect.html?from=about";
    }
}
