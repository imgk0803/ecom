function Footer(){
    return(
        <>
            <footer className="flex flex-row justify-between items-center border border-t-black bg-black">
                <div className="flex flex-col justify-center items-start p-3 text-white">
                <span className="text-xl">shop pvt ltd</span>
                 <p className="text-xs">All Rights Reserved.<br/>
                 Innovating the future, today.</p>
                </div>
                <nav>
                    <ul className="flex flex-row justify-center items-center gap-4 p-3 text-white">
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">linkedin</a></li>
                    <li><a href="#">twitter</a></li>
                    <li><a href="#">instagram</a></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}
export default Footer;
