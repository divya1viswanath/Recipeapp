import React from 'react'
import Header from './Header'

const View = () => {
    var recipelist=[{}]  
  return (
    <div>
        <Header/>
        <div className="container">                                                                                         <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                <div className="row g-3">                        

                        {recipelist.map( (value,key)=>{
                            return<div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                <img src={value.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-text">Recipe Title:{value.title}</p>
                                        <p class="card-text">Category:{value.category}</p>
                                        <p class="card-text">Description:{value.description}</p>
                                        <p class="card-text">Prepared by:{value.prepare}</p>
                                        
                                    </div>
                                </div>
                          </div>
                        } )}      
                                                                                                                                                                                                                                         
                </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default View