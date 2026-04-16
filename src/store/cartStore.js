import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find((i) => i.id === item.id && i.portion === item.portion);
    if (existingItem) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id && i.portion === item.portion
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),
  removeFromCart: (id, portion) => set((state) => ({
    cart: state.cart.filter((i) => !(i.id === id && i.portion === portion)),
  })),
  updateQuantity: (id, portion, quantity) => set((state) => ({
    cart: state.cart.map((i) =>
      i.id === id && i.portion === portion ? { ...i, quantity: Math.max(1, quantity) } : i
    ),
  })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
