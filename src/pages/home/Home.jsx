import React, { useState, useEffect } from 'react'
import axios from '../../api'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';
import Hero from "../../components/Hero/Hero"
import FotterTop from "../../components/FotterTop/FotterTop"
import Fotter from "../../components/footer/Fotter"

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/products?limit=9")
      .then(res => setData(res.data))
      .catch(res => console.log(res))
      .finally(() => setLoading(false))
  }, [])



  return (
    <div className='home'>
      <Banner />
      <Hero />
      <Products loading={loading} data={data} />
      <FotterTop />
      <Fotter/>
    </div>
  )
}

export default Home