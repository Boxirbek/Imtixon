import React from 'react'
import "./Hero.css"
import cofeMilk from "../../assets/img/coffie.png"
import Kiwi from "../../assets/img/Kiwi.png"
import peach from "../../assets/img/peach.png"
import aplleRed from "../../assets/img/aplleRed.png"
import snak from "../../assets/img/snak.png"
import vegetables from "../../assets/img/vagatables.png"
import strwberry from "../../assets/img/strwberry.png"
import blackPlum from "../../assets/img/blackPlum.png"
import custard from "../../assets/img/custard.png"
import gamburger from "../../assets/img/gamburger.png"
import piyoz from "../../assets/img/piyoz.png"
import bottleBcg from "../../assets/img/bottleBcg.png"
import vagetabb from "../../assets/img/vagetabb.png"






const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero_title">
              <h2>Featured Categories</h2>
              <h5>Cake & Milk</h5>
              <h5>Coffes & Teas</h5>
              <h5>Pet Foods</h5>
              <h5>Vegetables</h5>
        </div>
        <div className="heroCategoreis">
          <a href="#">
              <img src={cofeMilk}alt="" />
              <img src={Kiwi}alt="" />
              <img src={peach}alt="" />
              <img src={aplleRed}alt="" />
              <img src={snak}alt="" />
              <img src={vegetables}alt="" />
            <img src={strwberry}alt="" />
            <img src={blackPlum}alt="" />
            <img src={custard}alt="" />
              <img src={gamburger} alt="" />
        </a>
        </div>
        <div className="category">
        <div style={{
          backgroundImage: `url(${piyoz})`,
          width: '350px',
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='heroImg'>
          <h2>Everyday Fresh & <br />
            Clean with Our <br />
            Products</h2>
          <button>Shop Now</button>
        </div>
        <div style={{
          backgroundImage: `url(${bottleBcg})`,
          width: '350px',
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='heroImg'>
          <h2>Everyday Fresh & <br />
            Clean with Our <br />
            Products</h2>
          <button>Shop Now</button>
        </div> <div style={{
          backgroundImage: `url(${vagetabb})`,
          width: '350px',
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='heroImg'>
          <h2>Everyday Fresh & <br />
            Clean with Our <br />
            Products</h2>
          <button>Shop Now</button>
        </div>
        </div>
    </div>
  )
}

export default Hero