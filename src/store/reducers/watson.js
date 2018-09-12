const INITIAL_STATE = {
    respostas: [],
    carregando: false,
    erro: false
}

export default function conversaWatson(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'CONVERSA_WATSON_REQUEST': 
            return {
                carregando: true,
                respostas: [],
                erro:false
            }

        case 'CONVERSA_WATSON_SUCESS':
            return {
                carregando: false,
                respostas: action.respostas,
                erro: false
            }

        case 'CONVERSA_WATSON_ERROR': 
            return {
                carregando: false,
                respostas: [],
                erro: true
            }

        default: return state
    }
}