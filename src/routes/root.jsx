import Header from "../routes/header";
import Center from "./center";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
function Root(){
    return(
        <><Header/>
          <Outlet />
          <Footer/>
        </>
    )
}
export default Root;