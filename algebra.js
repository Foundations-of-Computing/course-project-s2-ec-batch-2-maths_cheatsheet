function searchFormula() {
    let input = document.getElementById('searchBar').value.toUpperCase();
    let equations = document.querySelectorAll('.equation h3');

    equations.forEach(eq => {
        let text = eq.textContent.trim().toUpperCase();
        eq.parentElement.style.display = text.includes(input) ? 'block' : 'none';
    });
}