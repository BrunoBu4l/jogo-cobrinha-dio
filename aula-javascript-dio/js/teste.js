
/**
 * botão com valor 1- ler
 * se clicar no botão passa para 2- lendo
 * se clicar novamente passa para 3- lido
 * se clicar novamente volta para 2.
 */
 console.log(teste1);
document.getElementById("mudar").onclick = function () {
   
    if(document.getElementById("teste1") == "Ler"){
        teste1.innerHTML = "Lendo";
        console.log(teste1);
        if(document.getElementById("teste1") == "Lendo"){
            teste1.innerHTML = "Concluido";
        }
    }
   
}
