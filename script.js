document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternador de Tema (Dark Mode / Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Atualizar ícone e armazenar preferência
        themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // 2. Formulário de Contato
    const contactForm = document.getElementById('contact-form');

    // No arquivo script.js
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;

    alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso. Nossa equipe retornará em breve pelo e-mail contato@sabrinasilveira.adv.br.`);

    contactForm.reset();
});
});