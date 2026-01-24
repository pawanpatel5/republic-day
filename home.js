function openAbout() {
    window.location.href = "about.html";
} 
 
function openRepublic() {
    window.location.href = "republic.html";
}

function openPreamble() {
    window.location.href = "preamble.html";
}

function openConstitution() {
    window.location.href = "constitution.html";
}

function openLeaders() {
    window.location.href = "leader.html";
}

function openRight() {
    window.location.href = "right.html";
}

function openDuties() {
    window.location.href = "duties.html";
}

function openQuiz() {
    window.location.href = "quiz.html";
}

document.querySelectorAll('video, audio').forEach((media) => {
    media.addEventListener('play', () => {
        document.querySelectorAll('video, audio').forEach((m) => {
            if (m !== media) m.pause();
        });
    });
});
