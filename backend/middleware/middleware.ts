import passport from "passport";
import { Response, Request, NextFunction } from "express";
import User from "../database/schema/User";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }
    
    passport.authenticate('jwt', { session: false }, (err: any, user: any) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
        req.user = user;
        return next();
    })(req, res, next);
}

export function isSeller(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    passport.authenticate('jwt',{session : false},async(err : any,id : any)=>{
        if(err) {
            console.log(err)
            return res.sendStatus(500)
        }

        if(!id) return res.status(401).json({ message: 'Unauthorized - Invalid token' });

        const user = await User.findById(id)
        console.log(user)
        
        if(user?.role === 'seller') return next()

        return res.status(401).json({ message: 'Unauthorized - Invalid role' });

    })(req,res,next)
}
