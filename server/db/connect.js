
var utils = require('../utils');
var r = require('rethinkdb');
var connection = null;

r.connect({
    host : 'localhost',
    db : 'foo',
    port : 28015
  },function (err,conn) {
  if(err) throw err;
  connection = conn;
    .tableCreate('shows2')
    .run(conn,function (err,res) {
      if(err) throw err;
      //console.log(res);
      utils.log(res);
      r.table('tv_shows')
        .insert({name : 'Star Wars'})
        .run(conn,function (err,res) {
          if(err) throw err;
          console.log(res);
        })
    })
});

function createTable() {

}
function insert() {

}
function drop() {

}
function update() {

}

module.exports = {
  createTable : createTable,
  insert : insert,
  drop : drop,
  update : update
}
