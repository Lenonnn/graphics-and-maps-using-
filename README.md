# Gráficos JavaScript

Em qualquer sistema feito para análise de resultados, os gráficos tem papel de destaque, já que servem para demostrar de forma fácil resultados.

Hoje você vai aprender como criar gráficos com JavaScript utilizando a biblioteca amCharts. Ela não necessita de nenhuma dependência para funcionar. Ela permite criar gráficos de forma fácil, e permite exportar os gráficos como imagem.

Os gráficos suportados pelo amCharts vão desde os gráficos mais comuns, como linha, área, colunas, barras e pizza, além de gráficos mais complexos, como gauges, funil, Gantt ou mapas.

Primeiro, vamos montar a estrutura do arquivo HTML que vamos utilizar ```index.html``` !

Vamos criar dois gráficos, um gráfico de pizza e um gráfico de colunas. Para isso, foram adicionadas duas divs, com os nomes de "chart_pizza" e "chart_colunas". 
Para ambas, inserimos um style inline para definir uma altura fixa de 300 pixels.

No final do arquivo fizemos o include dos arquivos do amCharts, foram adicionados o arquivo "amcharts", que é o arquivo base da biblioteca, o arquivo "serial" que serve para criar gráficos de colunas ou barras, o arquivo "pie" que serve para criar gráficos de pizza, e dois arquivos "export" que são o plugin de exportação, que permite exportar o gráfico como imagem.

No final da página, sem um tag "script" com um comentário, informando onde vamos inserir a programação.

Vamos começar criando o primeiro gráfico, que é o gráfico de pizza. Insira o seguinte código abaixo do comentario "//Aqui vai a programação para ativar os gráficos":

No exemplo acima, usamos o construtor "makeChart" para definir o gráfico, o primeiro parâmetro é o "id" da div onde o gráfico vai ser criado. O "type" se refere ao tipo de gráfico, no caso "pie" é o gráfico de pizza. O "dataProvider" é um array com informações no formato JSON, em nosso exemplo, o array possui objetos com dois campos, "indicador" e "valor".

Na propriedade "valueField" informamos qual o campo que possui os valores, e no campo "titleField", informamos o campo que vai servir de rótulo. No final da programação, ativamos a exportação. Salve o seu HTML e abra no seu navegador. O botão de exportar aparece no canto superior direito.

Agora vamos criar nosso próximo gráfico, que é o gráfico de colunas. Adiciona abaixo da programação do gráfico de pizza o seguinte código:

Perceba algumas semelhanças em relação ao gráfico de pizza. O "dataProvider", que são os dados, são os mesmos do gráfico anterior. Existe também o "export" e o "type", que ao invés do valor "pie", tem o valor "serial".

As diferenças são relacionadas ao formato do gráfico. As propriedades "depth3D" e "angle" servem para ajustar o efeito 3D das colunas. A propriedade "graphs" é um array com a configuração de cada coluna, e a propridade "valueAxes" serve para configurar o eixo base, que é o eixo "X".

O gráfico de colunas pode ser alterado para um gráfico de colunas na horizontal alterando a propriedade "rotate" de "false" para "true".

Esse mesmo gráfico pode ser alterado para um gráfico de área se você apagar o "type": "column", localizado dentro da propriedade "graphs".

Quer ver mais exemplos? Confira o link a seguir:

[https://www.amcharts.com/demos-v3/](https://www.amcharts.com/demos-v3/).