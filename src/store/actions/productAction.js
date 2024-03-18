import { Get_Product } from "../types";
import axios from "axios";


export const getProduct = () => async (dispatch) => {
    let data = await axios.get('https://fakestoreapi.com/products')
    if (data.status === 200) {
        dispatch({
            type: Get_Product,
            payload: data.data
        });
    }
};