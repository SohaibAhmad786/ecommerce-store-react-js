import { React, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import '../../assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartWithQuantity } from "../../store/actions/ProductAction";

const ItemDetail = () => {
    const location = useLocation();
    const { item } = location.state;
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="grid grid-cols-12 items-center justify-center gap-y-8 gap-x-5 m-5">
                <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4">
                    <img src={item.image} alt="" className="h-[300px] object-contain bg-white m-auto" />
                </div>
                <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8">
                    <span className="text-[#ffcaa6] text-4xl font-bold">${item.price}</span>
                    <p className="text-title mt-4" >{item.title}</p>
                    <p className="text-body ">{item.description}</p>

                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{item.rating.rate}</span>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{item.rating.count} reviews</span>
                    </div>
                    <div className="flex items-center my-5 gap-2">
                        <button onClick={() => setQuantity(quantity > 1 ? (quantity - 1) : quantity)} type="button" className="text-black border border-blue-700 hover:bg-[#ffcaa6] hover:text-white focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <FiMinus />
                        </button>
                        <span className="">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} type="button" className="text-black border border-blue-700 hover:bg-[#ffcaa6] hover:text-white focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <GoPlus />
                        </button>
                    </div>
                    <button onClick={() => dispatch(addToCartWithQuantity({
                        obj: item,
                        customQuantity: quantity
                    }))} type="button" className="text-gray-500 hover:bg-[#ffcaa6] bg-white border border-gray-300 focus:outline-none  focus:ring-0 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Add to Cart</button>
                </div>
            </div >
        </>
    );
}

export default ItemDetail;