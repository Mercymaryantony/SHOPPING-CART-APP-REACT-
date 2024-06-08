import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const View = () => {
    const [shdata,changedata]=useState([])
    const  fetchdata=()=>{

        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                
                changedata(response.data)
            }
        ).catch().finally()
    }
useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {shdata.map(
                            (value,i) =>
                                {
                                    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card" >
                                    <img src={value.image} alt='...' height="250px"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{value.id}</h5>
                                            <p className="card-text">{value.title}</p>
                                            <p className="card-text">{value.description}</p>
                                            <p className="card-text">{value.price}</p>
                                            <p className="card-text">{value.category}</p>
                                            <a href="#" class="btn btn-primary">BUY</a>
                                        </div>
                                </div>
                            </div>
                                }
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View