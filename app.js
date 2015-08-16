
var app = require('connect')(),
		serverStatic = require('serve-static');

app.use(serverStatic('./public'));

app.use(require('connect-route')(require('./router')))

app.listen(7000,function () {
	console.log('Server runnig in port 7000');
});
