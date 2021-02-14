import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt'
import { User } from '../models/User'
import { config } from '../config'

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({$or: [{email: username}, {username}] })

            if (!user) {
                return done(null, false)
            }

            const validate = await user.isValidPassword(password)

            console.log(validate)

            if (!validate) {
                return done(null, false)
            }

            return done(null, user);

        } catch (err) {
            return done(err);
        }    
    }
))

passport.use(
  new JWTstrategy(
    {
      secretOrKey: config.SESSION_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export { passport }

