document.addEventListener("DOMContentLoaded", () => {


    const audio =
        document.getElementById("bgMusic");


    const enterButton =
        document.getElementById("enterButton");


    const landing =
        document.getElementById("landing");


    const about =
        document.getElementById("about");


    const homeLink =
        document.querySelector("#Site a");


    const aboutHomeLink =
        document.querySelector("#AboutSite a");



    /* =====================================================
       ENTER → START MUSIC + MOVE TO ABOUT
       ===================================================== */

    enterButton.addEventListener("click", (event) => {

        event.preventDefault();


        /*
         * Start the music directly from the user's click.
         *
         * Because the audio element belongs to this page,
         * it will continue playing while the page scrolls.
         */

        if (audio) {

            audio.volume = 0.8;

            audio.play().catch((error) => {

                console.log(
                    "Audio playback blocked:",
                    error
                );

            });

        }


        /*
         * Mark the About section as active.
         */

        document.body.classList.add("about-visible");


        /*
         * Smoothly scroll to About.
         */

        about.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });



    /* =====================================================
       SHIVAM SAHEB → RETURN TO LANDING
       ===================================================== */

    homeLink.addEventListener("click", (event) => {

        event.preventDefault();


        document.body.classList.remove(
            "about-visible"
        );


        landing.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });



    /* =====================================================
       ABOUT SHIVAM SAHEB → RETURN TO LANDING
       ===================================================== */

    aboutHomeLink.addEventListener("click", (event) => {

        event.preventDefault();


        document.body.classList.remove(
            "about-visible"
        );


        landing.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


});
