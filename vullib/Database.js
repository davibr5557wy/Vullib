const funcs = require('./functions')

module.exports=class Database{
    dados = {json:{},nome:""}
    constructor(nome){
        if(nome){
        const arquivo = funcs.abrirArquivo(nome);if(arquivo){}else{throw new Error("{Ocorreu um erro ao abrir o arquivo}")}
        try{this.dados.json = JSON.parse(arquivo)}catch{throw new Error("{O arquivo não esta escrito em json corretamente}")}
        this.dados.nome = nome}
    }
    renovate(){
        //da updade no json
        if(this.dados.nome){const arquivo = funcs.abrirArquivo(this.dados.nome);if(arquivo){}else{throw new Error("{Ocorreu um erro ao abrir o arquivo}")}
        try{this.dados.json = JSON.parse(arquivo)}catch{throw new Error("{O arquivo não esta escrito em json corretamente}")}}
    }
    update(){
        /*  da update no arquivo */
        funcs.setArquivo(this.dados.nome,this.dados.json)
    }
    getAll(){
        this.renovate()
        return this.dados.json
    }
    setAll(dados){
        if(!dados)return;
        this.dados.json = dados
        funcs.setArquivo(this.dados.nome,this.dados.json)
        this.renovate()
        return true
    }
    has(dado){
        this.renovate()
        if(this.dados.json[dado]){return true}
        return false
    }
    get(dado){
        if(!this.has(dado)){return false}
        return this.dados.json[dado]
    }
    set(dado,value){
        if(!dado)return false;
        this.dados.json[dado] = value
        funcs.setArquivo(this.dados.nome,this.dados.json)
    }
    remove(dado){
        if(!this.has(dado)){return false}
        delete(this.dados.json[dado])
        funcs.setArquivo(this.dados.nome,this.dados.json)
        return true
    } 
    clear(){
        this.dados.json = {}
        this.update()
    }
    reWrite(){
        funcs.setArquivo(this.dados.nome,this.getAll())
    }
}
module.exports.LocalDatabase=class LocalDatabase{
    dados = {json:{}}
    getAll(){
        return this.dados.json
    }
    setAll(dados){
        this.dados.json = dados
        return true
    }
    has(dado){
        if(this.dados.json[dado]){return true}
        return false
    }
    get(dado){
        if(!this.has(dado)){return false}
        return this.dados.json[dado]
    }
    set(dado,value){
        this.dados.json[dado] = value
    }
    remove(dado){
        if(!this.has(dado)){return false}
        delete(this.dados.json[dado])
        return true
    }   
    clear(){
        this.dados.json={}
    }
}
module.exports.JsonConfig=function JsonConfig(options = {spaceSize:4,active:true}){
    if(typeof options.spaceSize !== "number"||typeof options.active !== "boolean")return false;
    try{
        const fs = require('fs')
        const str = JSON.parse(JSON.stringify(options,["spaceSize","active"]),null)   ;
        const jsons = JSON.stringify({Tab:str},null,4)

        fs.writeFileSync(__dirname + '/config.json',jsons,'utf-8')
    }catch{throw new Error('Não foi possivei alterar as configurações')}
}