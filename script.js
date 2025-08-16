// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});



const previewDiv = document.getElementById('floating-pdf-preview');
const previewIframe = document.getElementById('preview-iframe');

document.querySelectorAll('.pdf-preview-cell .pdf-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rect = link.getBoundingClientRect();
        previewIframe.src = link.href + '#page=1&view=FitH';
        
        // Position preview to the right of link, adjust if near viewport edge
        let top = rect.top;
        let left = rect.right + 10;

        if (left + 300 > window.innerWidth) {
            left = rect.left - 310; // show on left if right side overflows
        }

        if (top + 200 > window.innerHeight) {
            top = window.innerHeight - 210; // keep inside viewport
        }

        previewDiv.style.top = top + 'px';
        previewDiv.style.left = left + 'px';
        previewDiv.style.width = '300px';
        previewDiv.style.height = '200px';
        previewDiv.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        previewDiv.style.display = 'none';
        previewIframe.src = '';
    });
});