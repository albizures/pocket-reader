
var books = require('../books');


module.exports = function (router) {
	router.get('/book/:name',function (req,res) {
		book.getByName(req.name.params.name,function (resp) {
			res.setHeader('Content-Type', 'application/json');
			res.end(resp);
		});
	});
	router.get('/book',function (req,res) {
		books.getAll(function (resp) {
			res.setHeader('Content-Type', 'application/json');
			res.end(resp);
		});
	});
}
