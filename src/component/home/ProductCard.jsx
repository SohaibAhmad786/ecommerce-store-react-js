import "../../assets/css/style.css";
import { MdOutlineShoppingCart } from "react-icons/md";


const ProductCard = ({ data }) => {
    return (
        <div className=' m-auto col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
            <div className="card" >
                <img src={data.image} alt="" className="card-img" />
                <div className="card-info">
                    <p className="text-title line-clamp-1">{data.title}</p>
                    <p className="text-body line-clamp-2">{data.description}</p>
                </div>
                <div className="card-footer">
                    <span className="text-title">${data.price}</span>
                    <div className="card-button">
                        <MdOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard