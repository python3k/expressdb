const Product = require('../models/product.model');

// Simple version, withoujt validation or sanitation
exports.test = function (req, res) {
	res.send('Greetings from the Test controller');
};

exports.product_create = function (req, res) {
	let product = new Product({
			 name: 'lsq', // req.body.name,
			 price: 1.0// req.body.price
	});

	product.save(function (err) {
		if (err) {
			return next(err);
		}
		res.send({'status':'Product created', 'product': product});
	});
};

exports.product_details = function (req, res) {
	Product.findById(req.params.id,
		function (err, product) {
		if (err) {
			return next(err);
		}
		res.send(product);
	});
};

exports.product_update = function (req, res) {
	let updated_product = {
			 name: 'lsq',
			 price: 2.0
	};

	Product.findOneAndUpdate(req.params.id,
		{$set: updated_product},  // req.body
		function (err, product) {
			if (err) {
				console.log(err);
				return next(err);
			}
			res.send({'status':'Product updated', 'product':product});
	});
};

exports.product_delete = function (req, res) {
	Product.findOneAndDelete(req.param.id, function (err, product) {
			if (err) {
				return next(err);
			}
			res.send({'status': 'Product deleted', 'product':product});
	});
};
