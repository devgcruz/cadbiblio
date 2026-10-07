const URL_BACKEND = 'http://10.138.50.4:3000/api'

export const cadastrarPessoa = async (dadosPessoa) => {

    try{

        const resposta = await fetch(`${URL_BACKEND}/pessoas`, {
               method: 'POST',
               headers:{
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(dadosPessoa)
        });

        if(!resposta.ok){
            const erro = await resposta.json();
            throw new Error( erro.mensagem || "Erro ao cadastrar pessoa." )
        }

        console.log(await resposta.json());

    } catch(e) {
        console.log(e);
        throw e;
    }

};
