import { React, useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import '../../assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCartItem, incrementCartItem, removeItemFromCart } from "../../store/actions/ProductAction";


const Cart = () => {
    const dispatch = useDispatch();
    let cartList = useSelector(state => state.product.cartItems)
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        const total = cartList.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setTotalAmount(total);
    }, [cartList]);

    return (
        <>
            <div className="h-[100vh] w-full grid grid-cols-12">
                <div className="col-span-3">
                </div>
                <div className="col-span-6">
                    {
                        cartList.length > 0 ?
                            cartList?.map((e) => {
                                return (
                                    <div className="flex">
                                        <div className="flex w-full m-5 p-2 rounded-lg border gap-8">
                                            <div className="h-[205px] w-[250px]">
                                                <img src={e.image} alt="" className=" border rounded-lg h-[205px] w-[250px] object-contain bg-white m-auto" />
                                            </div>
                                            <div className="">
                                                <p className="text-title mt-4 line-clamp-1 " >{e.title}</p>
                                                <span className="text-[#ffcaa6] text-4xl font-bold">${e.price}</span>
                                                <div className="flex items-center mt-5 gap-2">
                                                    <button onClick={() => dispatch(decrementCartItem(e))} type="button" className="text-black border border-blue-700 hover:bg-[#ffcaa6] hover:text-white focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                                        <FiMinus />
                                                    </button>
                                                    <span className="">{e.quantity}</span>
                                                    <button onClick={() => dispatch(incrementCartItem(e))} type="button" className="text-black border border-blue-700 hover:bg-[#ffcaa6] hover:text-white focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                                        <GoPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <IoClose onClick={() => dispatch(removeItemFromCart(e))} size={28} className="cursor-pointer" />
                                        </div>
                                    </div>
                                );
                            }) : (
                                <div className="flex justify-center items-center mx-5 ">
                                    <p className="text-title m-0" >No Item in the Cart</p>
                                </div>
                            )
                    }


                    {cartList.length > 0 && <div className="flex justify-between items-center mx-5 mb-8">
                        <p className="text-title m-0" >Total Price: ${totalAmount.toFixed(2)}</p>
                        <button type="button" className="text-gray-500 hover:bg-[#ffcaa6] bg-white border border-gray-300 focus:outline-none  focus:ring-0 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 ">Checkout</button>
                    </div>}
                </div>
                <div className="col-span-3">
                </div>

            </div>
        </>
    );
}

export default Cart