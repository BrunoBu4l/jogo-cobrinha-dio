var nome = "Bruno BA";
//var idade = prompt("Qual é a sua idade?");
var idade = 27;
var frase = "Japão é o melhor time do mundo";
//alert("Bem-vindo "+ nome + ",sua idade é de " + idade);
//console.log(idade);
//console.log(frase.replace("Japão", "brasil"));
//alert(frase.replace("Japão", "Brasil"));

//array

var lista = ["maçã", "pêra", "laranja"];//0,1,2
console.log(lista); 
lista.push("uva");//0,1,2,3
console.log(lista); 
lista.pop();//0,1,2
console.log(lista[1]);//retorna somente o elemento específico
console.log(lista.length);//tamanho da lista
console.log(lista.reverse());//reverter lista
console.log(lista.toString()); // trazer para string
console.log(lista.join(" - ")); //estiliza o array

//array estilo dicionário

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
//alert(frutas[1].nome);

//laço de repetição while

var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}

//laço de repetição for
var count2;
for(count2=0; count2 <= 5; count2++){
    console.log(count2)
}

//datas

var d = new Date();
//alert(d.getDate() + "/"+ (d.getMonth()+1)); //dd/mm
//alert(d.getDay());

//função


function soma( n1, n2){
    return n1 + n2;
}
//alert(soma(5,10));

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/

function validarIdade(idade){
    var validar;
    //condicional if
    if(idade >= 18){
        // alert("Bem-vindo "+ nome + ",sua idade é MAIOR de " + idade);
        validar = true
    }else{
        // alert("Bem-vindo "+ nome + ",sua idade é MENOR de " + idade);
        validar = false
    }
    return validar;
}

console.log(validarIdade(idade));


//function botão
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function nextpage(){
    window.open("https://alphacoders.com/"); //abre em uma nova guia
   // window.location.href = "https://alphacoders.com/"; //abre na mesma guia
}

function passhere(){
    document.getElementById("mousemove").innerHTML = "Passou o mouse por aqui!";
}

function passback(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse por aqui!";
}

/*Para atribuir a mesma função para mais elementos use a forma abaixo*/

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse por aqui!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse por aqui!";
}

//ao carregar a função faça!

function load(){
    alert("página carregada!");
}

//Função Change

function funcaoChange(elemento){
    console.log(elemento.value);
}