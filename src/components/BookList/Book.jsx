// Book.js
import React, { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';
import './BookList.css';
import Loader from '../Loader/Loader';

const Book = ({ book, onBookAdded }) => {
  const [showModal, setShowModal] = useState(false);
  const [loadingCover, setLoadingCover] = useState(true);

  useEffect(() => {
    if (!book.cover_img) {
      setLoadingCover(true);}
    // Simulate cover image loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoadingCover(false);
    }, 2000); // Adjust the delay as needed or replace with actual API call
    // Cleanup function
    return () => clearTimeout(timeout);
  }, [book]); // Run effect whenever book prop changes
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
      {loadingCover ? (
          <Loader/>
        ) : (
          <img src={book.cover_img} alt="cover" />
        )}
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
      <div>
        {
        (localStorage.getItem(book.id))?null : <div className="addBtn" onClick={onBookAdded}>
        add to shelf
      </div>}
        
      </div>
      {/* Modal for indicating the book was added */}
      {showModal && (
        <Modal show={showModal} modalClosed={closeModal}>
          <h2>NEW</h2>
          <p>{book.title} has been added to your shelf.</p>
        </Modal>
      )}
    </div>
  );
};

export default Book;