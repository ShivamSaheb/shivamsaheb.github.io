document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("bgMusic");
    const enterButton = document.getElementById("enterButton");

    /*
     * ------------------------------------------------
     * AUDIO
     * ------------------------------------------------
     *
     * Browsers generally block automatic audio playback.
     * We therefore start PER.mp3 after the user's first
     * interaction with the page.
     */

    function startAudio() {

        if (!audio) return;

        audio.volume = 0.8;

        audio.play().catch(() => {
            console.log("Audio playback requires user interaction.");
        });

        document.removeEventListener("click", startAudio);
        document.removeEventListener("keydown", startAudio);
    }

    document.addEventListener("click", startAudio);
    document.addEventListener("keydown", startAudio);


    /*
     * ------------------------------------------------
     * ENTER TRANSITION
     * ------------------------------------------------
     *
     * When ENTER is clicked, fade the entire landing
     * page to black before navigating.
     */

    if (enterButton) {

        enterButton.addEventListener("click", (event) => {

            event.preventDefault();

            const destination = enterButton.href;

            document.body.classList.add("leaving");

            setTimeout(() => {

                window.location.href = destination;

            }, 700);

        });

    }

});
