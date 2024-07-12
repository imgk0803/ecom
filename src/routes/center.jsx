import Productcard from "../component/productcard";
function Center(){
    return(
        <>
         <section className=''>
            <h2 className="text-center p-3">ALL Products</h2>
            <p className="text-center text-sm mx-auto w-[500px]">Crafted with precision and care, our products deliver unmatched quality and reliability.Experience innovative design and exceptional performance, tailored to meet your needs.Discover the perfect blend of style and functionality.</p>
            <div className="p-3 grid grid-cols-4 gap-4">
                {
                    [1,2,3,4].map(product =>{
                        return(
                            
                            <Productcard key={product}/>
                        )
                    })
                }
            </div>
         </section>
        </>
    )
}
export default Center;