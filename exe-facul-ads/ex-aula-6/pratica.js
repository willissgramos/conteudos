//Exercicio 1
let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false

botao.addEventListener("mouseover",e =>{
    if(!estaQuebrado) //ponto de exclamação é =  NAO
        botao.style.background="green";
});

botao.addEventListener("mouseout", e=> {
    if(!estaQuebrado)
    botao.style.background="blue";
})

botao.addEventListener("click", e=> {
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQuebrado=true
})
