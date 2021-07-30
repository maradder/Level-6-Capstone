const express = require( 'express' )
const todoRouter = express.Router()
const Todo = require( "../models/todo" )


// Create Todo ------> Working in postman
todoRouter.post( "/", ( req, res, next ) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newTodo = new Todo( req.body )
    newTodo.save( ( err, savedTodo ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedTodo )
    }
    )
} )

// Retrieve all Todos -------> Working in postman
todoRouter.get( "/", ( req, res, next ) => {
    Todo.find( ( err, todos ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( todos )
    } )
} )

// Retrieve one Todo ---------> Working in postman
todoRouter.get( "/:todoId", ( req, res, next ) => {
    Todo.findById( { _id: req.params.todoId }, ( err, todo ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( todo )
    } )
} )

// Update Todo ------> Working in postman
todoRouter.put( "/:todoId", ( req, res, next ) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId },
        req.body,
        { new: true },
        ( err, updatedTodo ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( updatedTodo )
        }
    )
} )

// Destroy Todo --------> Working in postman
todoRouter.delete( "/:todoId", ( req, res, next ) => {
    Todo.findOneAndDelete(
        { _id: req.params.todoId },
        ( err, deletedTodo ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted ${ deletedTodo._id }` )
        }
    )
} )
module.exports = todoRouter