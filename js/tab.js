<script>
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.w-tab-link');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove the active class from all tabs
            tabs.forEach(t => t.classList.remove('w--current'));
            
            // Add the active class to the clicked tab
            tab.classList.add('w--current');
            
            // Hide all content sections
            const tabContent = document.querySelectorAll('.tab-content');
            tabContent.forEach(content => content.style.display = 'none');
            
            // Show the corresponding content section
            const targetTab = tab.getAttribute('data-w-tab');
            document.querySelector(`#${targetTab}`).style.display = 'block';
        });
    });

    // Optionally, activate the first tab on page load
    tabs[0].click();
});
</script>
