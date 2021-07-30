const express = require( "express" )
const bookmarkRouter = express.Router()
const Bookmark = require( "../models/bookmark" )

// Create Bookmark ------> Working in postman
bookmarkRouter.post( "/", ( req, res, next ) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newBookmark = new Bookmark( req.body )
    newBookmark.save( ( err, savedBookmark ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedBookmark )
    }
    )
} )

// Retrieve all Bookmark -------> Working in postman
bookmarkRouter.get( "/", ( req, res, next ) => {
    Bookmark.find( ( err, bookmarks ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( bookmarks )
    } )
} )

// Retrieve one Bookmark ---------> Working in postman
bookmarkRouter.get( "/:bookmarkId", ( req, res, next ) => {
    Bookmark.findById( { _id: req.params.bookmarkId }, ( err, bookmarks ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( bookmarks )
    } )
} )

// Update Bookmark ------> Working in postman
bookmarkRouter.put( "/:bookmarkId", ( req, res, next ) => {
    Bookmark.findOneAndUpdate(
        { _id: req.params.bookmarkId },
        req.body,
        { new: true },
        ( err, updatedBookmark ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( updatedBookmark )
        }
    )
} )

// Destroy Bookmark --------> Working in postman
bookmarkRouter.delete( "/:bookmarkId", ( req, res, next ) => {
    Bookmark.findOneAndDelete(
        { _id: req.params.bookmarkId },
        ( err, deletedBookmark ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted ${ deletedBookmark._id }` )
        }
    )
} )

module.exports = bookmarkRouter
