import React, { useState } from 'react'
import Header from './Header';

const Recipeentry = () => {
    var [title,settitle]=useState("")
    var [description,setdescription]=useState("");
    var [prepare,setprepare]=useState("")
    const subData=()=>{
        const data={"title":title,"description":description,"prepare":prepare}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Recipes Title</label>
                            <input onChange={(e)=>{settitle(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="dropdown-center">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                Category 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                                <li><a className="dropdown-item" href="#">Veg</a></li>
                                <li><a className="dropdown-item" href="#">Non-Veg</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Description</label>
                            <textarea onChange={(e)=>{setdescription(e.target.value)}} name="description" id="" cols="15" rows="10" class="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Prepared By</label>
                            <input onChange={(e)=>{setprepare(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-dark">Submit</button>
                        </div> </center>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Recipeentry