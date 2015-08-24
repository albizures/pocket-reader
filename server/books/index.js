
var path = require('path');
var fs = require('fs');
var Epub = require('epub');
var a = new Epub('aadsfasdfafd.epub','/img/','/chapters/');
// var b = new Epub('alice.epub','/img/','/chapters/');
// var mongo = new Epub('mong.epub','/img/','/chapters/');
//
//
// mongo.on('end',function () {
// 	//console.log(mongo.metadata);
// 	//console.log(mongo.spine);
// 	console.log(mongo.flow[1].id);
// 	mongo.getChapterRaw(mongo.flow[1].id,function (err,text) {
// 		if(err) return err;
// 		console.log(text);
// 	})
// });
// mongo.parse();
//a.parse();

/*module.exports*/var foo = function (req,res) {
	var pathFile = path.join(__dirname,req.params.name + '.epub');
	fs.stat(pathFile,function (err,stat) {
		if(err) return res.end('not exist');

		var book = new Epub(pathFile);
		book.on('end',function () {
			console.log(book.metadata);
			res.end(book.metadata.title);
		});
		book.parse();
	})
}

var books = {books:[
	{id : 1, name : 'a'},
	{id : 2, name : 'alice'},
	{id : 3, name : 'mog'}
]}
module.exports = {
	getAll : function (callback) {
		if(typeof callback === 'function') callback(JSON.stringify(books));
	}
}
