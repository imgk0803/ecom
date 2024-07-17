import { Link } from "react-router-dom";
function Productcard(props){
    const {pro} = props
    return(
        <Link to={'/product/'+ pro._id}>
            <article className="p-5 mx-auto">
            <img className="h-32 aspect-square object-center object-cover" src={pro.thumbnail} alt="image" />
            <h3 className="text-sm">{pro.title}</h3>
            <p className="text-sm text-gray-600">{pro.description}</p>
            <div className="text-xs">
            <span className="fa fa-star checked "></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            <span className="text-sm">${pro.price}</span>
            </article>
        </Link>
            )        
}
export default Productcard;