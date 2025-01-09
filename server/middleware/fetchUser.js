var jwt = require('jsonwebtoken');
const JWT_SECRET = 'KMAKHIUJEN:WPJHWOEDUHWEO#IWBEI';

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to req body
    const token = req.header('auth-token');  // The token is fetched from the jwt's header and it is named as auth-token
    
    if (!token) {
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);  // token is verified with pre-defined JWT-SECRET
        req.user = data.user;  // Add the user data from token to the request
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
    }
};

module.exports = fetchUser;
