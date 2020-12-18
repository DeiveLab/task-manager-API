const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
const corsOptions = {
    origin: true
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is up on port ' + port)
})
