import routes from "./routes";

export const localsMiddleware = (req,res,next)=> {
    res.locals.siteName = 'hello world';
    res.locals.routes= routes;
    next();
};