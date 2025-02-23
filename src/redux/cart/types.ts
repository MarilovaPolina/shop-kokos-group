export type CartItem = {
    id: string,
    name: string,
    price: number,
    count: number,
    image: string,
    size: string,
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}
