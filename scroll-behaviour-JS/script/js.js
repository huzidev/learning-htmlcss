const skills = document.getElementById("skills-section");
const progress = document.querySelectorAll(".progress-bar");

function showProgress() {
    progress.forEach(progressBar => {
        const value = progressBar.dataset.progress;

    })
}


window.addEventListener("scroll", function () {
    const content = skills.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if (content < screen) {
        showProgress();
    }
    else{
    }
})