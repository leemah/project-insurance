const hamburgerMenu = document.getElementById('hamburger-menu');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.getElementById('sidebar');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


document.querySelectorAll('.tabs .tab a').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all buttons
        document.querySelectorAll('.tabs .tab a').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); // Add 'active' class to the clicked button

        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.classList.remove('active'));

        // Show the content corresponding to the clicked tab
        const activeTab = button.getAttribute('data-tab');
        document.getElementById(activeTab).classList.add('active'); // Show the target content
    });
});

