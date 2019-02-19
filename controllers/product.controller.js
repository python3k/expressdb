const Product = require('../models/product.model');

// Simple version, withoujt validation or sanitation
exports.test = function (req, res) {
	res.send('Greetings from the Test controller');
}