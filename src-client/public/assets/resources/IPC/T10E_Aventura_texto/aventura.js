/* eslint-disable */
//////////////////////
// Jogo de Aventura //
//////////////////////

var estado = "";

function jogo_aventura(chave){  
    if (estado != "fim"){
        if (chave == undefined){
            document.getElementById("botao_jogar").hidden = true;
            estado = "inicio";
        }else
            estado = chave;

        // le a cena atual e imprime o texto
       	[texto, opcoes, prox_estado] = livro[estado];
        document.getElementById("texto").innerHTML = texto;

        // verifica se nao e o fim do jogo e imprime as opcoes da narrativa
        if (opcoes != []){
            let txt = "";
            for (let i=0; i < opcoes.length; i++)
                txt += '<p><br><button onclick = "jogo_aventura(' + prox_estado[i] + ')">' + opcoes[i] + '</button></p>';
            document.getElementById("opcoes").innerHTML =txt;

        }else{
            document.getElementById("texto").innerHTML = "*** Fim ***";
            document.getElementById("opcoes").innerHTML = "";
            document.getElementById("botao_jogar").hidden = false;
            estado = "fim" // fim do jogo - sai do ciclo
        }
    }
}


////////////////////////////////////////////////
// Narrativa interativa //
////////////////////////////////////////////////

livro = {
    "inicio": [
        "Encontras-te ao fundo de um corredor de uma gruta. \n\u00c0 tua frente encontram-se 3 portas.\nAtr\u00e1s de ti, pelo corredor aproxima-se algo aterrador. O que fazes?",
        [
            "Abres a porta com o s\u00edmbolo da \u00e1gua.",
            "Abres a porta com o s\u00edmbolo do ar.",
            "Abres a porta com o s\u00edmbolo da terra."
        ],
        [
            "1",
            "2",
            "3"
        ]
    ],
    "1": [
        "Abres a porta e uma torrente de enorme caudal empurra-te pelo corredor...\nTudo fica escuro \u00e0 tua volta no meio do turbilh\u00e3o de \u00e1gua revolta... perdes a consci\u00eancia...\nPerdeste.",
        [],
        []
    ],
    "2": [
        "Abres a porta e encontras-te em frente de um enorme precip\u00edcio.\nUm enorme drag\u00e3o aproxima-se e leva-te nas suas garras at\u00e9 te largar em seguran\u00e7a em tua casa.\n\u00c9 o teu drag\u00e3o. Est\u00e1s a salvo.",
        [],
        []
    ],
    "3": [
        "Abres a porta e v\u00eas dois corredores. Uma leve brisa afaga a tua face direita...",
        [
            "Vais pelo t\u00fanel da esquerda.",
            "Vais pelo t\u00fanel da direita."
        ],
        [
            "4",
            "5"
        ]
    ],
    "4": [
        "Encontras-te em frente a um precip\u00edcio, atravessado por uma ponte de cordas em mau estado que te leva \u00e0 sa\u00edda da gruta.\nAtravessas a ponte em dire\u00e7\u00e3o \u00e0 liberdade...\nMas a ponte cai... Perdeste.\n",
        [],
        []
    ],
    "5": [
        "O t\u00fanel da direita leva-te \u00e0 sa\u00edda da gruta, como pressagiava a brisa proveniente de l\u00e1. Est\u00e1s em liberdade!",
        [],
        []
    ]
}
