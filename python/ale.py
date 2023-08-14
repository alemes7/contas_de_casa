import matplotlib.pyplot as plt

# Dados das contas de energia
meses = ["Fevereiro", "Março", "Abril", "Maio", "Junho"]
valores = [102.77, 308.71, 293.65, 326.11, 290.27]

plt.bar(meses, valores)
plt.xlabel("Meses")
plt.ylabel("Valor (R$)")
plt.title("Contas de Energia")

# Salvar o gráfico como imagem
plt.savefig("energia_graph.png")
