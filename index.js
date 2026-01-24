function openHome() {
    window.location.href = "home.html";
}

const countDown = new Date("Jan 26, 2026 08:30:00").getTime();

const x = setInterval(function() {

    const now = new Date().getTime();

    const distance = countDown - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

    if(distance < 0) {

        clearInterval(x);

        document.getElementById("timer").innerHTML = "START";

        const video = document.getElementById("video");
        
        const img = document.getElementById("img");

        img.classList.add("hidden");

        video.classList.remove("hidden");

        video.currentTime = 0;

        video.play();

        video.addEventListener("pause", () => {

            video.play();
        });

        video.addEventListener("ended", () => {

            video.currentTime = 0;

            video.play();
        })
    }
}, 1000) 