import "../../assets/css/style.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../store/actions/ProductAction";


const ProductCard = ({ data, clickEvent }) => {
    
    const dispatch = useDispatch();
    let itemsList = useSelector(state => state.product.productItems)
    
    const handleAddToCartClicked = (item) => {
        const existingItem = itemsList.find(cartItem => cartItem.id === item.id);
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        dispatch(addToCart({ ...item, quantity } ));
    }

    
    return (
        <div className=' m-auto col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
            <div className="card" >
                <img src={data.image} alt="" className="card-img" />
                <div className="card-info">
                    <p className="text-title line-clamp-1 underline cursor-pointer" onClick={clickEvent}>{data.title}</p>
                    <p className="text-body line-clamp-2">{data.description}</p>
                </div>
                <div className="card-footer">
                    <span className="text-title">${data.price}</span>
                    <div className="card-button" onClick={() => handleAddToCartClicked(data)}>
                        <MdOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard