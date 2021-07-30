const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const bookmarkSchema = new Schema( {
    siteName: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String, required: false },
} )

module.exports = mongoose.model( "Bookmark", bookmarkSchema )