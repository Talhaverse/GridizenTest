import {ADD_TO_CART} from './constants'

export function addToCart(item){
    return{
        type:ADD_TO_CART, // iss type say mai reducer ko bataoonga kay jab bhi ye function call ho add to cart kardo store kay andar
        data: item // jo bhi cart ka data hai like price color etc

    }
}