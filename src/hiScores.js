import React from 'react'
import { scoreSort } from './Utility'

class HiScores extends React.Component {
    constructor () {
        super()
        this.state = {response: []}
    }
    componentDidMount() {
        this.callApi()
        .then(response => this.setState({response}))
        .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('http://localhost:3010/scores');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    render () {
        const { response } = this.state
        const itemsList = []
        const sortedScores = scoreSort(response)

        for (const [index, item] of sortedScores.entries()) {
            itemsList.push(<li key={index}>
                {item.name}: {item.score}
            </li>)
        }
/*
        for (let index = 0;index < sortedScores.length; index++) {
            itemsList.push(<li key={index}>
                {sortedScores[index]}
            </li>)
        }
        */
        return (
            <div>
                <ul>
                    <h3>Top Scores (Lower is better)</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default HiScores
