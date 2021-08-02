const express = require( 'express' )
const authRouter = express.Router()
const User = require( "../models/user" )
const jwt = require( "jsonwebtoken" )


// Get users // Signup ------> Working in postman
authRouter.get( "/", ( req, res, next ) => {
    User.find( ( err, users ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( users )
    } )
} )


// Signup ------> Working in postman
authRouter.post( "/signup", ( req, res, next ) => {
    User.findOne( { username: req.body.username.toLowerCase() }, ( err, user ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        if ( user )
        {
            res.status( 403 )
            return next( new Error( "That username already exists" ) )
        }
        const newUser = new User( req.body )
        newUser.save( ( err, savedUser ) => {
            if ( err )
            {
                res.status( 500 )
                return next( err )
            }
            const token = jwt.sign( savedUser.withoutPassword(), process.env.SECRET )
            return res.status( 201 ).send( { token, user: savedUser.withoutPassword() } )
        } )
    } )
} )

// Login ------> Working in postman
authRouter.post( "/login", ( req, res, next ) => {
    User.findOne( { username: req.body.username.toLowerCase() }, ( err, user ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        if ( !user )
        {
            res.status( 403 )
            return next( new Error( "Username or password are incorrect" ) )
        }
        user.checkPassword( req.body.password, ( err, isMatch ) => {
            if ( err )
            {
                res.status( 403 )
                return next( new Error( "Username or password are incorrect" ) )
            }
            if ( !isMatch )
            {
                res.status( 403 )
                return next( new Error( "Username or password are incorrect" ) )
            }
            const token = jwt.sign( user.withoutPassword(), process.env.SECRET )
            return res.status( 200 ).send( { token, user: user.withoutPassword } )
        } )
    } )
} )

// Delete User ------> Working in postman
authRouter.delete( "/:userId", ( req, res, next ) => {
    User.findByIdAndDelete( { _id: req.params.userId }, ( err, deletedUser ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( `Successfully deleted user: ${ deletedUser.username }` )
    } )
} )

module.exports = authRouter