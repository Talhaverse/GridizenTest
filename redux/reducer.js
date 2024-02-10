import { ADD_TO_CART } from "./constants";
const initialState = []; // array iss liye cuz add to cart mai items hongay to wo array mai store hongay 

 export const reducer = (state=initialState,action) =>{
 switch (action.type) {
        case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
            default:
                return state
 }
}