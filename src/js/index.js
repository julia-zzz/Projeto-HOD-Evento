/* Este é um comentario no js

iremos linkar o js no html, no final do codigo, antes do fechamento do </body>

alert('conteudo que ira aparecer'); - vai gerar um alerta  */

/* OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente
-passo 1 - dar um jeito de pegar o elemento HTML dos botoes
-passo 2 - dar um jeito de identificar o clique do usuario no botao
-passo3 - desmarcar o botao selecionado anterior
-passo 4 - marcar o botao clicado como se estivesse selecionado
-passo 5 - esconder a imagem anteriormente selecionada 
-passo 6 - fazer aparecer a imagem correspondente ao botao clicado 
-passo 7 - esconder a informacao do dragao anteriormente selecionado
-passo 8 - mostrar a informacao do dragao referente ao botao clicado 
*/


//-passo 1 - dar um jeito de pegar o elemento HTML dos botoes
/*
console.log(document.querySelectorAll(".botao")); // log eh um .metodo do console(usado p/ imprimir informacoes, valores,... durante a execucao do js) document.querySelectorAll (buscar todos os elementos que tem um seletor especifico()) */

const botoesCarrossel = document.querySelectorAll(".botao"); // criamos uma variavel constante, = tudo oq esta do outro lado vai ser atribuido para dentro da variavel
const imagens = document.querySelectorAll(".imagem"); // foi adicionado ao longo do codigo
const informacoes = document.querySelectorAll(".informacoes"); // foi adicionado ao longo do codigo

//-passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //-passo3 - desmarcar o botao selecionado anterior
        DesativarBotaoSelecionado();
        /* Antes de refatorar era assim:
        
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado")
        
        essas linhas do passo 3 indicam que eu quero desmarcar o botao selecionado */



        //-passo 4 - marcar o botao clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

         /* Antes de refatorar: 
          botao.classList.add("selecionado"); */


        //-passo 5 - esconder a imagem anteriormente selecionada 
        EsconderImagemAtiva();
        /* Antes de refatorar: 

         const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa"); */



        //-passo 6 - fazer aparecer a imagem correspondente ao botao  clicado 

        /* console.log(indice);
        console.log(imagens[indice]) 

        mudamos p/ opcao abaixo
        imagens[indice].classList.add("ativa"); 
        
        Ela refatorada: */
        mostrarImagemDeFundo(indice);



        //-passo 7 - esconder a informacao do dragao anteriormente selecionado
        esconderInformacoesAtivas();

        /*Antes de refatorar:
        
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa"); */
        


        //-passo 8 - mostrar a informacao do dragao referente ao botao clicado 
        mostrarInformacoes(indice);

        /*Antes de refatorar:
    
        informacoes[indice].classList.add("ativa"); */
        
    });
}); // para cada botao nessa lista eu vou criar uma variavel botao, é um laço



function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
// vamos refatorar o codigo!!! funcoes do refatorar acima 