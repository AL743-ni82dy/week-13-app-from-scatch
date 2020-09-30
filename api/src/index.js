// index.js
const PORT = 3010
const { app,
    startDatabase,
} = require('./app-common.js')

// endpoint to return to the top
app.get('/', async (req, resp) => {
    resp.send("Home")
})

app.use('/scores', require('./routes/scoreRoutes'))

// start database
startDatabase().then(async () => {
    // 
}).catch(() => {
    console.log("error occurred")
})

app.listen(PORT, async () => {
    console.log('web server started on http://localhost:' + PORT)
})
