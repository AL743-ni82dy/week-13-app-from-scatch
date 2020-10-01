import React from 'react'

class GetInput extends React.Component {

    inputChange = (input) => {
        this.props.onInputChange(input.target.value);
    }
    render () {
        const newTitle=this.props.title
        const newType=this.props.type
        return (
            <div>
                <label>{newTitle}</label>
                <input type={newType} onChange={this.inputChange} />
            </div>
        )
    }
}

export default GetInput