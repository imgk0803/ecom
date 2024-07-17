import { useSelector } from "react-redux"; 




function Cart(){
    const items = useSelector((state)=> state.cart.items)

    return(
        <>
          <main>
            <div className="container mx-auto min-h-screen p-2 ">
            <h1 className="p-1">My cart</h1>
             <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-5">
                 {
                    items.map(product=>{
                        return(
                            <div className="border border-slate-200 rounded-md p-3 text-sm">
                <div className="row-span-3 flex flex-row items-center justify-evenly p-3 ">
                   <img className="h-full w-20 object-cover object-center aspect-square" src={product.data.thumbnail} alt="" />
                   <span>${product.data.price}</span>
                    <div className="flex flex-row justify-center items-center">
                    <button className="bg-gray-950 text-white w-5">-</button>
                   <span className="w-3">1</span>
                   <button className="bg-gray-950 text-white w-5">+</button>
                    </div>
                </div>
                <h3 className="pl-5">{product.data.description}</h3>
               </div> 
                        )
                    })
                 }
              </div>
              <div>
                 <section className="flex flex-col bg-slate-200 rounded-lg">
                    <div className="p-5">
                        <table className="border border-b-slate-700 border-dashed w-full table- gap-2  ">
                            <th>Price Details</th>
                            <tr>
                                <td>total MRP :</td>
                                <td>$4992</td>
                            </tr>
                            <tr>
                                <td>Total amount:</td>
                                <td>$5000</td>
                            </tr>
                            <tr>
                                <td colSpan='2'><button className="bg-black text-white border rounded-md w-full mx-auto">checkout</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="w-full p-2  ">
                        <ul className="p-3 flex flex-col  gap-2">
                            <li>Free Shipping for orders ₹2,990</li>
                            <li>Secured Payment & Checkout</li>
                            <li>Easy Returns, Free Pick Up</li>
                        </ul>
                    </div>
                 </section>
              </div>
    
             </div>
             </div>
          </main>
        </>
    )
}
export default Cart;