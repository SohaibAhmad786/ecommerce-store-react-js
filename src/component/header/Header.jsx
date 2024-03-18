import { FaShoppingBag } from "react-icons/fa";
import { React } from "react";

const Header = () => {
    return (
        <header className="bg-gray-100 flex flex-wrap justify-between px-5 py-2">
            <span className="text-md font-medium text-[#ffcaa6] my-2">Shopping</span>
            <div className="flex  items-center justify-between gap-3 sm:justify-center">
                <div className="InputContainer ">
                    <input placeholder="Search.." id="input" className="input" name="text" type="text" />
                </div>
                <FaShoppingBag  className="text-black hover:text-[#ffcaa6] hover:shadow-lg"/>
            </div>
        </header>
    );
}

export default Header;