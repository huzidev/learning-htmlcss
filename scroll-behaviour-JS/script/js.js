const skills = document.getElementById("skills-section");
const progress = document.querySelectorAll(".progress-bar");

function showProgress() {
    progress.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width =  `${value}%`;
    });
};
function hideProgress() {
    progress.forEach(p => {
        p.style.opacity = 0;

    })
}

window.addEventListener("scroll", function () {
    const content = skills.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if (content < screen) {
        showProgress();
    }
    else{
        hideProgress();
    }
});