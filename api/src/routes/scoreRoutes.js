const router = require('express').Router();
const {deleteScore, updateScore, createScore, getScores} = require('../database/score')

router.get('/', async (req, resp) => {
    resp.send(await getScores())
})

router.post('/', async (apiReq, apiResp) => {
    const newScore = apiReq.body
    await createScore(newScore)
    apiResp.send({
        message: 'New score created',
        allScores: await getScores(),
        thanks: true
    })
})

router.put('/:id', async (apiRequest, apiResponse) => {
    const updatedScore = apiRequest.body
    await updateScore(apiRequest.params.id, updatedScore)
    apiResponse.send({ message: 'Score updated' })
})

router.delete('/:scoreId', async (apiRequest, apiResponse) => {
    await deleteScore(apiRequest.params.scoreId)
    apiResponse.send({ message: 'score deleted'})
})

module.exports = router