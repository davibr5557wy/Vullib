


function create(tamanho,letras){
    var pss = 0
    if(letras){pss=2}
    var id = ""
    for (let index = 0; index < tamanho; index++) {
        const duvida = Math.floor(Math.random() * pss)
        if(duvida > 0){
            const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','k','f','l','t','u','v','w','x','y','z']
            const escolha = Math.floor(Math.random() * alfabeto.length)
            id = id + alfabeto[escolha].toUpperCase()
        }else{
            const num = Math.floor(Math.random() * 10)
            id = id + String(num)
        }
    }
    return id
}

module.exports = function createId(options = {tamanho:10,new:false,dados:{},letras:false }){
    if(options && typeof options !== "object")throw new Error("{As opcões precisam ser um objeto '{}'}");
    
    const tamanho  = options.tamanho
    const New = options.new
    const dados = options.dados
    var letras = options.letras
    if(typeof letras !== "boolean") letras = false;

    if(New &&typeof dados === 'object' &&typeof tamanho === "number"){
        function criar(){
            const idCriado = create(tamanho,letras)
            if(dados[String(idCriado)]){
                try{
                    return criar()
                }catch{return false}
            }else{
                return idCriado
            }
        }
        return criar()

    }else if(typeof tamanho === "number"){
        return create(tamanho)
    }
}