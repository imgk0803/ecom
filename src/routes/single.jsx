import axios from "axios";
import { useDispatch } from "react-redux";
import { useLoaderData , Link} from "react-router-dom";
import { addTocart } from "../feature/cart/cartSlice";
export async function loader({ params }) {
  const pid = params.pid
  const res = await axios.get(`http://localhost:3000/product/${pid}`)
  const product = res
  return { product };
}

function Single(){
  const {product} = useLoaderData()
  const dispatcher = useDispatch()
          return(
        <><section className="flex flex-col gap-2 p-2 h-screen">
                   <h2 className="text-center p-3">Happy Shopping</h2>
                   <p className="text-center text-sm mx-auto w-[500px]">Crafted with precision and care, our products deliver unmatched quality and reliability.Experience innovative design and exceptional performance, tailored to meet your needs.Discover the perfect blend of style and functionality.</p>
        <div className="container flex flex-row items-center gap-5 mt-5">
              <div className="grid grid-cols-4 grid-rows-3 w-1/3 p-1 gap-1 relative">
                 <img className="row-start-1 row-span-1  w-full h-full object-cover" src={product.data.thumbnail} alt="" />
                 <img className="row-start-2  w-full h-full object-cover" src={product.data.thumbnail}alt="" />
                 <img className="row-start-3 row-span-1  w-full h-full object-cover" src={product.data.thumbnail} alt="" />
                 <img className="row-start-1 row-span-full col-start-2 col-span-full w-full h-full object-cover" src={product.data.thumbnail} alt="" />
              </div>
              <div className="w-1/4 flex flex-col gap-1 h-full">
                 <h3 className="">{product.data.title}</h3>
                <p className=" text-gray-600">{product.data.description}</p>
                <p className="break-words text-xs">hfhhghfghjkfddkhgjkdhjghdfhgdgdhgfhdhgkdhfghdfgdhgkhdghdfkjhhhhhhhhhhhhhhgkffhkgdhgfhehghehgerghjegjhehgdjfgeghejhgeg</p>
                 <div>
                   <span className="fa fa-star checked "></span>
                   <span className="fa fa-star checked"></span>
                   <span className="fa fa-star checked"></span>
                   <span className="fa fa-star"></span>
                   <span className="fa fa-star"></span>
                   <span>(100k)</span>
                </div>
              <span className="">${product.data.price}</span>
              <button onClick={()=>dispatcher(addTocart(product))} className="text-center mt-10 text-xs text-white w-24 border bg-black rounded-lg h-6">add to cart</button>
              </div>
        </div>
      
        </section>
       
        </>
    )
}
export default Single;