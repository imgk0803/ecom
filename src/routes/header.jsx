function Header(){

    return(
        <>
        <div className="flex flex-row justify-between items-center h-16 w-min-full border border-b-black">
        <h1 className="text-2xl p-2">shop</h1>
             <nav>
                <ul className="flex flex-row justify-center items-center p-2 gap-3">
                    <li><a href="/home">home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="#">product</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
             </nav>
        </div>
             
        </>
    )
}
export default Header;