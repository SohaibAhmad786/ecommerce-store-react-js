import { Get_Product, Add_TO_CART, GET_CATEGORIES, REMOVE_ITEM_FROM_CART, Add_TO_CART_WITH_QUANTITY, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from "../types";

const initialState = {
    productItems: [],
    categoriesItems: [],
    cartItems: []
};

export default function productReducer(state = initialState, { type, payload }) {
    switch (type) {
        case Get_Product:
            return {
                ...state,
                productItems: payload,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesItems: payload,
            };
        case Add_TO_CART:
            const existingItem = state.cartItems.find(item => item.id === payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...payload, quantity: 1 }]
                };
            }
        case INCREMENT_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case DECREMENT_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        case Add_TO_CART_WITH_QUANTITY:
            const existingItemIndex = state.cartItems.findIndex(item => item.id === payload.obj.id);
            if (existingItemIndex >= 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) =>
                        index === existingItemIndex
                            ? { ...item, quantity: item.quantity + payload.customQuantity }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...payload.obj, quantity: payload.customQuantity }]
                };
            }
        case REMOVE_ITEM_FROM_CART:
            const newState = state.cartItems.filter((e) => e.id !== payload.id);
            return {
                ...state,
                cartItems: newState
            }
        default:
            return {
                ...state,
            };
    }
}
