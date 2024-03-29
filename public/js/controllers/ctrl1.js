const Product = require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/app/model2.js');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            voterid: req.body.voterid,
            votingbooth:req.body.votingbooth,
            area:req.body.area
        }
    );

    product.save(function (err) {
        if (err) {
            res.end(err);
        }
        res.send('Product Created successfully')
    })
};
exports.product_details = function (req, res) {
    Product.find( function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};