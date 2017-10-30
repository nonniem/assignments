

function explode(req, res, next){
    req.explode = "booom!!!!!!!";
    next();
}

module.exports = {
    explode
};
