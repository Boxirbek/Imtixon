import React from 'react'
import Person from "../../assets/img/heroAka.png"
import "./FotterTop.css"
import BestPr from "../../assets/img/BestPr.png"
import freeDil from "../../assets/img/freeDil.png"
import GreatDail from "../../assets/img/GreatDail.png"
import wildAss from "../../assets/img/wildAss.png"
import easyRet from "../../assets/img/easyRet.png"


const FotterTop = () => {
  return (
    <>
      <div className='FotterTop'>
        <div className="FotterSearch">
              <h1>Stay home & get your daily <br />
                  needs from our shop</h1>
              <h4>Art You'r Daily Shopping with Nest Mart</h4>
              <form className='input'>
                  <input type="text" placeholder='Your emaill address' />
                  <button>Subscribe</button>
              </form>
        </div>
        <div className="Person">
              <img src={Person}  />
        </div>
      </div>
          <div className="footTop">
              <a href="#">
                  <img src={BestPr} alt="" />
                  <img src={freeDil} alt="" />
                  <img src={GreatDail} alt="" />
                  <img src={wildAss} alt="" />
                  <img src={easyRet} alt="" />
              </a>
          </div>
      </>
  )
}

export default FotterTop