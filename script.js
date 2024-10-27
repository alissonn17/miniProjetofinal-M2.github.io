const button = document.getElementById("submit")
const muda = document.getElementById("update")
const nome = document.getElementById("name")
const sentence = document.getElementById("frase")
//const writeName = document.getElementById("spanName")
//const writeSentence = document.getElementById("spanFrase")
const resultado = document.getElementById("result")

let user = []
let resultAtual = []

let i = 0


class Frase{
    constructor(nameUser, sentenceUser){
        this.nome = nameUser.value
        this.frase = sentenceUser.value
    }
    read(){
        
        const writeName = document.createElement("span")
        const writeSentence = document.createElement("span")
        let num = document.createElement("label")
        
        let ler = document.createElement("section")
        
        const br = document.createElement("br")
        
        
        num.innerText = i+1
        
        const dados = document.createElement("section")     
        
        dados.style.display = "flex"
        dados.style.flexDirection = "column"
        dados.style.border = "solid black"
        dados.style.borderRadius = "10px"
        
        ler.style.display = "flex"
        ler.style.flexDirection = "row"
        ler.style.alignItems = "center"
        
        writeName.innerText = this.nome
        writeSentence.innerText = this.frase
        
        dados.appendChild(writeName)
        dados.appendChild(writeSentence)
        
        ler.appendChild(num)
        
        ler.appendChild(dados)
        
        resultado.appendChild(br)
        
        resultado.appendChild(ler)
        
        resultAtual.push(writeName.innerText)
        resultAtual.push(writeSentence.innerText)
        
    }
    update(){
    
    }
}

function get(){
    user.push(new Frase(nome,sentence))   
    user[i].read()
    i += 1
    resultAtual = []
}

button.addEventListener("click",()=>{
    if (muda.style.display = ("none")){
      muda.style.display = "flex"
      muda.style.justifyContent = "center"
      muda.style.width = "50px"
      muda.style.flexDirection = "colum"
    }
    
    get()
})
    
muda.addEventListener("click", ()=>{
      let u = prompt("Digite o número que quer alterar:") - 1
      
      let escolhe = prompt("Oque você quer alterar?")
      while (escolhe.toLowerCase() != "nome" &&  escolhe.toLowerCase() != "frase"){
       escolhe = prompt("Oque você quer alterar?")
      }
      
      if (escolhe == "nome"){
        user[u].update()
      }else{
        user[u].update()
      }
})