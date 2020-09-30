const {getDatabase} = require('./mongo-common');
const {ObjectID} = require('mongodb');
let getUserName = require('git-user-name')
const mongoName = 'hiScores'

async function createScore(score) {
    const database = await getDatabase();
    score.addedby = getUserName()
    const {insertedId} = await database.collection(mongoName).insertOne(score);
    return insertedId;
}

async function getScores() {
    const database = await getDatabase();
    return await database.collection(mongoName).find({}).toArray();
}

async function deleteScore(id) {
    const database = await getDatabase();
    await database.collection(mongoName).deleteOne({
        _id: new ObjectID(id)
    })
}
// deleteByNameScore not working
async function deleteByNameScore(req, resp) {
    const database = await getDatabase();
    const {name, score} = req.body
    await database.collection(mongoName).findOneAndDelete({
        name: name,
        score: score
    })
}

async function updateScore(id, score) {
    const database = await getDatabase();
    delete score._id;
    await database.collection(mongoName).update(
        {_id: new ObjectID(id), },
        {
            $set: {
                ...score,
            },
        },
    )
}

module.exports = {
    createScore,
    getScores,
    deleteScore,
    updateScore,
    deleteByNameScore
}
