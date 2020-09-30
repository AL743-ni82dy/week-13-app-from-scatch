import React from 'react'
import Main from './theGame/Components/Main'

class PlayGame extends React.Component {
    constructor (props) {
        super(props)
    }

    // JR suggested changing div to a form
    render () {
        return (
            <div>
                <Main />
            </div>
        )
    }

}

export default PlayGame;