import axios from 'axios'

import {enviaMensagem} from './chat'

export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (respostas) => {
    return {
        type: 'CONVERSA_WATSON_SUCESS',
        respostas,
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
        const url = 'https://us-central1-chatbot-em-react.cloudfunctions.net/conversa'
        axios
            .post(url, {mensagem, contexto})
            .then((data) => {
                dispatch(conversaWatsonSucess(data))
                const msg = {
                    texto: data.data.output.text[0],
                    origem: 'bot'
                }
                dispatch(enviaMensagem(msg))
            })
            .catch(() => dispatch(conversaWatsonError()))
    }
})


// conversaWatson(mensagem, contexto)


// conversaWatsonRequest() => 
//    conversaWatsonSucess(resposta) 
//    converWatsonError()
