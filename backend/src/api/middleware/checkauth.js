const jwt = require('jsonwebtoken');

exports.check_auth = (req, res, next) => {
    try{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            req.userData = jwt.verify(token, process.env.JWT_KEY);
            next();
        } else {
            return res.status(401).json({error: 'Authorization denied'});
        }
    }
    catch (error) {
        console.log(error);
        return res.status(401).json(error);
    }
}