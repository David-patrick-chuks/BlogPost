const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    const auth = req.headers["authorization"];
    if (!auth) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const gotAuth = auth.split(" ");
    
    if(gotAuth.length !== 2){
        return res.status(401).json({ error: "Invalid token format" });
    }

    if (gotAuth[0] !== "Bearer") {
        return res.status(401).json({ error: "Invalid token type" });
    }

    const token = gotAuth[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: error.message || "Invalid token" });
    }
}

module.exports = authentication;
