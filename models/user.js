const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
const bcrypt = require( 'bcrypt' )

const userSchema = new Schema( {
    username: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    bookmarks: { type: Array, required: true },
    taskboard: {
        backlog: { type: Array, required: true },
        inProgress: { type: Array, required: true },
        review: { type: Array, required: true },
        done: { type: Array, required: true }
    },
    notes: { type: Array, required: true },
} )

// Pre-save hook to encrypt user passwords on signup
userSchema.pre( "save", function ( next ) {
    const user = this
    if ( !user.isModified( "password" ) ) return next()
    bcrypt.hash( user.password, 10, ( err, hash ) => {
        user.password = hash
        next()
    } )
} )

// Method to check encrypted password on login
userSchema.methods.checkPassword = function ( passwordAttempt, callback ) {
    bcrypt.compare( passwordAttempt, this.password, ( err, isMatch ) => {
        if ( err ) return callback( err )
        return callback( null, isMatch )
    } )
}

// Method for removing password from token 
userSchema.methods.withoutPassword = function () {
    const user = this.toObject()
    delete user.password
    return user
}

// Export the module
module.exports = mongoose.model( "User", userSchema )