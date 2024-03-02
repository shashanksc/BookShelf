import React, { useState } from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import './BookList.css';

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  
  const [showModal, setShowModal] = useState(false);
  const [addedBook, setAddedBook] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setAddedBook(null);
  };

  const handleBookAdded = (book) => {
    if (localStorage.getItem(book.id) !== null) {
      alert('Book is already added');
    } else {
      localStorage.setItem(book.id, book.title);
      setAddedBook(book);
      setShowModal(true);
    }
  };

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_id: singleBook.cover_id
    }
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} book={item} onBookAdded={()=>handleBookAdded(item)} />
              )
            })
          }
        </div>
      </div>
      {showModal && (
        <>
          <Backdrop show={showModal} clicked={closeModal} />
          <Modal show={showModal} modalClosed={closeModal}>
            <h4>{addedBook ? addedBook.title : ''}</h4>
            <p> has been added to your shelf.</p>
          </Modal>
        </>
      )}
    </section>
  )
}

export default BookList;
