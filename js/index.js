```javascript
document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("bgMusic");

    const enterButton = document.getElementById("enterButton");

    const landing = document.getElementById("landing");

    const about = document.getElementById("about");

    const landingName = document.querySelector("#Site a");

    const aboutName = document.querySelector("#AboutSite a");


    /* =====================================================
       ENTER → START MUSIC + SCROLL TO ABOUT
       ===================================================== */

    enterButton.addEventListener("click", (event) => {

        event.preventDefault();


        /*
         * The music begins directly from the user's click.
         * Because this audio element belongs to the same page,
         * it continues playing during the scroll.
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


        document.body.classList.add("about-visible");


        about.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    /* =====================================================
       LANDING NAME → RETURN TO TOP
       ===================================================== */

    landingName.addEventListener("click", (event) => {

        event.preventDefault();

        document.body.classList.remove("about-visible");

        landing.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    /* =====================================================
       ABOUT NAME → RETURN TO TOP
       ===================================================== */

    aboutName.addEventListener("click", (event) => {

        event.preventDefault();

        document.body.classList.remove("about-visible");

        landing.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
```
