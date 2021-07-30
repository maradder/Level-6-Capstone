const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const noteSchema = new Schema( {
    title: { type: String, required: true },
    dateEntered: { type: Date, default: Date.now },
    dateReminder: { type: Date, required: true },
    note: { type: String, required: true }
} )

module.exports = mongoose.model( "Note", noteSchema )