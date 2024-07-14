import { Link } from "react-router-dom";

function Header(){

    return(
        <>
        <div className="flex flex-row justify-between items-center h-16 w-min-full border border-b-black">
        <h1 className="text-2xl p-2">shop</h1>
             <nav>
                <ul className="flex flex-row justify-center items-center p-2 gap-3">
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/home">product</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
             </nav>
        </div>
             
        </>
    )
}
export default Header;