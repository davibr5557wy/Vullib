------------------------
Titulo:Instruções de Database
Lib feita por:davibr5557wy
by: davibr5557wy
------------------------

Database => Arquivo Json
Database.LocalDatabase => Objeto, criado na hora


____________Dicionario__________
    | D = Disponível em ... |
    | DB = DataBase         |


__---------------------------------__
_---------------------------------__
Database e Database.LocalDatabase
_---------------------------------__
__---------------------------------__

    ---------
    Como usar
    ---------
    **apos o import da lib**:
    const DB = new Database("data.json")
                        ou
    const LocalDB = new Database.LocalDatabase("data.json")


        .renovate() => Da renovate no json da database, abrindo o arquivo e obtendo -- 
            |D|  Database


        .update() => Da renovate no arquivo da database, obtendo o json e trocando -- 
            |D|  Database


        .getAll() => Retorna todos os dados da database -- 
            |D|  Database, LocalDatabase


        .setAll(__DADOS__) => Troca os dados da database pelos __DADOS__ -- 
            |D|  Database, LocalDatabase


        .has(__DADO__) => Verifica se o __DADO__ possui na database e retorna uma boolean-- 
            |D|  Database, LocalDatabase


        .get(__DADO__) => Procura o __DADO__ na database e retorna-o, caso ele não exista, retorna "false" --
            |D|  Database, LocalDatabase


        .set(__DADO__ , __VALOR__) => Define o __DADO__ pelo valor __VALOR__ na database --
            |D|  Database, LocalDatabase


        .remove(__DADO__) => Remove o __DADO__ da database --
            |D|  Database, LocalDatabase


        .clear() => Remove todos os dados da database -- 
            |D|  Database, LocalDatabase


        .reWrite() => Apaga e escreve novamente os dados da database --
            OBS: Isso server caso você mude as configurações de write ou não (spaceSize e active) no arquivo "config.json" Tanto manual
            como automatico, para entender mais, só ler abaixo em "Database.JsonConfig"
            |D|  Database

__-------------------__
_-------------------__                                          
Database.JsonConfig
_-------------------__
__-------------------__     
                                  
Define as configurações de escrita                             
                                                                
                                                                 
---Como usar                                                    

Automatico
    Database.JsonConfig(
        {
            spaceSize: NUMBER,      //Tamanho do espaçamento
            active: BOOLEAN         //Define se está ativo ou não o uso de espaçamento
        }
    )
Manual
    Ir no arquivo "config.json" e alterar manualmente
    as configuraçãos de escrita do código