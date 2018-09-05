import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'
import { connect } from 'react-redux'

class ChatConversa extends Component {

    renderMensagem(msg, k) {
        return (
            <div key={k}>
                {
                    msg.origem === 'user' && <span>
                        <Badge color='primary'>você disse:</Badge>
                        <Alert color='primary'>{msg.texto}</Alert>
                    </span>
                }

                {
                    msg.origem === 'bot' && <span>
                        <Badge color='warning'>chatbot disse:</Badge>
                        <Alert color='warning'>{msg.texto}</Alert>
                    </span>
                }
            </div>
        )
    }

    render() {
        return (
            <div className='chat-conversa'>
                {
                    Object.keys(this.props.mensagens).map(key => {
                        return this.renderMensagem(this.props.mensagens[key], key)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)