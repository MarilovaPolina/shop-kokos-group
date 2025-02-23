import { CartItem } from "../redux/cart/types";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items =  data ? JSON.parse(data) : [];

    return items as CartItem[];
}