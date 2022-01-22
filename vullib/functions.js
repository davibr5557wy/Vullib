const config = require('./config.json')
const fs = require('fs')

function getNome(nome){
    try{const data = fs.readFileSync('./././'+nome,"utf-8");if(data){return './././'+nome}
}catch{
    try{const data = fs.readFileSync('././././'+nome,"utf-8");if(data){return '././././'+nome}}
    catch(erro){throw new Error("{Ocorreu um erro ao abrir o arquivo}")}}
}


function abrirArquivo(nome){
    if(typeof nome !== "string"){throw new Error('{Você precisa passar o nome como string}')}
    const Caminho = getNome(nome)
    const data = fs.readFileSync(Caminho,"utf-8")
    return data
}

function getConfig(){
    const active = config.Tab.active
    const size = config.Tab.spaceSize
    
    if(active){
        try{return Number(size)}catch{return 0}
    }
    return null
}

function write(nome,dados = {}){
    const Nome = getNome(nome)
    const Config = getConfig()
    const dataString = JSON.stringify(dados,null,Config)
    fs.writeFileSync(Nome,dataString,"utf-8")
}

function setArquivo(nome,dados){
    const Nome = getNome(nome)
    write(Nome,dados)
}


module.exports = {
    abrirArquivo,
    setArquivo
}
