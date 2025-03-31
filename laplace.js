function searchFormula() {
    let input = document.getElementById('searchBar').value.toUpperCase();
    let sections = document.querySelectorAll('main section h3');

    sections.forEach(sec => {
        let text = sec.textContent.trim().toUpperCase();
        sec.parentElement.style.display = text.includes(input) ? 'block' : 'none';
    });
}