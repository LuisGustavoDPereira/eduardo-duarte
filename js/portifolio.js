const cards = document.getElementById('site-cards');

const sites = [
    {
        title: 'Cópia da Página de Login do Facebook',
        text: 'Página cópia da tela de login do Facebook, criada para treino.',
        url: 'https://portfolio.eduardoduarte.com.br/Facebook/',
    },
    {
        title: 'Projeto #1 Landing page',
        text: 'Primeiro projeto de uma landing page, criada em um curso de desenvolvimento.',
        url: 'https://portfolio.eduardoduarte.com.br/Projeto_01/',
    },
    {
        title: 'Cópia da Página de Cursos Danki Code',
        text: 'Página que copia a tela de cursos da empresa Danki Code, criada para treino.',
        url: 'https://portfolio.eduardoduarte.com.br/Projeto%20%232/',
    },
    {
        title: 'Projeto Web Design Express',
        text: 'Página criada para projeto de um curso.',
        url: 'https://portfolio.eduardoduarte.com.br/Projeto/',
    },
    {
        title: 'Projeto Pokedex',
        text: 'Pokedex',
        url: 'https://portfolio.eduardoduarte.com.br/pokedex/',
    },
    {
        title: 'Contagem regressiva para o ano novo',
        text: '',
        url: 'https://portfolio.eduardoduarte.com.br/new_year_clock/',
    },
    {
        title: 'Projeto Agência Bold',
        text: 'Projeto de landpage de uma agência.',
        url: 'https://portfolio.eduardoduarte.com.br/ProjetoFinal/',
    },
    {
        title: 'Página de Login',
        text: 'Projeto de página de login.',
        url: 'https://portfolio.eduardoduarte.com.br/ExercicioFormulario/',
    },
    {
        title: 'Página simples de login',
        text: 'Página simples de login e cadastro feita em react.',
        url: 'https://ed-simple-login-app.netlify.app/',
    },
    {
        title: 'Tarefas App',
        text: 'Aplicativo de tarefas CRUD feito com React.',
        url: 'https://ed-tarefas-app.netlify.app/',
    }
];

sites.forEach(item => {
    cards.innerHTML += `
    <div class="w100 card-site">
        <div class="site-img w50"></div>
        <div class="w50 site-text">
            <div class="w100 title text-center">
                <h2>${item.title}</h2>
            </div>
            <div class="w100 text text-left">
                <p>${item.text}</p>
            </div>
            <div class="text-center btn">
                <a href="${item.url}" target="_blank" class="w100 btn-primary">Visitar</a>
            </div>
        </div>
    </div>
    `;
})