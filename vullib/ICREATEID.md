------------------------
Titulo:Instruções de CreateId
Lib feita por:davibr5557wy
by: davibr5557wy
------------------------

Create id é uma lib que cria id para você, mas você escolhe as informações

Para criar um id basico faça:
    **apos o import da lib**:

    const IdCriado = CreateId(
        {
            tamanho: NUMBER,        //Quantos digitos tem o id,
            letras: BOOLEAN,        //Se você quer ter letras, ||__Ex: Sem letras: 12345, com letras: 1A3J5__||
            new: BOOLEAN,           //Para usar o new, você precisa passar um objeto, ele irá criar um id novo, que não tem no objeto
            dados:JSON OBJECT       //Caso você tenha ativado o new, ele ira criar um id com um nome que não tem nos dados
        }
    )       
