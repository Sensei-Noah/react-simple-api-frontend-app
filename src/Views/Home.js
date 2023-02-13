import React, { useState, useEffect } from 'react'

import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpsRequest'


function Home() {

    const url = `https://${process.env.REACT_APP_MOCKAPI_KEY}.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null


    if(products.error){
        content = 
        <p>
            There was an error, refresh or try again later
        </p>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content =
        products.data.map((product, key) => {
            return(

            <div key={key}>
                <ProductCard
                    product={product}
                />
            </div>
            )
        })
    }


    return(
        <div>
            <h1 className="font-bold text-2xl text-center">TOP PRODUCTS</h1>


            {content}
        </div>
    )
}

export default Home