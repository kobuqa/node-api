exports.getProducts = (req, res, next) => {
    res.send([{}, {}, {}])
}

exports.postProduct = (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.send('created')
}