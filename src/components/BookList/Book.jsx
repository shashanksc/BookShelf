import React from 'react';

import "./BookList.css";

const Book = (book) => {
  const handleAdd = () =>{
    localStorage.setItem(book.id, book.title);
    alert('Book added');
  };
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
       

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
       
      </div>
      <div className='addBtn' onClick={handleAdd}>add to shelf</div>
    </div>
  )
}

export default Book