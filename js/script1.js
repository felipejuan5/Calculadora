"use strict";
let botoes_numericos = document.querySelectorAll(".calc_botao");

for( let botao of botoes_numericos){
    botao.addEventListener("click", function(){
        add(botao);
    });
}

let botoes_op = document.querySelectorAll(".calc_botao_op");
for ( let botao of botoes_op){
    botao.addEventListener("click", function(){
        add(botao);
    });
}

function add(botao){
    document.querySelector("#res").value += botao.innerHTML;
}  

document.querySelector("#limpar").addEventListener("click", function(){
    document.querySelector("#res").value = "";
})

document.querySelector("#resp").addEventListener("click", function(){
        document.querySelector("#res"). value = eval( document.querySelector("#res").value)
});

document.querySelector("#raiz").addEventListener("click", function(){
    document.querySelector("#res").value = Math.sqrt(Number(document.querySelector("#res").value));
});

document.querySelector("#round").addEventListener("click", function(){
    document.querySelector("#res").value = Math.round(Number(document.querySelector("#res").value));
});

document.querySelector("#pow").addEventListener("click", function(){
    document.querySelector("#res").value += "**";
});
