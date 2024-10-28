// botão concluído, atualiza e deletar
const button = document.getElementById("submit")
const muda = document.getElementById("update")
const apaga = document.getElementById("delete"
)

// elemento nome e frase
const nome = document.getElementById("name")
const sentence = document.getElementById("frase")
//const writeName = document.getElementById("spanName")
//const writeSentence = document.getElementById("spanFrase")
const resultado = document.getElementById("result")

let user = []
let resultAtual = []
let id = []

let i = 0

// classe frase para cada fase e nome
class Frase{
    constructor(nameUser, sentenceUser, posUser){
        this.nome = nameUser.value
        this.frase = sentenceUser.value
        this.pos = posUser
        id.push(this.pos)
    }
    //leitura e criação de elemento em tela 
    read(c){
        const writeName = document.createElement("span")
        const writeSentence = document.createElement("span")
        this.num = document.createElement("label")
        
        let ler = document.createElement("section")
        
        const br = document.createElement("br")
        
        
        this.num.innerText = c + 1
        
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
        
        ler.appendChild(this.num)
        
        ler.appendChild(dados)
        
        resultado.appendChild(br)
        
        resultado.appendChild(ler)
        
        resultAtual.push(writeName.innerText)
        resultAtual.push(writeSentence.innerText)
        
        console.log(this.pos)
        
    }
    // atualiza elemento
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
    // confirma delete
    del(){
      const remo = document.createElement("h4")
      remo.innerText = `${this.num.innerText} - ${this.nome} e ${this.frase} deletado!`
      resultado.appendChild(remo)
      remo.style.color = "red"
      
      console.log(id)
      
      alert(`"${this.nome}" com frase "${this.frase}" deletado com sucesso!`)
      
    }
    atualizaPos(db){
      this.pos = id[db]
      console.log(id[db])
    }
    test(){
      console.log(this.pos)
    }
}

// instancia e chama o método read do novo elemento
function get(){
    user.push(new Frase(nome,sentence, i))   
    user[i].read(i)
    resultAtual = []
    i += 1
}

// adiciona
button.addEventListener("click",()=>{
    if (muda.style.display = ("none")){
      estiloButton(muda)
    }
    
    if (apaga.style.display = ("none")){
      estiloButton(apaga)
    }
    
    get()
})

// atualiza elemento e frase
muda.addEventListener("click", ()=>{
      let u = prompt("Digite o número que quer alterar:") - 1
      
      user[u].update(u)
})

// deleta elemento e frase
apaga.addEventListener("click", ()=>{
      let u = prompt("Digite o número que quer apagar") - 1
      
      // mantem Index 
      i -= 1
      
      id.splice(u,1)
      
      for (let g = u; g < id.length; g++){
        id[g] -= 1
        user[g].atualizaPos(g)
      }
      
      console.log(id)
      
      user[u].del()
      user.splice(u,1)      
      
      
})

// estilo do button 
function estiloButton(bot){
  bot.style.display = "flex"
  bot.style.justifyContent = "center"
  bot.style.width = "50px"
  bot.style.flexDirection = "colum"
}