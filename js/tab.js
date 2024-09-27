document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.w-tab-link');
    const contents = document.querySelectorAll('.w-tab-content');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Remove active class from all tabs and content
        tabs.forEach(t => t.classList.remove('w--current'));
        contents.forEach(c => c.style.display = 'none');
  
        // Add active class to the clicked tab and display its content
        tab.classList.add('w--current');
        contents[index].style.display = 'block';
      });
    });
  });
  