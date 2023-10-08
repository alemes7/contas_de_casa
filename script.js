document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".conta-form form");
    const listaContasAgua = document.getElementById("lista-contas-agua");
    const listaContasEnergia = document.getElementById("lista-contas-energia");
    const contasAgua = {};
    const contasEnergia = {};

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const tipo = form.tipo.value;
        const valor = parseFloat(form.valor.value);
        const data = new Date(form.data.value);
        const mes = data.toLocaleString("default", { month: "long" });

        if (tipo === 'agua') {
            if (!contasAgua[mes]) {
                contasAgua[mes] = [];
            }
            contasAgua[mes].push({ tipo, valor, data });
        } else if (tipo === 'energia') {
            if (!contasEnergia[mes]) {
                contasEnergia[mes] = [];
            }
            contasEnergia[mes].push({ tipo, valor, data });
        }

        updateList();

        form.reset();
    });

    function updateList() {
        listaContasAgua.innerHTML = "";
        listaContasEnergia.innerHTML = "";

        for (const mes in contasAgua) {
            const mesItem = document.createElement("li");
            mesItem.innerHTML = `<strong>${mes}</strong>`;

            const mesContas = contasAgua[mes];
            for (const conta of mesContas) {
                const contaItem = document.createElement("li");
                contaItem.textContent = `${conta.tipo}: R$ ${conta.valor.toFixed(2)} - ${conta.data.toLocaleDateString()}`;
                mesItem.appendChild(contaItem);
            }

            listaContasAgua.appendChild(mesItem);
        }

        for (const mes in contasEnergia) {
            const mesItem = document.createElement("li");
            mesItem.innerHTML = `<strong>${mes}</strong>`;

            const mesContas = contasEnergia[mes];
            for (const conta of mesContas) {
                const contaItem = document.createElement("li");
                contaItem.textContent = `${conta.tipo}: R$ ${conta.valor.toFixed(2)} - ${conta.data.toLocaleDateString()}`;
                mesItem.appendChild(contaItem);
            }

            listaContasEnergia.appendChild(mesItem);
        }
    }

    // Referência aos elementos HTML para alternar entre os gráficos de água e energia
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
});
