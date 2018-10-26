
var mapa = [/*0*/[120, 10, 10, 10, 10, 120, 10, 100, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10, 10, 120, 120, 120, 120, 120, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 10],
            /*1*/[120, 10, 120, 120, 120, 120, 10, 100, 10, 120, 120, 120, 120, 10, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 10, 120, 10, 10, 10, 120, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10],
            /*2*/[120, 10, 10, 10, 10, 120, 10, 100, 10, 120, 10, 10, 120, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 120, 120, 10, 120, 120, 10, 120, 120, 120, 120, 200, 120, 120, 120, 120, 10],
            /*3*/[120, 10, 120, 120, 120, 120, 10, 100, 10, 120, 10, 10, 120, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 10, 120, 10, 120, 10, 120, 120, 120, 120, 200, 200, 200, 120, 120, 120, 120],
            /*4*/[120, 10, 10, 10, 10, 120, 10, 100, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 10, 10, 120, 10, 120, 10, 120, 120, 120, 200, 200, 200, 200, 200, 120, 120, 120],
            /*5*/[120, 120, 120, 120, 10, 120, 10, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 120, 120, 120, 120, 120, 10, 10, 10, 120, 10, 120, 10, 120, 10, 120, 120, 120, 120, 200, 200, 200, 120, 120, 120, 120],
            /*6*/[10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 100, 10, 120, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 120, 10, 120, 10, 10, 120, 120, 120, 120, 200, 120, 120, 120, 120, 10],
            /*7*/[10, 120, 10, 10, 10, 10, 120, 120, 120, 120, 10, 100, 10, 120, 120, 10, 10, 10, 10, 120, 10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10],
            /*8*/[10, 10, 10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 10],
            /*9*/[10, 10, 120, 10, 10, 10, 10, 10, 120, 120, 10, 100, 10, 120, 120, 10, 120, 10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10],
            /*10*/[10, 10, 120, 10, 120, 120, 120, 10, 120, 120, 10, 100, 10, 120, 120, 10, 120, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 120, 120, 120, 10, 120, 120, 120, 120, 10, 10, 120, 10],
            /*11*/[10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 120, 120, 120, 120, 120, 10, 10, 120, 120, 120, 120, 120, 10, 10, 120, 120, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            /*12*/[10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 10, 120, 10, 10, 120, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10, 10, 10, 10, 120, 10, 10, 120, 120, 120, 120, 10],
            /*13*/[10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 10, 10, 10, 10, 100, 10, 120, 10, 10, 120, 10, 10, 120, 120, 120, 100, 120, 120, 120, 10, 10, 10, 10, 10, 120, 10, 10, 10, 10, 10, 10, 10],
            /*14*/[120, 120, 120, 120, 10, 120, 10, 120, 120, 120, 10, 10, 10, 10, 100, 10, 10, 10, 10, 120, 10, 10, 10, 120, 120, 100, 120, 120, 10, 10, 10, 10, 120, 120, 120, 120, 120, 120, 120, 10, 10, 10],
            /*15*/[10, 10, 10, 10, 10, 120, 10, 120, 120, 120, 10, 10, 100, 100, 100, 100, 100, 10, 10, 120, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 10, 10, 10, 10, 10],
            /*16*/[10, 10, 120, 10, 10, 120, 10, 10, 120, 10, 10, 100, 100, 100, 100, 100, 100, 100, 10, 10, 10, 120, 120, 120, 10, 100, 10, 10, 10, 120, 10, 10, 120, 10, 10, 120, 10, 10, 10, 10, 10, 10],
            /*17*/[120, 10, 120, 10, 10, 120, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 10, 100, 10, 120, 120, 120, 120, 10, 120, 10, 10, 120, 10, 10, 10, 10, 120, 120],
            /*18*/[120, 10, 120, 10, 10, 120, 10, 10, 10, 10, 100, 100, 100, 10, 10, 10, 100, 100, 100, 10, 10, 120, 10, 10, 10, 100, 10, 10, 10, 120, 10, 10, 120, 10, 10, 10, 10, 120, 120, 120, 120, 120],
            /*19*/[120, 10, 120, 10, 120, 120, 120, 10, 10, 10, 100, 100, 100, 10, 10, 10, 100, 100, 100, 10, 120, 120, 120, 10, 10, 100, 10, 10, 10, 10, 10, 10, 120, 120, 120, 10, 120, 120, 120, 120, 120, 120],
            /*20*/[120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 100, 100, 100, 10, 10, 10, 100, 100, 100, 10, 120, 120, 120, 10, 10, 100, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120],
            /*21*/[120, 120, 120, 120, 120, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 10, 120, 120, 120, 10, 10, 10, 10, 10, 10, 10, 100, 10, 120, 120, 120, 10, 120, 120, 120, 120, 120, 120],
            /*22*/[10, 10, 10, 10, 120, 10, 120, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 100, 10, 10, 10, 120, 10, 10, 10, 120, 120, 120, 10, 10, 100, 10, 120, 10, 10, 10, 10, 120, 120, 120, 120, 120],
            /*23*/[10, 10, 10, 10, 120, 10, 120, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 10, 10, 100, 10, 120, 10, 120, 120, 10, 10, 10, 10, 120, 120],
            /*24*/[10, 10, 120, 10, 10, 10, 120, 10, 120, 120, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 10, 10, 10, 100, 10, 120, 10, 120, 10, 10, 10, 10, 10, 10, 10],
            /*25*/[10, 120, 120, 120, 10, 10, 120, 10, 120, 120, 120, 120, 10, 10, 100, 10, 10, 10, 120, 120, 10, 10, 10, 10, 10, 10, 120, 10, 10, 10, 100, 10, 10, 10, 120, 120, 120, 120, 10, 10, 10, 10],
            /*26*/[10, 120, 120, 120, 10, 120, 120, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10, 120, 120, 120, 120, 10, 10, 10, 120, 10, 120, 10, 10, 100, 100, 100, 10, 10, 10, 120, 120, 120, 10, 10, 120, 10],
            /*27*/[10, 120, 120, 120, 10, 10, 10, 10, 120, 120, 120, 10, 10, 10, 100, 10, 120, 120, 120, 120, 120, 120, 10, 10, 120, 10, 10, 10, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 10, 10, 120, 10],
            /*28*/[10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 100, 10, 120, 120, 120, 120, 120, 120, 10, 10, 120, 10, 10, 100, 100, 100, 100, 100, 100, 100, 10, 10, 120, 120, 120, 120, 120, 10],
            /*29*/[120, 10, 10, 10, 120, 10, 10, 120, 100, 100, 100, 100, 100, 100, 100, 10, 10, 120, 120, 120, 120, 10, 10, 10, 120, 10, 10, 10, 100, 100, 100, 100, 100, 10, 10, 10, 120, 10, 10, 10, 120, 10],
            /*30*/[120, 120, 10, 120, 120, 120, 10, 10, 100, 10, 10, 10, 10, 10, 120, 10, 10, 10, 120, 120, 10, 10, 120, 120, 120, 120, 10, 10, 10, 100, 100, 100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            /*31*/[120, 120, 10, 120, 120, 120, 10, 10, 100, 10, 10, 10, 10, 10, 120, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 120, 120, 10, 120, 120, 120, 10],
            /*32*/[120, 10, 10, 10, 120, 10, 10, 10, 100, 10, 120, 120, 120, 120, 120, 10, 120, 120, 120, 120, 10, 120, 120, 120, 120, 120, 120, 10, 10, 10, 10, 120, 10, 10, 10, 120, 10, 10, 10, 120, 10, 10],
            /*33*/[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 10, 120, 120, 120, 120, 120, 10, 120, 10, 120, 10, 120, 10, 120],
            /*34*/[10, 120, 10, 120, 120, 120, 120, 10, 100, 10, 120, 120, 120, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 120, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 120],
            /*35*/[10, 120, 10, 10, 10, 10, 120, 10, 100, 10, 10, 120, 10, 10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 120, 10, 120, 10, 10, 120, 120, 120, 120, 170, 120, 120, 120, 120, 10, 10, 120, 10, 120],
            /*36*/[10, 120, 120, 120, 10, 10, 120, 10, 100, 10, 10, 120, 10, 10, 120, 10, 120, 120, 120, 120, 120, 120, 10, 120, 10, 10, 10, 120, 120, 120, 200, 200, 170, 200, 200, 120, 120, 120, 10, 10, 10, 120],
            /*37*/[10, 120, 10, 10, 10, 10, 120, 10, 100, 10, 10, 10, 10, 10, 120, 10, 120, 10, 10, 10, 10, 120, 10, 120, 10, 10, 120, 120, 200, 200, 200, 200, 170, 200, 200, 200, 200, 120, 120, 10, 10, 120],
            /*38*/[120, 120, 10, 120, 120, 120, 120, 10, 100, 100, 100, 100, 10, 10, 120, 10, 10, 10, 10, 10, 10, 120, 10, 120, 10, 10, 120, 120, 200, 200, 200, 200, 170, 200, 200, 200, 200, 120, 120, 10, 10, 10],
            /*39*/[120, 10, 10, 10, 10, 10, 120, 10, 10, 10, 10, 100, 10, 10, 120, 120, 120, 120, 120, 120, 120, 120, 10, 120, 10, 120, 120, 200, 200, 200, 200, 200, 170, 200, 200, 200, 200, 200, 120, 120, 10, 10],
            /*40*/[120, 10, 120, 120, 120, 10, 120, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 120, 120, 200, 200, 200, 200, 200, 170, 200, 200, 200, 200, 200, 120, 120, 10, 10],
            /*41*/[120, 10, 10, 10, 10, 10, 120, 10, 10, 10, 10, 100, 10, 10, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 10, 120, 120, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 120, 120, 10, 10],
];
var largura = 42;
var borda = [];
var explorado = [];
var no = {
    estado: null,
    pai: null,
    acao: null,
    custo: null,
};
var inicio = [];
var fim = [];
var start = false;
var setouInicio = false;
var custo = 0;
var multiplicador = 20;

function reset() {
    clearInterval(int);
    for (var l = 0; l < largura; l++) {
        for (var c = 0; c < largura; c++) {
            switch (mapa[l][c]) {
                case 10:
                    set(l, c, 'grama');
                    break;
                case 100:
                    set(l, c, 'agua');
                    break;
                case 120:
                    set(l, c, 'montanha');
                    break;
                case 170:
                    set(l, c, 'caverna');
                    break;
                case 200:
                    set(l, c, 'vulcao');
                    break;
                default:
                    break;
            }

        }
    }
    borda = [];
    explorado = [];
    //set(inicio[0], inicio[1], 'inicio');
    //set(fim[0], fim[1], 'fim');
    document.getElementById("resetBtn").disabled = true;
    setouInicio = false;
    document.getElementById("custo").innerHTML = 0;
    document.getElementById("info").innerHTML = 'Escolha o ponto inicial da busca';
    document.getElementById("tempo").disabled = false;
    tempo = document.getElementById("tempo").value;
}

function run() {
    document.getElementById("tempo").disabled = true;
    document.getElementById("resetBtn").disabled = false;
    document.getElementById("startBtn").disabled = true;
    var e = document.getElementById("buscas");
    var selecionado = e.options[e.selectedIndex].value;
    switch (selecionado) {
        case 'buscaEmLargura':
            buscaEmLargura();
            break;
        case 'buscaAEstrela':
            buscaAEstrela();
            break;
        case 'buscaCustoUniforme':
            buscaCustoUniforme();
            break;
        case 'buscaGulosa':
            buscaGulosa();
            break;
        default:
            break;

    }

}

function init() {
    createMap();
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("startBtn").disabled = true;
    document.getElementById("custo").innerHTML = 0;
    document.getElementById("info").innerHTML = 'Escolha o ponto inicial da busca';
    document.getElementById("tempo").value = 50;
    tempo = document.getElementById("tempo").value;

}

function get(l, c) {
    if ((l != null) && (c != null))
        return document.getElementById(l + "-" + c);
}

function set(l, c, valor) {
    get(l, c).setAttribute("class", valor);
}

function isArrayInArray(arr, item) {
    var item_as_string = JSON.stringify(item);

    var contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}

function compararNumeros(a, b) {
    return a.custo - b.custo;
}

function setInicio(e) {
    if (setouInicio) {
        if (e.className === 'grama') {
            e.setAttribute('class', 'fim');
            var texto = e.id.split('-');
            fim[0] = parseInt(texto[0]);
            fim[1] = parseInt(texto[1]);
            document.getElementById("startBtn").disabled = false;
            document.getElementById("info").innerHTML = 'Clique em START para começar a busca';
            document.getElementById("startBtn").disabled = false;
        } else alert('O ponto final precisa ser na grama');

    } else {
        e.setAttribute('class', 'inicio');
        var texto = e.id.split('-');
        inicio[0] = parseInt(texto[0]);
        inicio[1] = parseInt(texto[1]);
        setouInicio = true;
        document.getElementById("info").innerHTML = 'Escolha o ponto final da busca';

    }

}

function createMap() {
    document.write('<table>');
    for (var l = 0; l < largura; l++) {
        document.write('<tr>');
        for (var c = 0; c < largura; c++) {
            switch (mapa[l][c]) {
                case 10:
                    document.write("<td onclick='setInicio(this)' class='grama' id='" + l + "-" + c + "'></td>");
                    break;
                case 100:
                    document.write("<td onclick='setInicio(this)' class='agua' id='" + l + "-" + c + "'></td>");
                    break;
                case 120:
                    document.write("<td onclick='setInicio(this)' class='montanha' id='" + l + "-" + c + "'></td>");
                    break;
                case 170:
                    document.write("<td onclick='setInicio(this)' class='caverna' id='" + l + "-" + c + "'></td>");
                    break;
                case 200:
                    document.write("<td onclick='setInicio(this)' class='vulcao' id='" + l + "-" + c + "'></td>");
                    break;
                default:
                    break;
            }
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function verificaEstados(borda, estado) {
    for (var i = 0; i < borda.length; i++) {
        if ((borda[i].estado[0] === estado[0]) && (borda[i].estado[1] === estado[1])) {
            return true; //achou
        }
    }
    return false;
}

function buscaEmLargura() {

    //nó ← um nó com ESTADO = problema.ESTADO-INICIAL, CUSTO-DE-CAMINHO = 0 
    no.estado = inicio;
    no.custo = 0;
    document.getElementById("custo").innerHTML = no.custo;

    //se problema.TESTE-DE-OBJETIVO(nó.ESTADO) senão retorne SOLUÇÃO(nó), 
    if (inicio[0] == fim[0] && inicio[1] == fim[1]) {
        alert('achou em: ' + fim[0] + ',' + fim[1]);
    }

    //borda ← uma fila FIFO com nó como elemento único
    borda.push(no);

    //explorado ← conjunto vazio
    explorado = [];

    //repita
    tempo = document.getElementById("tempo").value;
    int = setInterval(loopBuscaEmLargura, tempo);

}

function loopBuscaEmLargura() {

    //se VAZIO?(borda), então retorne falha
    if ((borda.length == 0 || borda == null)) {
        console.log('falha');
    }

    //nó ← POP(borda) / * escolhe o nó mais raso na borda */
    no = borda.shift();
    document.getElementById("custo").innerHTML = no.custo;

    // adicione nó.ESTADO para explorado
    explorado.push(no.estado);
    set(no.estado[0], no.estado[1], 'explorado');

    //para cada ação DISPONIVEL em problema.AÇÕES(nó.ESTADO) faça

    //para cima
    if ((no.estado[0] - 1) >= 0 && (no.estado[0] - 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] - 1, no.estado[1]],
            pai: no,
            acao: 'c',
            custo: no.custo + mapa[no.estado[0] - 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            //se problema.TESTE-DE-OBJETIVO(filho.ESTADO) então retorne SOLUÇÃO(filho) 
            if ((noFilho.estado[0] === fim[0] && noFilho.estado[1] === fim[1])) {
                document.getElementById("custo").innerHTML = noFilho.custo;
                clearInterval(int);
                console.log('achou em: ' + noFilho.estado);
                return;
            }
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
        }


    }
    //para baixo
    if ((no.estado[0] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] + 1, no.estado[1]],
            pai: no,
            acao: 'b',
            custo: no.custo + mapa[no.estado[0] + 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            //se problema.TESTE-DE-OBJETIVO(filho.ESTADO) então retorne SOLUÇÃO(filho) 
            if ((noFilho.estado[0] === fim[0] && noFilho.estado[1] === fim[1])) {
                document.getElementById("custo").innerHTML = noFilho.custo;
                clearInterval(int);
                console.log('achou em: ' + noFilho.estado);
                return;
            }
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            //estadosBorda.push(noFilho.estado);

        }

    }
    //para esquerda
    if ((no.estado[1] - 1) >= 0 && (no.estado[1] - 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] - 1],
            pai: no,
            acao: 'e',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] - 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            //se problema.TESTE-DE-OBJETIVO(filho.ESTADO) então retorne SOLUÇÃO(filho) 
            if ((noFilho.estado[0] === fim[0] && noFilho.estado[1] === fim[1])) {
                document.getElementById("custo").innerHTML = noFilho.custo;
                clearInterval(int);
                console.log('achou em: ' + noFilho.estado);
                return;
            }
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            // estadosBorda.push(noFilho.estado);

        }

    }
    //para direita
    if ((no.estado[1] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] + 1],
            pai: no,
            acao: 'd',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] + 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            //se problema.TESTE-DE-OBJETIVO(filho.ESTADO) então retorne SOLUÇÃO(filho) 
            if ((noFilho.estado[0] === fim[0] && noFilho.estado[1] === fim[1])) {
                document.getElementById("custo").innerHTML = noFilho.custo;
                clearInterval(int);
                console.log('achou em: ' + noFilho.estado);
                return;
            }
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            //estadosBorda.push(noFilho.estado);

        }

    }

}

function buscaCustoUniforme() {

    //nó ← um nó com ESTADO = problema.ESTADO-INICIAL, CUSTO-DE-CAMINHO = 0 
    no.estado = inicio;
    no.custo = 0;
    document.getElementById("custo").innerHTML = no.custo;

    //borda ← fila de prioridade ordenada pelo CUSTO-DE-CAMINHO, com nó como elemento único
    borda.push(no);
    borda.sort(function (a, b) { return a.custo < b.custo ? -1 : a.custo > b.custo ? 1 : 0; });

    //estadosBorda.push(no.estado);

    //explorado ← conjunto vazio
    explorado = [];

    //repita
    tempo = document.getElementById("tempo").value;
    int = setInterval(loopBuscaCustoUniforme, tempo);

}

function loopBuscaCustoUniforme() {

    //se VAZIO?(borda), então retorne falha
    if ((borda.length == 0 || borda == null)) {
        console.log('falha');
    }

    //nó ← POP(borda) / * escolhe o nó de menor custo na borda */
    no = borda.shift();
    document.getElementById("custo").innerHTML = no.custo;

    //se problema.TESTE-OBJETIVO(nó.ESTADO) então retornar SOLUÇÃO(nó) 
    if ((no.estado[0] === fim[0] && no.estado[1] === fim[1])) {
        clearInterval(int);
        console.log('achou em: ' + no.estado);
        return;
    }

    // adicione nó.ESTADO para explorado
    explorado.push(no.estado);
    set(no.estado[0], no.estado[1], 'explorado');

    //para cada ação DISPONIVEL em problema.AÇÕES(nó.ESTADO) faça

    //para cima
    if ((no.estado[0] - 1) >= 0 && (no.estado[0] - 1) < largura) {
        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] - 1, no.estado[1]],
            pai: no,
            acao: 'c',
            custo: no.custo + mapa[no.estado[0] - 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {

            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) { return a.custo < b.custo ? -1 : a.custo > b.custo ? 1 : 0; });

            //senão se (filho.ESTADO) está na borda com o maior CUSTO-DE-CAMINHO então
        } else if (verificaEstados(borda, noFilho.estado)) {
            if (noFilho.estado === borda[borda.length - 1].estado) {
                borda[borda.length - 1] = noFilho;
            }
        }


    }
    //para baixo
    if ((no.estado[0] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] + 1, no.estado[1]],
            pai: no,
            acao: 'b',
            custo: no.custo + mapa[no.estado[0] + 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) { return a.custo < b.custo ? -1 : a.custo > b.custo ? 1 : 0; });

        }

    }
    //para esquerda
    if ((no.estado[1] - 1) >= 0 && (no.estado[1] - 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] - 1],
            pai: no,
            acao: 'e',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] - 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) { return a.custo < b.custo ? -1 : a.custo > b.custo ? 1 : 0; });

        }

    }
    //para direita
    if ((no.estado[1] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] + 1],
            pai: no,
            acao: 'd',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] + 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) { return a.custo < b.custo ? -1 : a.custo > b.custo ? 1 : 0; });

        }

    }

}

function buscaGulosa() {

    //nó ← um nó com ESTADO = problema.ESTADO-INICIAL, CUSTO-DE-CAMINHO = 0 
    no.estado = inicio;
    no.custo = 0;
    document.getElementById("custo").innerHTML = no.custo;

    //borda ← fila de prioridade ordenada pelo CUSTO-DE-CAMINHO, com nó como elemento único
    borda.push(no);
    borda.sort(function (a, b) {
        var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
        var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
          return distanciaA < distanciaB ? -1 : distanciaA > distanciaB ? 1 : 0; 
         });

    //estadosBorda.push(no.estado);

    //explorado ← conjunto vazio
    explorado = [];

    //repita
    tempo = document.getElementById("tempo").value;
    int = setInterval(loopBuscaGulosa, tempo);

}

function loopBuscaGulosa() {

    //se VAZIO?(borda), então retorne falha
    if ((borda.length == 0 || borda == null)) {
        console.log('falha');
    }

    //nó ← POP(borda) / * escolhe o nó de menor custo na borda */
    no = borda.shift();
    document.getElementById("custo").innerHTML = no.custo;

    //se problema.TESTE-OBJETIVO(nó.ESTADO) então retornar SOLUÇÃO(nó) 
    if ((no.estado[0] === fim[0] && no.estado[1] === fim[1])) {
        clearInterval(int);
        console.log('achou em: ' + no.estado);
        return;
    }

    // adicione nó.ESTADO para explorado
    explorado.push(no.estado);
    set(no.estado[0], no.estado[1], 'explorado');

    //para cada ação DISPONIVEL em problema.AÇÕES(nó.ESTADO) faça

    //para cima
    if ((no.estado[0] - 1) >= 0 && (no.estado[0] - 1) < largura) {
        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] - 1, no.estado[1]],
            pai: no,
            acao: 'c',
            custo: no.custo + mapa[no.estado[0] - 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {

            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
               var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
               var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                 return distanciaA < distanciaB ? -1 : distanciaA > distanciaB ? 1 : 0; 
                });

            //senão se (filho.ESTADO) está na borda com o maior CUSTO-DE-CAMINHO então
        } else if (verificaEstados(borda, noFilho.estado)) {
            if (noFilho.estado === borda[borda.length - 1].estado) {
                borda[borda.length - 1] = noFilho;
            }
        }


    }
    //para baixo
    if ((no.estado[0] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] + 1, no.estado[1]],
            pai: no,
            acao: 'b',
            custo: no.custo + mapa[no.estado[0] + 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                  return distanciaA < distanciaB ? -1 : distanciaA > distanciaB ? 1 : 0; 
                 });

        }

    }
    //para esquerda
    if ((no.estado[1] - 1) >= 0 && (no.estado[1] - 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] - 1],
            pai: no,
            acao: 'e',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] - 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                  return distanciaA < distanciaB ? -1 : distanciaA > distanciaB ? 1 : 0; 
                 });

        }

    }
    //para direita
    if ((no.estado[1] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] + 1],
            pai: no,
            acao: 'd',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] + 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                  return distanciaA < distanciaB ? -1 : distanciaA > distanciaB ? 1 : 0; 
                 });
        }

    }

}

function buscaAEstrela() {

    //nó ← um nó com ESTADO = problema.ESTADO-INICIAL, CUSTO-DE-CAMINHO = 0 
    no.estado = inicio;
    no.custo = 0;
    document.getElementById("custo").innerHTML = no.custo;
    //borda ← fila de prioridade ordenada pelo CUSTO-DE-CAMINHO, com nó como elemento único
    borda.push(no);
    borda.sort(function (a, b) {
        var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
        var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
        var fnA = multiplicador*distanciaA + a.custo;
        var fnB = multiplicador*distanciaB +b.custo;
        return fnA < fnB ? -1 : fnA > fnB ? 1 : 0; 
         });

    //estadosBorda.push(no.estado);

    //explorado ← conjunto vazio
    explorado = [];

    //repita
    tempo = document.getElementById("tempo").value;
    int = setInterval(loopBuscaAEstrela, tempo);

}

function loopBuscaAEstrela() {

    //se VAZIO?(borda), então retorne falha
    if ((borda.length == 0 || borda == null)) {
        console.log('falha');
    }

    //nó ← POP(borda) / * escolhe o nó de menor custo na borda */
    no = borda.shift();
    document.getElementById("custo").innerHTML = no.custo;

    //se problema.TESTE-OBJETIVO(nó.ESTADO) então retornar SOLUÇÃO(nó) 
    if ((no.estado[0] === fim[0] && no.estado[1] === fim[1])) {
        clearInterval(int);
        console.log('achou em: ' + no.estado);
        return;
    }

    // adicione nó.ESTADO para explorado
    explorado.push(no.estado);
    set(no.estado[0], no.estado[1], 'explorado');

    //para cada ação DISPONIVEL em problema.AÇÕES(nó.ESTADO) faça

    //para cima
    if ((no.estado[0] - 1) >= 0 && (no.estado[0] - 1) < largura) {
        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] - 1, no.estado[1]],
            pai: no,
            acao: 'c',
            custo: no.custo + mapa[no.estado[0] - 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {

            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                var fnA = multiplicador*distanciaA + a.custo;
                var fnB = multiplicador*distanciaB +b.custo;
                return fnA < fnB ? -1 : fnA > fnB ? 1 : 0; 
                 });

            //senão se (filho.ESTADO) está na borda com o maior CUSTO-DE-CAMINHO então
        } else if (verificaEstados(borda, noFilho.estado)) {
            if (noFilho.estado === borda[borda.length - 1].estado) {
                borda[borda.length - 1] = noFilho;
            }
        }


    }
    //para baixo
    if ((no.estado[0] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0] + 1, no.estado[1]],
            pai: no,
            acao: 'b',
            custo: no.custo + mapa[no.estado[0] + 1][no.estado[1]],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                var fnA = multiplicador*distanciaA + a.custo;
                var fnB = multiplicador*distanciaB +b.custo;
                return fnA < fnB ? -1 : fnA > fnB ? 1 : 0; 
                 });

        }

    }
    //para esquerda
    if ((no.estado[1] - 1) >= 0 && (no.estado[1] - 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] - 1],
            pai: no,
            acao: 'e',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] - 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                var fnA = multiplicador*distanciaA + a.custo;
                var fnB = multiplicador*distanciaB +b.custo;
                return fnA < fnB ? -1 : fnA > fnB ? 1 : 0; 
                 });

        }

    }
    //para direita
    if ((no.estado[1] + 1) < largura) {

        //filho ← NÓ-FILHO (problema, nó, ação)
        var noFilho = {
            estado: [no.estado[0], no.estado[1] + 1],
            pai: no,
            acao: 'd',
            custo: no.custo + mapa[no.estado[0]][no.estado[1] + 1],
        };
        //se (filho.ESTADO)não está em explorado ou borda então
        if (!(isArrayInArray(explorado, noFilho.estado)) && !(verificaEstados(borda, noFilho.estado))) {
            // borda ← INSIRA(filho, borda)
            borda.push(noFilho);
            borda.sort(function (a, b) {
                var distanciaA =  Math.sqrt((fim[0] - a.estado[0]) * (fim[0] - a.estado[0]) + (fim[1] - a.estado[1]) * (fim[1] - a.estado[1]));
                var distanciaB =  Math.sqrt((fim[0] - b.estado[0]) * (fim[0] - b.estado[0]) + (fim[1] - b.estado[1]) * (fim[1] - b.estado[1]));
                var fnA = multiplicador*distanciaA + a.custo;
                var fnB = multiplicador*distanciaB +b.custo;
                return fnA < fnB ? -1 : fnA > fnB ? 1 : 0; 
                 });
        }

    }

}

init();



