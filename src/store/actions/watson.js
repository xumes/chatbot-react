
export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (mensagens, contexto) => {
    return {
        type: 'CONVERSA_WATSON_SUCESS',
        mensagens,
        contexto,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
}

export const conversaWatson = ((mensagem, contexto) => {
    return dispatch => {
        dispatch(conversaWatsonRequest())
        //chama o backend do watson (Firebase cloud functions)
        
    }
})


// conversaWatson(mensagem, contexto)


// conversaWatsonRequest() => 
//    conversaWatsonSucess(resposta) 
//    converWatsonError()
