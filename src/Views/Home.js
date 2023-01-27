import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'


function Home() {

    const url = `https://63c45c08f0028bf85fa7547e.mockapi.io/api/v1/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    })

    let content = null

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false,
            })
        })
        .catch(() =>{
            setProducts({
                loading: false,
                data: null,
                error: true,
            })
        })
    }, [url])

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
            <h1 className="font-bold text-2xl">Products</h1>


            {content}
        </div>
    )
}

export default Home