document.addEventListener("DOMContentLoaded", function () {
    const project = document.getElementById("project");

    const handleScroll = () => {
        const projectTop = project.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (projectTop < viewportHeight - 100) {
            // Add visible class when the project is near the viewport
            project.classList.add("visible");
        }
    };

    window.addEventListener("scroll", handleScroll);
});
