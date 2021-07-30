const express = require( 'express' )
const app = express()
const axios = require( 'axios' )
require( "dotenv" ).config()
const morgan = require( 'morgan' )
const bcrypt = require( 'bcrypt' )
const mongoose = require( 'mongoose' )
const expressJwt = require( 'express-jwt' )

process.env.SECRET
process.env.DB_SECRET

// Middleware
app.use( express.json() )
app.use( morgan( "dev" ) )

// Connect to the database

mongoose.connect( `mongodb+srv://marcus:${ process.env.DB_SECRET }@workbench.vjrau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log( "Connected to the DB" )
)

app.use( "/auth", require( "./routes/authRouter" ) )
app.use( "/api", expressJwt( { secret: process.env.SECRET, algorithms: ['HS256'] } ) )
app.use( "/api/bookmark", require( "./routes/bookmarkRouter" ) )
app.use( "/api/note", require( "./routes/noteRouter" ) )
app.use( "/api/todo", require( "./routes/todoRouter" ) )

app.listen( 9000, () => console.log( "Server is listening on port 9000" ) )