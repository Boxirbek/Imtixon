import React from 'react'
import "./Admin.css"
import { Link, Outlet } from 'react-router-dom'
import Fotter from "../../components/footer/Fotter"
import { IoHomeOutline } from "react-icons/io5";
import Map from "../../assets/img/maping.png"
import { FaLocationDot } from "react-icons/fa6";
import Sister from "../../assets/img/opa.png"

const Admin = () => {
  return (
    <div>
    <div className='admin'>
     <div className="admin_Nav">
          <h4><IoHomeOutline/>Home/</h4>
     </div>
     <div className="admin_top">
      <div className="admin1">
            <a href="">Can i help you?</a>
            <h1>Admin Panel</h1>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quae nam accusantium ullam distinctio, consequatur<br /> nesciunt quaerat doloribus, numquam illo molestiae iure amet.<br /> Corporis hic officia vero placeat ratione?</h5>
           <br />
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quae nam accusantium ullam distinctio, consequatur<br /> nesciunt quaerat doloribus, numquam illo molestiae iure amet.<br /> Corporis hic officia vero placeat ratione?</h5>
      </div>
      <div className="admin2">
        <div className="admin_title">
              <h3>01. Visit Feedback</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br />
                leo.</h5>
            </div> <div className="admin_title">
              <h3>03. Billing Inquiries</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br />
                leo.</h5>
            </div>
      </div>
          <div className="admin2">
            <div className="admin_title">
              <h3>02. Visit Feedback</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br />
                leo.</h5>
            </div> <div className="admin_title">
              <h3>04. Billing Inquiries</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br />
                leo.</h5>
            </div>
          </div>
     </div>

       <div className="map">
          <img src={Map} alt="" />
        </div> 
        <div className="admin_category">
          <div className="admin_btn">
            <h2>Office</h2>
            <h5>
              205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com <br />
            </h5>
            <button> <FaLocationDot/> View map</button>
          </div>
           <div className="admin_btn">
            <h2>Studio</h2>
            <h5>
              205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com <br />
            </h5>
            <button> <FaLocationDot/> View map</button>
          </div> <div className="admin_btn">
            <h2>Shop</h2>
            <h5>
              205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com <br />
            </h5>
            <button> <FaLocationDot/> View map</button>
          </div>
        </div>
        <div className="admin_bottom">
          <div className="left_bottom">
            <h2>Drop Us a Line</h2>
            <div className="input_left">
              <input type="text" name="" id=""  placeholder='Your name..'/>
              <input type="text" name="" id="" placeholder='Your phone...' />
            </div>
            <div className="input_left">
              <input type="text" name="" id="" placeholder='Your name..' />
              <input type="text"  placeholder='Your phone...' />
              
                <img src={Sister} alt="" />
            
            </div>
          
          </div>
          <div className="big_input">
            <input type="text" name="" id="" />
            <button>Search</button>
          </div>
        </div>
       
</div>
      <Fotter />
    </div>
  )
}

export default Admin
