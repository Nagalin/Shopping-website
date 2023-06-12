import passport from 'passport'
import User from '../database/schema/user'
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv').config()

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}
passport.use('jwt',new jwtStrategy(option, async(payload: any, done: any) => {
    console.log(payload.id)
    try {
        const user = await User.findById(payload.id)
        if(user) return done(null,user)
        return done(null,false)
        
    } catch (err) {
        return done(err,false)
    }
}))

export default passport