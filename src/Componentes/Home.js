import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                 </p>
                <Button color="danger">Danger!</Button>
            </div>

        )
    }
}

export default Home