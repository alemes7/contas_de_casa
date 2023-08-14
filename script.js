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
});