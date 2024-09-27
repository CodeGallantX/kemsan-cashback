document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".w-tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();

            // Remove the current class from all tabs and contents
            tabs.forEach(t => t.classList.remove("w--current"));
            contents.forEach(c => c.classList.remove("active"));

            // Add the current class to the clicked tab and the corresponding content
            this.classList.add("w--current");
            const activeTab = this.getAttribute("data-w-tab");
            document.querySelector(`.tab-content[data-tab="${activeTab}"]`).classList.add("active");
        });
    });
});
