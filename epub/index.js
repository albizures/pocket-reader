
var Epub = require('epub');
var a = new Epub('a.epub','/img/','/chapters/');
var b = new Epub('alice.epub','/img/','/chapters/');
var mongo = new Epub('mong.epub','/img/','/chapters/');


mongo.on('end',function () {
	//console.log(mongo.metadata);
	//console.log(mongo.spine);
	console.log(mongo.flow[1].id);
	mongo.getChapterRaw(mongo.flow[1].id,function (err,text) {
		if(err) return err;
		console.log(text);
	})
});
mongo.parse();
