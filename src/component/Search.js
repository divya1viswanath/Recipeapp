import axios from 'axios'
import React from 'react'
import Header from './Header'

const Search = () => {
    var [data,setData]=useState([{"name":"","cgpa":""}])
    var [title,settitle]=useState("")
    const subData=()=>{
        const data={"title":title}
        console.log(data)
        axios.post("http://localhost:8000/api/search",data).then((response)=>{
            console.log(response.data)

            setData(response.data)
        })
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
                            <input onChange={(a)=>{settitle(a.target.value)}} type="text" className="form-control"/>
                        </div>
                        <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-dark">Search</button>
                        </div> </center>
                        <div>
                            {data.map( (value,key)=>{
                                return <div className="row g-3">
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
                                        <textarea className="form-control" name="description" id="" cols="15" rows="10"></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label for="" className="form-label">Prepared By</label>
                                        <input value={value.prepare} type="text" className="form-control"/>
                                    </div>
                                    <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={(a)=>{deleteApicall(value._id)}} className="btn btn-dark">Delete</button>
                                    </div> </center>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search