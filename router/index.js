
epub = require('../epub');

module.exports = function (router) {
	router.get('/epub/:name',function (req,res) {
		epub(req,res);
	});

}
