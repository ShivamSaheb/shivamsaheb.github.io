document.addEventListener("DOMContentLoaded", () => {

```
const audio = document.getElementById("bgMusic");
const enterButton = document.getElementById("enterButton");
const landing = document.getElementById("landing");
const about = document.getElementById("about");
const landingName = document.querySelector("#Site a");
const aboutName = document.querySelector("#AboutSite a");


/* =====================================================
   ENTER → START MUSIC + SCROLL TO ABOUT
   ===================================================== */

if (enterButton) {

    enterButton.addEventListener("click", (event) => {

        event.preventDefault();

        if (audio) {

            audio.volume = 0.8;

            const playPromise = audio.play();

            if (playPromise !== undefined) {

                playPromise.catch((error) => {

                    console.log(
                        "Audio playback blocked:",
                        error
                    );

                });

            }

        }

        if (about) {

            about.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =====================================================
   LANDING NAME → RETURN TO TOP
   ===================================================== */

if (landingName) {

    landingName.addEventListener("click", (event) => {

        event.preventDefault();

        if (landing) {

            landing.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =====================================================
   ABOUT NAME → RETURN TO TOP
   ===================================================== */

if (aboutName) {

    aboutName.addEventListener("click", (event) => {

        event.preventDefault();

        if (landing) {

            landing.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}
```

});
