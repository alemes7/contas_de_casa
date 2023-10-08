import matplotlib.pyplot as plt

# Dados das contas de água
meses = ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro"]
valores = [61.21, 125.60, 166.61, 115.92, 145.37, 153.94, 100.86, 194.44]

plt.bar(meses, valores)
plt.xlabel("Meses")
plt.ylabel("Valor (R$)")
plt.title("Contas de Água - Gráfico de Barras")

# Salvar o gráfico como imagem
plt.savefig("agua_bar_chart.png")