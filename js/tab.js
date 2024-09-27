// Get all tab links
const tabLinks = document.querySelectorAll('.tab-text-box');

// Add event listener to each tab link
tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Get the data-w-tab attribute of the clicked link
    const tabId = link.getAttribute('data-w-tab');

    // Remove w--tab-active class from all tab panes
    document.querySelectorAll('.w-tab-pane').forEach((pane) => {
      pane.classList.remove('w--tab-active');
    });

    // Add w--tab-active class to the tab pane corresponding to the clicked link
    document.querySelector(`.w-tab-pane[data-w-tab="${tabId}"]`).classList.add('w--tab-active');

    // Remove w--current class from all tab links
    document.querySelectorAll('.w-tab-link').forEach((link) => {
      link.classList.remove('w--current');
    });

    // Add w--current class to the clicked link
    link.classList.add('w--current');
  });
});