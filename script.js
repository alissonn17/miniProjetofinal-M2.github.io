const button = document.getElementById("submit")
const nome = document.getElementById("name")
const sentence = document.getElementById("frase")
const writeName = document.getElementById("spanName")
const writeSentence = document.getElementById("spanFrase")

let user = []
let result = []
let resultAtual = []

let i = 0


class Frase{
    constructor(nameUser, sentenceUser){
        this.nome = nameUser.value
        this.frase = sentenceUser.value
    }
    read(){
        writeName.innerText = this.nome
        writeSentence.innerText = this.frase
        
    }
}

function get(){
    user.push(new Frase(nome,sentence))   
    user[i].read()
    resultAtual.push(writeName)
    resultAtual.push(writeSentence)
    result.push(resultAtual)

    i += 1
    
}

button.addEventListener("click",()=>{
    get()
})
    