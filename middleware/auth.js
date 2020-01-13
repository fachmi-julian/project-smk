exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (typeof token !== 'undefined') {
        req.token = token
        next();
    } else {
        res.status(400).send('membutuhkan token');
    }
}