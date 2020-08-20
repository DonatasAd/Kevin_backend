const jwt = require('jsonwebtoken');

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await jwtVerify(token, 'sectret');
    req.tokenData = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      status_code: 401,
      message: 'Auth failed',
    });
  }
};

// convert from callback to prommise
const jwtVerify = (token, secret) => {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};

module.exports = checkToken;
