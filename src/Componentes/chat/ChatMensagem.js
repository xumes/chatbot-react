import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

import { enviaMensagem } from './../../store/actions/chat'
import { conversaWatson } from './../../store/actions/watson'

class ChatMensagem extends Component {
    constructor(props) {
        super(props)

        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
    }

    inputEnviaTexto(e) {
        if (e.keyCode === 13) {
            console.log(e.target.value)
            const mensagem = {
                texto: e.target.value,
                origem: 'user'
            }
            let contexto = {}
            if (this.props.resposta.data && this.props.resposta.data.context){
                contexto = this.props.resposta.data.context
            }
            this.props.enviaTexto(mensagem)
            this.props.conversaWatson(mensagem)
            e.target.value = ''
        }
    }

    render() {
        return (
            <div className='chat-mensagem'>
                <hr />
                <InputGroup>
                    <Input onKeyDown={this.inputEnviaTexto} placeholder='Digite sua mensagem' />
                    <InputGroupAddon addonType='append'>
                        <Button color='success'>enviar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg) => dispatch(conversaWatson(msg, ''))
    }
}

const mapStateToProps = (state) => {
    return {
        resposta: state.watson.respostas
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMensagem)