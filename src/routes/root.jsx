import Header from "../routes/header";
import Center from "./center";
import Footer from "./footer";
function Root(){
    return(
        <><Header/>
          <Center/>
          <Footer/>
        </>
    )
}
export default Root;