function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
            page.classList.remove('hidden');
        } else {
            page.classList.remove('active');
            page.classList.add('hidden');
        }
    });
}

// Default to show the home page
showPage('projects');
