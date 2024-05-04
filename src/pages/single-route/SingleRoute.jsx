import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import Loading from "../../assets/img/Loaading.jpg"
import "./SingleRoute.css"
import FotterTop from "../../components/FotterTop/FotterTop"
import Fotter from "../../components/footer/Fotter"
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import mian from "../../assets/img/Main.png"


const SingleRoute = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
    },[])

    if(!product){
      return <img className='Loaading' src={Loading}  alt="" />
    }

  return (
    <>
    <div className='singleRoute'>
        <div className="singleRoute_Left">
          <img className='SingleImage' src={product?.image} alt="" />
        </div>
        <div className="singleRoute_Right">
          <h3>{product?.title}</h3>
          <FaRegStar /> 
          <h4>{product?.rating.rate}</h4>
          <h1>${product?.price}</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe, libero nostrum iusto est, officiis in itaque ducimus, <br /> alias nemo quae sint? Vitae officiis aliquid ipsum facere, magni </h5>
          <p>Size/ weight: <h4>50g</h4><h4>80g</h4><h4>100g</h4></p>
          <div className="btmBottom">  <input type="number" id='num' placeholder='1' />
            <button><IoCartOutline />Add card</button>
            <button><FaRegHeart /></button>
            <button><TiArrowShuffle /></button></div>
        </div>
        <div className="singleRoute_end">
          <img src={mian} alt="" />
          <div className="end_bottom">
            <h2>Fill by price</h2>

          </div>


        </div>
    </div>
      <FotterTop/>
      <Fotter/>
    </>
  )
}

export default SingleRoute