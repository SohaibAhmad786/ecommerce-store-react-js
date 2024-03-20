import { Get_Product, Add_TO_CART, GET_CATEGORIES,REMOVE_ITEM_FROM_CART, INCREMENT_CART_ITEM, Add_TO_CART_WITH_QUANTITY, DECREMENT_CART_ITEM } from "../types";
import axios from "axios";


export const getProduct = () => async (dispatch) => {
    let data = await axios.get('https://fakestoreapi.com/products')
    const dataList = [];
    for (let i = 0; i < data.data.length; i++) {
        dataList.push({
            ...data.data[i],
            quantity: 0,
        });
    }

    if (data.status === 200) {
        dispatch({
            type: Get_Product,
            payload: dataList
        });
    }
};

export const getCategories = () => async (dispatch) => {
    let data = await axios.get('https://fakestoreapi.com/products/categories')
    if (data.status === 200) {
        dispatch({
            type: GET_CATEGORIES,
            payload: data.data
        });
    }
};

export const addToCart = (data) => async (dispatch) => {
    dispatch({
        type: Add_TO_CART,
        payload: data
    });
}

export const incrementCartItem = (data) => async (dispatch) => {
    dispatch({
        type: INCREMENT_CART_ITEM,
        payload: data
    });
}

export const decrementCartItem = (data) => async (dispatch) => {
    dispatch({
        type: DECREMENT_CART_ITEM,
        payload: data
    });
}

export const addToCartWithQuantity = (data) => async (dispatch) => {
    dispatch({
        type: Add_TO_CART_WITH_QUANTITY,
        payload: data
    });
}


export const removeItemFromCart = (data) => async (dispatch) => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: data
    });
}

