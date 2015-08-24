
import React from 'react';
import Reflux from 'reflux';
import BookStore from '../stores/BookStore.js';

let BookList = React.createClass({
  mixins : [Reflux.connect(BookStore,'bookstore')],
  render(){
    if(this.state.bookstore){
      return <div>
        {
          this.state.bookstore.map((book) =>{
            return <div className="book">
              {book.name}
            </div>
          })
        }
      </div>
    }else{
      return <p>Not found books</p>
    }
  }
});

export default BookList
