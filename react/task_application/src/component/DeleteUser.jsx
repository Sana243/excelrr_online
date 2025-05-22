// components/DeleteUser.js
import React from 'react';

function DeleteUser({ id, onDelete }) {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <button onClick={handleDeleteClick} style={{ marginLeft: '10px' }}>
      Delete
    </button>
  );
}

export default DeleteUser;
