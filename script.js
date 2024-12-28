document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.github.com/users/ogiansouza') // Substitua pela URL correta da API
        .then(response => {
            if (!response.ok) {
                throw new Error('Rede não está disponível');
            }
            return response.json();
        })
        .then(data => {
            // Preencher os dados no HTML
            document.querySelector('.profile-name').textContent = data.name || 'Nome não disponível';
            document.querySelector('.profile-username').textContent = data.login || 'Usuário não disponível';
            document.querySelector('.profile-avatar').src = data.avatar_url || 'https://via.placeholder.com/180x180';
            document.querySelector('.numbers-item:nth-child(1)').textContent = data.public_repos || 0;
            document.querySelector('.numbers-item:nth-child(2)').textContent = data.followers || 0;
            document.querySelector('.numbers-item:nth-child(3)').textContent = data.following || 0;
            document.querySelector('.profile-link').href = data.html_url || '#';
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
});
