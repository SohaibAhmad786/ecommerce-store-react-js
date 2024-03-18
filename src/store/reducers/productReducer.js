import { Get_Product } from "../types";

const initialState = {
    productItems: []
};

export default function productReducer(state = initialState, { type, payload }) {
    switch (type) {
        case Get_Product:
            return {
                ...state,
                productItems: payload,
            };
        default:
            return {
                ...state,
            };
    }
}
