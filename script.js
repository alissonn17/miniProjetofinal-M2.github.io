const button = document.getElementById("submit")
const muda = document.getElementById("update")
const apaga = document.getElementById("delete"
)
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
    read(c){
        
        const writeName = document.createElement("span")
        const writeSentence = document.createElement("span")
        let num = document.createElement("label")
        
        let ler = document.createElement("section")
        
        const br = document.createElement("br")
        
        
        num.innerText = c + 1
        
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
    update(l){
     let escolhe = prompt("Oque você quer alterar?")
      while (escolhe.toLowerCase() != "nome" &&  escolhe.toLowerCase() != "frase"){
       escolhe = prompt("Oque você quer alterar?")
      }
      
      if (escolhe == "nome"){
        this.nome = prompt("Digite o novo nome:")
        this.read(l)
      }else{
        this.frase = prompt("Digite a nova frase:")
        this.read(l)
      }
    }
    del(){
      alert(`"${this.nome}" com frase "${this.frase}" deletado com sucesso!`)
    }
}

function get(){
    user.push(new Frase(nome,sentence))   
    user[i].read(i)
    resultAtual = []
    i += 1
}

button.addEventListener("click",()=>{
    if (muda.style.display = ("none")){
      estiloButton(muda)
    }
    
    if (apaga.style.display = ("none")){
      estiloButton(apaga)
    }
    
    get()
})
    
muda.addEventListener("click", ()=>{
      let u = prompt("Digite o número que quer alterar:") - 1
      
      user[u].update(u)
})

apaga.addEventListener("click", ()=>{
      let u = prompt("Digite o número que quer apagar") - 1
      
      user[u].del()
      user.splice(user[u])
      i -= 1
})

function estiloButton(bot){
  bot.style.display = "flex"
  bot.style.justifyContent = "center"
  bot.style.width = "50px"
  bot.style.flexDirection = "colum"
}