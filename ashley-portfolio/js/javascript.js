let message="Frontend Developer";
let i=0;

function typing() {
    if(i<message.length){
        document.getElementById("text").innerHTML+=message.charAt(i);
        i++;
        setTimeout(typing,100)
    }
}
typing();

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".fill");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    bars.forEach(bar => {
        observer.observe(bar);
    });
});

