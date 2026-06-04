const items = document.querySelectorAll('.nav-item');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe ativa de todos
        items.forEach(i => i.classList.remove('active'));
        
        // Adiciona ao item clicado
        item.classList.add('active');
        
        // Opcional: Feedback no console
        console.log("Navegando para:", item.querySelector('i').className);
    });
});
