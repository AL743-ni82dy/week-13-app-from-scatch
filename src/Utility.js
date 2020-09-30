
export const postScore = async (name, score) => {
    const theResponse = await fetch('http://localhost:3010/scores/', 
    {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            name: name,
            score: score
        })
    })
    
    // const body = await theResponse.json();
    if (theResponse.status !== 200) throw Error('Error on post');
    return 'Post one record'
}

export const getScores = async () => {
    const itemsList = []

    const theResponse = await fetch('http://localhost:3010/scores/')
    
    const body = await theResponse.json();
    if (theResponse.status !== 200) throw Error('Error on get');

    for (const [index, item] of body.entries()) {
        if (item.name === '') {
            itemsList.push('')
        } else {
            itemsList.push(item.name)
        }
        itemsList.push(item.score)
    }

    return itemsList
    // return theResponse.status
}

export const deleteOne = async (id) => {

    const theResponse = await fetch('http://localhost:3010/scores/' + id, 
    {
        method: 'DELETE',
    })
    if (theResponse.status !== 200) {
        return 'delete failed'    
    }
    return 'Deleted one record'
}

// returns id of first match of name and score
export const findId = async (name, score) => {
    const idList = []
    const nameList = []
    const scoreList = []
    let counter = 0

    const theResponse = await fetch('http://localhost:3010/scores/')
    
    const body = await theResponse.json();
    if (theResponse.status !== 200) throw Error('Error on get');

    for (const [index, item] of body.entries()) {
        idList.push(item._id)
        nameList.push(item.name)
        scoreList.push(item.score)
    }
    while (counter++ < idList.length) {
        if (nameList[counter] === name && scoreList[counter] === score) {
            return idList[counter]
        }
    }
    return ''
}