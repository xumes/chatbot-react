import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className='chat-mensagem'>
            <InputGroup>
                <Input placeholder='Digite sua mensagem' />
                <InputGroupAddon addonType='append'>
                    <Button color='success'>enviar</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default ChatMensagem