import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpsRequest'

// https://mockapi.io
function Product() {
    const {id} = useParams()
    const url = `https://${process.env.REACT_APP_MOCKAPI_KEY}.mockapi.io/api/v1/products/${id}`
   
    let product = useAxiosGet(url)

    let content = null


    if(product.error){
        content = 
        <p>
            There was an error, refresh or try again later
        </p>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images[0].image}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product