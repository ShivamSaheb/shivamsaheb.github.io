document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("bgMusic");
    const enterButton = document.getElementById("enterButton");

    /*
     * ------------------------------------------------
     * ENTER BUTTON
     * ------------------------------------------------
     *
     * Audio ONLY begins when ENTER is clicked.
     *
     * The current playback position is saved so that
     * about.html can continue the same track.
     */

    if (enterButton && audio) {

        enterButton.addEventListener("click", (event) => {

            event.preventDefault();

            const destination = enterButton.href;

            audio.volume = 0.8;

            /*
             * Start the music immediately from the user's
             * click. This satisfies browser autoplay rules
             * because the play() call is inside the click.
             */

            audio.play()
                .then(() => {

                    /*
                     * Store that music has been started.
                     */

                    sessionStorage.setItem(
                        "musicPlaying",
                        "true"
                    );

                    /*
                     * Save the current playback position.
                     */

                    sessionStorage.setItem(
                        "musicTime",
                        audio.currentTime.toString()
                    );

                    /*
                     * Begin visual transition.
                     */

                    document.body.classList.add("leaving");

                    /*
                     * Navigate after the fade begins.
                     */

                    setTimeout(() => {

                        /*
                         * Save the position one final time
                         * immediately before navigation.
                         */

                        sessionStorage.setItem(
                            "musicTime",
                            audio.currentTime.toString()
                        );

                        window.location.href = destination;

                    }, 700);

                })
                .catch((error) => {

                    console.log(
                        "Audio playback failed:",
                        error
                    );

                    /*
                     * Still allow navigation if audio
                     * cannot be played.
                     */

                    document.body.classList.add("leaving");

                    setTimeout(() => {

                        window.location.href = destination;

                    }, 700);

                });

        });

    }

});
