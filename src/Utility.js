
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
        return ('delete failed on ' + id)
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
        if ( nameList[counter] === name && scoreList[counter] == score ) {
            return idList[counter]
        }
    }
    return ''
}

// return list of id of all scores
export const findAllIds = async () => {
    const idList = []

    const theResponse = await fetch('http://localhost:3010/scores/')
    
    const body = await theResponse.json();
    if (theResponse.status !== 200) throw Error('Error on get');

    for (const [index, item] of body.entries()) {
        idList.push(item._id)
    }

    return idList
}

// sort score array-n.b. lower is better
// input array is a list of objects [ {name: score}, {name: socre}]
export const scoreSort = (array) => {
    const topLimit = 5
    const arrayCopy = array
    let validLimit = 0
    let foundBefore = 0
    let prevValue = -1
    let returnArray = []
    let keyArray = []
    let valueArray = []
    let nameArray = []
    let scoreArray = []
    let sortedValues = []

    if (array.length === 0) {
        returnArray = []
    } else if (array.length === 1 ) {
        returnArray = array
    } else {
        array.forEach( (item) => {
            for (let key in item) {
                keyArray.push(key)
                valueArray.push(item[key])    
            }
            nameArray.push(item.name)
            scoreArray.push(item.score) 
        })
        sortedValues = scoreArray.sort()
        if (sortedValues.length < topLimit) {
            validLimit = sortedValues.length
        } else {
            validLimit = topLimit
        }
        for(let index = 0;index < validLimit;index++) {
            let counter = 0
            let foundCount = 0
            let searchValue  = parseInt(sortedValues[index])
            if (searchValue === prevValue) {
                foundBefore++
            } else { foundBefore = 0 }
            while (counter < array.length) {
                let itemObj = array[counter]
                if (searchValue === parseInt(itemObj.score)) {
                    if (prevValue == itemObj.score) {
                        if (foundCount < foundBefore) {
                            foundCount++
                            counter++
                        } else {
                            returnArray.push(itemObj)
                            counter = array.length + 10
                        }   
                    } else {
                        returnArray.push(itemObj)
                        counter = array.length + 10
                    }
                } else {
                counter++
                }
            }
            prevValue = searchValue
        }
    }
    return returnArray
}
