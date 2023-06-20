import passport from "passport";
import { Response, Request, NextFunction } from "express";

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
