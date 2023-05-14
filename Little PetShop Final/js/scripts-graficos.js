//js pagina dados


google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(desenharColunas);

function desenharColunas() {
    let data = google.visualization.arrayToDataTable(dadosColunas());

    let options = {
        chart: {
            title: 'Atendimentos ',
            subtitle: 'Status de 2023',
        },
        colors: ['#861c87', '#620e66', '#3e0044']
        // colors: ['#a6f2ce','#42cf90',  '#004022' ],
    };

    let chart = new google.charts.Bar(document.getElementById('div-grafico-c'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function dadosColunas() {

    let dados =
        [
            ['Meses', 'Bom', 'Regular', 'Ruim'],
            ['Janeiro', 20, 14, 0],
            ['Fevereiro', 17, 9, 2],
            ['Março', 16, 12, 1],
            ['Abril', 23, 12, 5],
            ['Maio', 19, 14, 0],
            ['Junho', 22, 8, 1]
        ];

    return dados;
}












google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoPizza);

function desenharGraficoPizza() {

    let data = google.visualization.arrayToDataTable(obterDados());

    let options = {
        title: 'Animais Atendidos',
        //pieHole :0.4
        is3D: true,
        colors: ['#8afa98', '#6ce181', '#4fc86a', '#31ae53', '#13953c']
    };

    let chart = new google.visualization.PieChart(document.getElementById('div-3d'));

    chart.draw(data, options);
}


//função para simular obtenção de dados
function obterDados() {

    let dados = [
        ['Animais', 'Atendidos'],
        ['Cachorros', Math.random() * 10],
        ['Gatos', Math.random() * 10],
        ['Passarinho', Math.random() * 10],
        ['Coelho', Math.random() * 10],
        ['Furão', Math.random() * 10],

    ];

    return dados;
}






google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico() {
    let data = google.visualization.arrayToDataTable(novosDados());

    let options = {
        title: 'Aumento de atendimentos funcionários',
        isStacked: true,
        //colors: ['#f091f4','#dd7fe1', '#8C47CC', ]
        colors: ['#4fc86a', '#13953c']
    };

    let chart = new google.visualization.SteppedAreaChart(document.getElementById('div-pontinhos'));

    chart.draw(data, options);
}

function novosDados() {

    let dados = [
        ['atendimentos', '2020', '2023'],
        ['Fabiana', 3, 5],
        ['Pedro', 4, 6],
        ['Gabi', 2, 9]

    ];

    return dados;
}








google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoLinha);

function desenharGraficoLinha() {
    let data = google.visualization.arrayToDataTable(gerarDados());

    let options = {
        title: 'Desempenho da Empresa',
        curveType: 'function',
        legend: { position: 'bottom' },
        //colors: ['#861c87','#620e66',  '#3e0044' ]
        colors: ['#f091f4', '#b65bbb', '#8C47CC',]
    };

    let chart = new google.visualization.LineChart(document.getElementById('div-linhas'));

    chart.draw(data, options);
}

function gerarDados() {
    let dados = [
        ['Ano', 'Vendas', 'Despesas', 'Lucro'],
        ['2018', vendas8, despesas8, vendas8 - despesas8],
        ['2019', vendas9, despesas9, vendas9 - despesas9],
        ['2020', vendas0, despesas0, vendas0 - despesas0],
        ['2021', vendas1, despesas1, vendas1 - despesas1],
        ['2022', vendas2, despesas2, vendas2 - despesas2],
        ['2023', vendas3, despesas3, vendas3 - despesas3]
    ];

    return dados;
}

let vendas8 = Math.random() * 100;
let vendas9 = Math.random() * 100;
let vendas0 = Math.random() * 100;
let vendas1 = Math.random() * 100;
let vendas2 = Math.random() * 100;
let vendas3 = Math.random() * 100;



let despesas8 = Math.random() * 100;
let despesas9 = Math.random() * 100;
let despesas0 = Math.random() * 100;
let despesas1 = Math.random() * 100;
let despesas2 = Math.random() * 100;
let despesas3 = Math.random() * 100;