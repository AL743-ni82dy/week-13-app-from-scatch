import React from 'react'
import GetInput from './getInput'
import { postScore, getScores, findId, deleteOne, findAllIds } from './Utility.js';

class ScoreDebugger extends React.Component {
    constructor (props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.state  = {name: '', score: 0, response: []} 
    }

    handleNameChange(input) {
        this.setState({name: input})
    }

    handleNumberChange(input) {
        this.setState({score: input})
    }
    
    handlePost = async () => {
        // alert('click event one');
        if (this.state.name.length === 0) {
            this.setState({response: 'Please input name'})    
        } else {
            const result = await postScore(this.state.name, this.state.score)
            this.setState({response: result})
        }
    }
    
    handleGet = async () => {
        // alert('click event get one');
        const result = await getScores()
        this.setState({response: result})
    }

    handleDelete = async () => {
        if (this.state.name.length === 0) {
            this.setState({response: 'Please input name'})    
        } else {
            const id = await findId(this.state.name, this.state.score)
            const result = await deleteOne(id)
            this.setState({response: result})
        }
        this.setState({response: 'All Scores Deleted'})
    }

    handleDeleteAll = async () => {
        const allIds = await findAllIds()
        let result = ''
        for(let index = 0;index < allIds.length; index++) {
            result = await deleteOne(allIds[index])
            this.setState({response: result})
        }
    }

    // JR suggested changing div to a form
    render () {
        return (
            <form>
                <GetInput type="text" title='Name'
                onInputChange={this.handleNameChange} />
                <GetInput type="number" title='Score'
                onInputChange={this.handleNumberChange} />
                <button type="button" onClick={this.handlePost}>post</button>
                <button type="button" onClick={this.handleGet}>get scores</button>
                <button type="button" onClick={this.handleDelete}>Delete</button>
                <button type="button" onClick={this.handleDeleteAll}>Delete All</button>
                <div>{this.state.response}</div>
            </form>
        )
    }

}

export default ScoreDebugger;