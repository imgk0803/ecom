import { useEffect ,useState} from "react";
import axios from "axios";

function Cart(){
    const [products , setproducts]= useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/product')
        .then(res =>{
            setproducts(res.data) 
        })
      
        },[])

    return(
        <>
          <main>
            <div className="container mx-auto min-h-screen p-2 ">
            <h1 className="p-1">My cart</h1>
             <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-5">
                 {
                    products.map(product=>{
                        return(
                            <div className="border border-slate-200 rounded-md p-3">
                <div className="row-span-3 flex flex-row items-center gap-10 p-3 ">
                   <img className="h-full w-44 object-cover object-center aspect-square" src={product.thumbnail} alt="" />
                   <button className="bg-gray-950 text-white w-5">-</button>
                   <span>1</span>
                   <button className="bg-gray-950 text-white w-5">+</button>
                   <span>${product.price}</span>
                </div>
                <h3 className="pl-5">{product.description}</h3>
               </div> 
                        )
                    })
                 }
              </div>
              <div>
                <h3>checkout</h3>
              </div>
    
             </div>
             </div>
          </main>
        </>
    )
}
export default Cart;