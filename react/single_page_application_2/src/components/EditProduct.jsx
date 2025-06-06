import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsFetch(true);
      })
      .catch((err) => console.log(err));
  }, []);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${id}`,product)
    .then((res)=>{
      alert('updated successfully')
      console.log(res.data);
      
    })
    .catch((error)=>console.log(error));

  }

  return (
    <>
             {isFetch && (
        <form>
          Title{" "}
          <input
            type="text"
            defaultValue={product.title}
            onChange={handleChange}
          />
          <br />
          Price{" "}
          <input
            type="text"
            defaultValue={product.price}
            onChange={handleChange}
          />
          <br />
          Category{" "}
          <input
            type="text"
            defaultValue={product.category}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleSubmit}>Edit</button>
        </form>
      )}

    </>
  );
};

export default EditProduct;
