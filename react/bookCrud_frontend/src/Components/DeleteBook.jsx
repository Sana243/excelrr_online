import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (!confirmDelete) {
      navigate('/');
      return;
    }

    axios
      .delete(`http://localhost:5000/deleteBook/${id}`)
      .then(() => {
        alert('Book deleted successfully');
        navigate('/');
      })
      .catch((err) => {
        alert('Error deleting book: ' + err.message);
        navigate('/');
      });
  }, [id]);

  return <p>Deleting book...</p>;
};

export default DeleteBook;
