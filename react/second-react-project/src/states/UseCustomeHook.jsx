import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseCustomHook = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Fixed typo

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message); 
      });
  }, [url]);

  return [data, error ]; 
};

export default UseCustomHook;
