var tela = document.getElementById("visor");
tela.innerHTML = "0";
var condicaoUX = true;
var resultado = false;
var calcHistorico = [];
var armazenaAns = false;
var usarAns = false;
var valorArmazenado = "";
var startP = false;

function tecladoNumerico(num){

    if(condicaoUX == true && startP == false){
        tela.innerHTML = "";
        condicaoUX = false;
        startP = true;
    }

    var numero = tela.innerHTML;
    tela.innerHTML = numero + num;

    
    if(resultado && !isNaN(numero.slice(-1))){
        if(numero.slice(-1) === "(" && startP === false){
            tela.innerHTML = "(" + num;
            resultado = false;
            startP = true;
        }
        else{
            tela.innerHTML = "";
            resultado = false;
            numero = tela.innerHTML;
        }
    }else{
        resultado = false
    }

    if(numero.slice(-1)==")"){
        tela.innerHTML = numero + "*" + num;
    }else{
        tela.innerHTML = numero + num;
    }

    return condicaoUX;
}

function btnParenteses(sentido){

    var valor1 = tela.innerHTML;
    
    if(sentido == "esquerdo" ){
       if(!isNaN(valor1.slice(-1))){
           if(startP == false){
            tela.innerHTML = "";
            tela.innerHTML = "(";
            startP = true;
           }else{
                tela.innerHTML = valor1 +"*(";
            }
       }else{
            tela.innerHTML = "";
            tela.innerHTML = valor1 + "(";
       }
    }else{
        tela.innerHTML = valor1 + ")";
    }
}

function btnSoma(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1+"+";
}

function btnSubtracao(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1+"-";
}

function btnPorcentagem(){

    var valor = tela.innerHTML;
    
}

function btnDivisao( ){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1+"/";
}

function btnMultiplicacao(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1+"*";
}

function btnRaiz(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = Math.sqrt(eval(valor1));
}

function btnDel(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1.slice(0,  -1);

    if(tela.innerHTML.length == 0){
        tela.innerHTML = "0";
        condicaoUX = true;
    }
}
function btnPonto(){

    var valor1 = tela.innerHTML;
    tela.innerHTML = valor1 + ".";
}

function btnClear(){

    tela.innerHTML = "0";
    condicaoUX = true;
    document.getElementById("contaAntiga").innerHTML = "";
    startP = false;

    return condicaoUX;
}

function btnEnter(){
    
    var valor1 = tela.innerHTML;
    var telinha = document.getElementById("historicoAqui");
    var cntAntiga = document.getElementById("contaAntiga");
    calcHistorico.push(valor1);

    let qntdCalculada = calcHistorico.length;
    let exibir;

    for (let i = 0; i < qntdCalculada; i++){
        exibir +="<li>"+ calcHistorico[i] + " = " + eval(calcHistorico[i])+ "</li>";
    }

    cntAntiga.innerHTML = valor1;
    telinha.innerHTML = exibir;
    tela.innerHTML = eval(valor1);
    resultado = true;
    startP = false;

    return resultado;
}

function btnHistorico(){
    var historico = document.getElementById("btnShow");
    var statusBtn = document.getElementById("historico_contas");
    var debug = JSON.stringify(statusBtn.style.display);
    
    if(statusBtn.style.display === ""){  
        statusBtn.style.display = "none";   
    }

    if(statusBtn.style.display === "none"){
        statusBtn.style.display="block";
        statusBtn.classList.toggle("animacaoHistorico")
        historico.innerHTML = '<';    
    }else{
        statusBtn.style.display="none";
        statusBtn.classList.toggle("animacaoHistorico");
        historico.innerHTML = '>';
    }
}

