// Function to remove background class
function about() {
    document.getElementsByClassName("bg")[0].setAttribute("class", "");
}

// 5-second redirect if logo clicked from About page
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") === "about") {
        window.location.href = "../redirect.html?from=about";
    }
}
