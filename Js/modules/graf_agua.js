export default function graf_aguaInit(){
    // Referência aos elementos HTML para alternar entre os gráficos de água
    const botaoAlternarAgua = document.getElementById("alternarGraficoAgua");
    const graficoContainerAgua = document.getElementById("graficoAgua");
    const graficoImagemAgua = graficoContainerAgua.querySelector("img");

    let exibirGraficoDeBarrasAgua = false;

    // Função para alternar a exibição do gráfico de água
    function alternarGraficoAgua() {
        exibirGraficoDeBarrasAgua = !exibirGraficoDeBarrasAgua;

        // Atualiza a imagem do gráfico com base na escolha
        if (exibirGraficoDeBarrasAgua) {
            graficoImagemAgua.src = "img/aguabar.jpeg";
        } else {
            graficoImagemAgua.src = "img/agualine.jpeg";
        }
    }

    // Adiciona um ouvinte de eventos para alternar o gráfico de água quando o botão é clicado
    botaoAlternarAgua.addEventListener("click", alternarGraficoAgua);

    // Chama a função para definir o gráfico de água inicialmente
    alternarGraficoAgua();
}