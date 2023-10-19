// Exporta a função como padrão para que ela possa ser importada em outros arquivos
export default function menuMobileInit() {
    // Seleciona o elemento com a classe "toggle" e o elemento com a classe "js-list"
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list');

    // Verifica se os elementos "toggle" e "menuList" existem
    if (toggle && menuList) {
        // Define uma função chamada toggleMenu para alternar a exibição do menu mobile
        function toggleMenu() {
            // Adiciona ou remove a classe "active" do elemento "menuList" para mostrar ou ocultar o menu
            menuList.classList.toggle('active');
            
            // Seleciona o ícone de alternância dentro do elemento "toggle"
            const toggleIcon = toggle.querySelector('span');
            
            // Alterna a classe "active" no ícone para controlar sua aparência (aberto/fechado)
            toggleIcon.classList.toggle('active');
            
            // Alterna o texto do ícone entre "Menu" e "close" com base em seu estado atual
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        // Adiciona um ouvinte de evento de clique ao elemento "toggle" que chama a função toggleMenu
        toggle.addEventListener('click', toggleMenu);
    }
}
