import {create} from 'zustand'

export const useStore = create((set) => ({
    cart:[],
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        } else {
            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            };
        }
    }),
    removeCart:(productId) => set((state) => ({cart:state.cart.filter(product => product.id !== productId)})),
    clearCart:() => set({cart:[]})
}))