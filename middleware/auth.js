const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, config.get("Secret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
