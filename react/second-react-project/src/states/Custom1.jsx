import React from 'react'
import UseCustomHook from './UseCustomeHook'

const Custom1 = () =>{
    let [data,error]=UseCustomHook("https://jsonplaceholder.typicode.com/posts")
    let [data1,error1]=UseCustomHook("https://fakestoreapi.com/products")
    console.log('post data',data,'message',error);
    console.log('product data',data1,'message',error1);
  return (
    <div>Custom1</div>
  )
}

export default Custom1