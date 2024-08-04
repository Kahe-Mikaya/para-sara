let alfabeto = "abcdefghijklmnopqrstuvwxyz"; 
let palavras = [{"palavra":"abacate","dica":"fruta"},{"palavra":"serenata-existencialista","dica":"musica"} ];
let tentativa = 0;
let palavra = "";
let palavra_secreta = "";
let imagens = ["forca1.png","forca2.png","forca3.png","forca4.png", "forca5.png", "forca6.png", "forca7.png"]
let erros = 0




let div_palavra = document.querySelector("#palavra");
let divBotao = document.querySelector("#botoes");
let divPergunta = document.querySelector("#pergunta");
let botaoiniciar = document.querySelector("#iniciar");

function gerarBotao(){

  divBotao.replaceChildren();
  for (let i = 0; i < alfabeto.length; i++){
    let botao = document.createElement("button");
    botao.setAttribute("id","botao");
    console.log("entrei aqui for ");
   
      
    botao.addEventListener("click",function(){
      console.log("entrei aqui");
      
      if(tentarLetra(botao.textContent)){
        botao.style.backgroundColor = "green";
      }
      else{
        botao.style.backgroundColor = "red";
        erros++;
        document.querySelector("#forca").src = imagens[erros];
        if(erros == 6){
          alert("Você perdeu!");
          document.querySelector("#palavra").textContent = palavra;
          document.querySelector("#pergunta").textContent = "A palavra era: " + palavras[tentativa].palavra;
          console.log(palavras[tentativa].palavra);
          divBotao.replaceChildren();
          
        }
      }
    botao.disabled = true;
    });
  
    botao.textContent = alfabeto[i];
    divBotao.appendChild(botao);

  }
} 

function codificarPalavra(){
  gerarBotao();
  div_palavra.textContent= "";
  palavra = "";
  for (let i = 0; i < palavras[tentativa].palavra.length; i++){
   
    if(palavras[tentativa].palavra[i] == "-"){
      palavra = palavra + "- ";
      palavra_secreta = palavra_secreta + "-";
    }
    else{
    palavra = palavra + "_ ";
    palavra_secreta = palavra_secreta +"_"
    }
  }
  div_palavra.textContent = palavra;
  divPergunta.textContent = palavras[tentativa].dica;
  
  
}
function tentarLetra(letra){
  let acertou = false;
  for (let i = 0; i < palavras[tentativa].palavra.length; i++){
    if (letra == palavras[tentativa].palavra[i]){
      palavra = palavra.slice(0,i*2) + letra + palavra.slice(i*2+1);
      palavra_secreta = palavra.replaceAll(" ","");;
      acertou = true;
    }
    
  }
  console.log(palavra, palavra_secreta)
  div_palavra.textContent = palavra;
  if (palavra_secreta == palavras[tentativa].palavra){
    alert("voce acertou!\n a palavra era: " + palavras[tentativa].palavra);
    tentativa++;
    codificarPalavra();
  }
  if(acertou){
    return true
  }  
  else{
    return false
  }
}
botaoiniciar.addEventListener( "click",function(){
  codificarPalavra();
  
})
 



window.addEventListener("load",function(){
  
 
})