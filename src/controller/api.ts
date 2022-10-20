import { Request, Response } from 'express';

export const me = async (req: Request, res: Response) => {
    res.send({
        status:"ok",
        send:true,
        params: req.params
    })
}
