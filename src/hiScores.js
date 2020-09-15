import React from 'react'

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

        for (const [index, item] of response.entries()) {
            itemsList.push(<li key={index}>
                {item.name}: {item.score}
            </li>)
        }
        return (
            <div>
                <ul>
                    <h3>Scores</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default HiScores
