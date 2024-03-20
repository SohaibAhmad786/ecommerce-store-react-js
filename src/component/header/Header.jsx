import { FaShoppingBag } from "react-icons/fa";
import { React } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
    const history = useHistory();
    const handleClicked = () => {
        history.push("/cart")
    }

    return (
        <header className="bg-gray-100 flex flex-wrap justify-between px-5 py-2">
            <span className="text-md font-medium text-[#ffcaa6] my-2">Shopping</span>
            <div className="flex  items-center justify-between gap-3 sm:justify-center">
                <div className="InputContainer ">
                    <input placeholder="Search.." id="input" className="input" name="text" type="text" />
                </div>
                <button onClick={handleClicked} type="button" className="text-black  border border-blue-700 hover:bg-[#ffcaa6] hover:text-white focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <FaShoppingBag className="hover:shadow-lg" />
                </button>
            </div>

        </header>
    );
}

export default Header;