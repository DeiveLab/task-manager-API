const mongoose = require('mongoose')

const connectionURL = process.env.MONGOOSE_URL

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } )