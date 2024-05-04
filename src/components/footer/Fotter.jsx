import React from 'react'
import "./Fotter.css"
import Logo from "../../assets/img/LOGO.png"
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdMoreTime } from "react-icons/md";
import app from "../../assets/img/fotrApps.png"
import gogle from "../../assets/img/fottrGogle.png"
import pay from "../../assets/img/pay.png"
import { BsTelephone } from "react-icons/bs"; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandPicsart } from "react-icons/tb";




const Fotter = () => {
    return (
        <div className='Fotter'>

            <div className="fotterMiddle">
                <div className="fot1">
                    <img src={Logo} alt="" />
                    <h4>Awesome grocery store website
                        template</h4>
                    <h5><IoLocationOutline />Address: 5171 W Campbell Ave</h5>
                    <h5><TfiHeadphoneAlt />Call Us:(+91) - 540-025-124553</h5>
                    <h5><PiTelegramLogoLight />Email:sale@Nest.com</h5>
                    <h5><MdMoreTime />Hours:10:00 - 18:00, Mon - Sat</h5>
                </div>
                <div className="fot2">
                    <p>Company</p>
                    <h4>About Us   </h4>
                    <h4> Delivery Information </h4>
                    <h4> Privacy Policy </h4>
                    <h4>  Terms & Conditions</h4>
                    <h4> Contact Us  </h4>
                    <h4>  Support Center  </h4>
                    <h4> Careers  </h4>
                </div><div className="fot2">
                    <h2>Account</h2>
                    <h4>Sign In</h4>
                    <h4>View Cart</h4>
                    <h4>My Wishlist </h4>
                    <h4>Track My Order</h4>
                    <h4> Help Ticket</h4>
                    <h4> Shipping Details</h4>
                    <h4>Compare products</h4>
                </div><div className="fot2">
                    <h2>Corporate</h2>
                    <h4> Become a Vendor</h4>
                    <h4> Affiliate Program</h4>
                    <h4>Farm Business</h4>
                    <h4>Farm Careers</h4>
                    <h4> Our Suppliers</h4>
                    <h4>  Accessibility </h4>
                    <h4>  Promotions  </h4>
                </div>
                <div className="fot2">
                    <h2>Popular </h2>
                    <h4> Milk & Flavoured Milk   </h4>
                    <h4>  Butter and Margarine </h4>
                    <h4>  Eggs Substitutes </h4>
                    <h4>   Marmalades</h4>
                    <h4>Sour Cream and Dips </h4>
                    <h4>   Tea & Kombucha </h4>
                    <h4>Cheese  </h4>
                </div>
                <div className="fotAPP">
                    <h2>Install App </h2>
                    <h4> From App Store or Google Play   </h4>
                    <img src={app} alt="" />
                    <img src={gogle} alt="" />

                    <h4>Secured Payment Gateways  </h4>
                    <img src={pay} alt="" />
                </div>
            </div>
            <div className="footterBottom">
                <h5>© 2022, Nest - HTML Ecommerce Template <br />
                    All rights reserved</h5>
                <div className="cal_centr">
                    <h1><BsTelephone />1900 - 6666</h1>
                    <h6>Working 8:00 - 22:00</h6>
                </div>
                <div className="cal_centr">
                    <h1><BsTelephone />1900 - 8888</h1>
                    <h6>24/7 Support Center</h6>
                </div>
                <h4>Follow us <FaInstagram /><FaFacebook /><FaSquareXTwitter /><TbBrandYoutube /><TbBrandPicsart/></h4>
            </div>
        </div>
    )
}

export default Fotter