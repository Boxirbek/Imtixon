import React from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom'
import { MdOutlineWindow } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import Logo from "../../assets/img/LOGO.png"
import { CiSearch } from "react-icons/ci";
import { HiArrowPath } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";  
import { IoCartOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
   let {pathname} = useLocation()
   
  return (<>
  <div className="navbarTop">
      <NavLink to={"/"}>
        <img src={Logo} alt="" />
      </NavLink>
      <div className="inputNav">
       
        <select className='Selectr_nav' name="" id="">
          <option value="all">Browse All Categories</option>
          <option value="Category">Laptop</option>
          <option value="Fuit">Fuit</option>
          <option value="Phone">Phone</option>

        </select>
        <input type="text" placeholder='Search for items...'  />
        <CiSearch />
      </div>
      <div className="navRight">
        <button><CiLocationOn />Your Location <IoIosArrowDown /></button>
        <h4><HiArrowPath />Compare</h4>
        <h4><FaRegHeart />Wishes</h4>
        <h4><IoCartOutline />Cart</h4>
        <h4><IoPersonOutline/>Account</h4>
      </div>
  </div>
    <div className='navbar'>

      <div className="select">
        <MdOutlineWindow />

        <select className='Selectr' name="" id="">
          <option value="all">Browse All Categories</option>
          <option value="Category">Laptop</option>
          <option value="Fuit">Fuit</option>
          <option value="Phone">Phone</option>

        </select>
      </div>
      <NavLink className='navbar__link' to={"/register"}><FaFireAlt />Deals</NavLink>
        <NavLink className='navbar__link' to={"/"}>Home</NavLink>
        <NavLink className='navbar__link' to={"/about"}>About</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Shop</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Vendors</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Mega menu</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Blog</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Pages</NavLink>
      <NavLink className='navbar__link' to={"/register"}>Contact</NavLink>
<div className="call_centr">
        <FaHeadset />
        <div className="tell_number">
          <h2>1900 - 888</h2>
          <h6> 24/7 Support Center</h6>
        </div>
</div>
    </div>
  </>
  )
}

export default Navbar