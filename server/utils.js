

module.exports =  {
  log : function () {
    var print = '';
    for (var index in arguments) {
      print += JSON.stringify(arguments[index],null,1) + '\n';
    }
    console.log(print);
  }
}
