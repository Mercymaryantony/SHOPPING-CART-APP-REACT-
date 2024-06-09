import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [data,setData]=useState(
        {
            "prname":"",
            "cat":"",
            "price":"",
            "desc":"",
            "image":""
        }
    )
    const inputhandler = (event)=>{
        setData({...data, [event.target.name]: event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT NAME</label>
                            <input type="text" className="form-control" name='prname' value={data.prname} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label" >CATREGORY</label>
                            <select name="cat" id="" className="form-control" value={data.cat} onChange={inputhandler} >
                                <option value="" >MEN</option>
                                <option value="">WOMEN</option>
                                <option value="">CHILD</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label" >PRICE</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label" >DESCRIPTION</label>
                            <textarea name="desc" id="" className="form-control"  value={data.desc} onChange={inputhandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">IMAGE</label>
                            <input type="file" name="image" id="" className="form-control"  value={data.image} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add