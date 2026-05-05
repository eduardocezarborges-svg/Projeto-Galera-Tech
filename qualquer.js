// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', function () {
    
    // Inicializa o Swiper
    var swiper = new Swiper(".mySwiper", {
        // Opções básicas
        loop: true,               // Faz o carrossel voltar pro início ao chegar no fim
        autoplay: {
            delay: 5000,          // Passa sozinho a cada 5 segundos
            disableOnInteraction: false, // Continua rodando mesmo se o usuário interagir
        },

        // Configura as setas laterais
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Configura as bolinhas de paginação
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Permite clicar na bolinha pra mudar de slide
        },
    });
    
});