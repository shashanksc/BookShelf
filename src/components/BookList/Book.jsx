import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';
import './BookList.css';
import Loader from '../Loader/Loader';
import defaultCoverImg from "../../images/cover_not_found.jpg";

const Book = ({ book, onBookAdded }) => {
  const [showModal, setShowModal] = useState(false);
  const [loadingCover, setLoadingCover] = useState(true);

  const fetchCoverImage = useCallback(async () => {
    try {
      if (book.cover_id) {
        const response = await fetch(`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`);
        if (response.ok) {
          const coverImgUrl = await response.blob();
          book.cover_img = URL.createObjectURL(coverImgUrl);
          setLoadingCover(false);
        } else {
          throw new Error('Failed to fetch cover image');
        }
      } else {
        setLoadingCover(false);
        book.cover_img = defaultCoverImg;
      }
    } catch (error) {
      console.error('Error fetching cover image:', error);
      setLoadingCover(false);
      book.cover_img = defaultCoverImg;
    }
  }, [book]);

  useEffect(() => {
    if (!book.cover_img) {
      setLoadingCover(true);
      fetchCoverImage();
    } else {
      setLoadingCover(false);
    }
  }, [book, fetchCoverImage]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddBook = () => {
    onBookAdded(book);
    setShowModal(true);
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
        {!localStorage.getItem(book.id) && (
          <div className="addBtn" onClick={handleAddBook}>
            add to shelf
          </div>
        )}
      </div>
      {showModal && (
        <Modal show={showModal} modalClosed={closeModal}>
          <h2>{book.title}</h2>
          <p>{book.title} has been added to your shelf.</p>
        </Modal>
      )}
    </div>
  );
};

export default Book;
