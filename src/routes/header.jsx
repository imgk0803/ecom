import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){
    const items = useSelector((state) => state.cart.items)
    const noi = items.reduce((count, item) => {
        return count + item.quantity;
    }, 0);
    
    return(
        <>
        <div className="flex flex-row justify-between items-center h-16 w-min-full border border-b-black">
        <h1 className="text-2xl p-2 grow">shop</h1>
             <nav>
                <ul className="flex flex-row justify-center items-center p-2 gap-3">
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/home">product</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
             </nav>
             <Link to="/cart" className="mx-10 flex flex-row"><span className="material-symbols-outlined ">
shopping_bag
</span><span className="flex items-start justify-start text-xs">{noi}</span></Link>
        </div>
             
        </>
    )
}
export default Header;