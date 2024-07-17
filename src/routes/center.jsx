import { useEffect, useState } from "react";
import Productcard from "../component/productcard";
import axios from "axios";
function Center(props){
    const [products , setproducts]= useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/product')
        .then(res =>{
            setproducts(res.data) 
        })
      
        },[])

    
    return(
        <>
         <section className='min-h-screen'>
            <h2 className="text-center p-3">Happy Shopping</h2>
            <p className="text-center text-sm mx-auto w-[500px]">Crafted with precision and care, our products deliver unmatched quality and reliability.Experience innovative design and exceptional performance, tailored to meet your needs.Discover the perfect blend of style and functionality.</p>
            <div className="p-3 grid grid-cols-4 gap-4">
                {
                    products.map(product =>{
                        return(
                            
                            <Productcard key={product._id} pro={product}/>
                        )
                    })
                }
            </div>
         </section>
        </>
    )
}
export default Center;