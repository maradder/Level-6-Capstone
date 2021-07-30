const express = require( 'express' )
const noteRouter = express.Router()
const Note = require( '../models/note' )

// Create Note ------> Working in postman
noteRouter.post( "/", ( req, res, next ) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newNote = new Note( req.body )
    newNote.save( ( err, savedNote ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedNote )
    }
    )
} )

// Retrieve all Note -------> Working in postman
noteRouter.get( "/", ( req, res, next ) => {
    Note.find( ( err, notes ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( notes )
    } )
} )

// Retrieve one Note ---------> Working in postman
noteRouter.get( "/:noteId", ( req, res, next ) => {
    Note.findById( { _id: req.params.noteId }, ( err, notes ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( notes )
    } )
} )

// Update Note ------> Working in postman
noteRouter.put( "/:noteId", ( req, res, next ) => {
    Note.findOneAndUpdate(
        { _id: req.params.noteId },
        req.body,
        { new: true },
        ( err, updatedNote ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( updatedNote )
        }
    )
} )

// Destroy Note --------> Working in postman
noteRouter.delete( "/:noteId", ( req, res, next ) => {
    Note.findOneAndDelete(
        { _id: req.params.noteId },
        ( err, deletedNote ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted ${ deletedNote._id }` )
        }
    )
} )

module.exports = noteRouter