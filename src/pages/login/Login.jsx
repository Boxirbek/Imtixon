import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from '../../api'
import { toast } from 'react-toastify'
import Logo from "../../assets/img/LOGO.png"
import Fotter from "../../components/footer/Fotter"

function Login() {
  const [username, setUsername] = useState("johnd")
  const [password, setPassword] = useState("m38rmF$")
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleLogin = (event)=>{
    event.preventDefault()
    setLoading(true)
    let user = {
      username,
      password
    }
    axios
      .post( "/auth/login", user )
      .then(res => {
        console.log("res>>>", res.data.token)
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch(err => {
        console.log("err>>>" , err)
        toast.error("username or password is incorrect")
      })
      .finally(()=> setLoading(false))

  }
  return (<>
  
    <form onSubmit={handleLogin} className='login'>
      <img src={Logo} alt="" />
      <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <div className="chek_input">
        <input type="checkbox" />
        <h5>Remember Me</h5>
        <a href="@boxirbek0516">Forgot Password?</a>
      </div>
      <div className="loginBtn">
        <button className='button_log'  disabled={loading} type='submit'>{loading ? "Loading..." : "Log in"}</button>
        <button className='button_log' type='button' onClick={() => navigate(-1)}>Go back</button>
      </div>
    </form>
    <Fotter/>
  </>
  )
}

export default Login