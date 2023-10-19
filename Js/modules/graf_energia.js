export default function graf_energiaInit() {
    // Referência aos elementos HTML para alternar entre os gráficos de energia
    const botaoAlternarEnergia = document.getElementById("alternarGraficoEnergia");
    const graficoContainerEnergia = document.getElementById("graficoEnergia");
    const graficoImagemEnergia = graficoContainerEnergia.querySelector("img");

    let exibirGraficoDeBarrasEnergia = false;

    // Função para alternar a exibição do gráfico de energia
    function alternarGraficoEnergia() {
        exibirGraficoDeBarrasEnergia = !exibirGraficoDeBarrasEnergia;

        // Atualiza a imagem do gráfico com base na escolha
        if (exibirGraficoDeBarrasEnergia) {
            graficoImagemEnergia.src = "img/energiabar.jpeg";
        } else {
            graficoImagemEnergia.src = "img/energialine.jpeg";
        }
    }

    // Adiciona um ouvinte de eventos para alternar o gráfico de energia quando o botão é clicado
    botaoAlternarEnergia.addEventListener("click", alternarGraficoEnergia);

    // Chama a função para definir o gráfico de energia inicialmente
    alternarGraficoEnergia();

}