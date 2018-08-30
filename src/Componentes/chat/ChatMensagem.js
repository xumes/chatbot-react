import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import {connect} from 'react-redux'

import {enviaMensagem} from './../../store/actions/chat'

class ChatMensagem extends Component {
    constructor(props) {
        super(props)

        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
    }

    inputEnviaTexto(e){
        if (e.keyCode === 13) {
            console.log(e.target.value)
            this.props.enviaTexto(e.target.value)
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
        enviaTexto: (msg) => dispatch(enviaMensagem(msg))
    }
}

export default connect(null, mapDispatchToProps)(ChatMensagem)