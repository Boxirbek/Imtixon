import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
import Skeleton from '../skeleton/Skeleton'
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



const Products = ({data, loading}) => {
    let products = data?.map((el)=> <div className='card' key={el.id}>
    <Link to={`/product/${el.id}`}>
      <img src={el.image} width={300} alt="" />
    </Link>
      <h6>{el.category}</h6>
    <h3>{el.title}</h3>
      <div className="rate">
        <FaRegStar />
        <h5>{el.rating.rate}</h5>
      </div>
    <div className="product_bottom">
        <h4 className='price'>${el.price}</h4>
        <button className='Card_btn'><IoCartOutline/>Add</button>
    </div>
  </div>)
  return (
    <>
        {loading ?  <Skeleton count={10}/> : <></>}
        <div className='wrapper'>{ products}</div>
    </>
  )
}

export default Products