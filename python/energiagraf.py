import matplotlib.pyplot as plt

# Dados das contas de energia
meses = ["Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto"]
valores = [102.77, 308.71, 293.65, 326.11, 290.27, 303.59, 342.71]

plt.plot(meses, valores, marker='o')
plt.xlabel("Meses")
plt.ylabel("Valor (R$)")
plt.title("Contas de Energia - Gráfico de Linha")

# Salvar o gráfico como imagem
plt.savefig("energia_line_chart.png")
