
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch('https://dummyjson.com/users?page=1')
      .then(res => res.json())
      .then(json => setUsers(json.users))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {users.map(user => (
        <div className="card" key={user.id}>
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <h3>{user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Eye Color: {user.eyeColor}</p>
          <p>Hair: {user.hair?.color}, {user.hair?.type}</p>
          <Link to={`/update/${user.id}`} className='btn btn-outline-primary'>Update</Link>
          <Link to={`/delete/${user.id}`} className='btn btn-outline-primary'>Delete</Link>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


