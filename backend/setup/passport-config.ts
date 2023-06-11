import passport from 'passport'
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv').config()

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}
passport.use(new jwtStrategy(option, (payload: any, done: any) => {
   
    if (payload === 'admin') {
        console.log('here')
        return done(null, 'admin')
    }
    console.log('fail')

    return done(null, false)
}))

export default passport