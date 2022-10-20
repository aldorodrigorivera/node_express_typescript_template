import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    const validToken =  true;
    if(validToken){
        return next();
    }
    return res.status(401).send("Unauthorized")
} 