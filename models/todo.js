const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const todoSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    postedBy: { type: String, required: true },
    assignedTo: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    dueBy: { type: Date, required: false },
    status: { type: String, enum: ['todo', 'inProgress', 'toReview', 'done'], default: 'todo' }
} )

module.exports = mongoose.model( "Todo", todoSchema )