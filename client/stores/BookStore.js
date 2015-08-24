

import Reflux from 'reflux';
import BookActions from '../actions/BookActions'

import utils from '../utils';

let BookStore = Reflux.createStore({
  listenables : [BookActions],
  bookList : [],
  init :function () {
    this.fetchBooks();
  },
  fetchBooks : function () {
    var self = this;
    utils.getJSON('/book')
      .then((res) => {
        self.bookList = res.books;
        self.trigger(self.bookList);
      })
  }
});

export default BookStore;
