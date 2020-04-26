import { Injectable } from '@angular/core';
import { ICartItem } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ICartItem[];
  constructor() {
    this.cart = [];
  }

  addItemtoCart(args: { cartItem: ICartItem }) {
    try {
      const cart = localStorage.getItem('cart');
      if (cart) {
        const parsedCart: ICartItem[] = JSON.parse(cart);
        parsedCart.push(args.cartItem);

        localStorage.setItem('cart', JSON.stringify(parsedCart));
      } else {
        const newCart = [args.cartItem];
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    } catch (error) {
      throw error;
    }
  }

  removeItem(index: number) {
    try {
      const cart = this.fetchFromStorage();
      if (cart) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
      }else{
        throw new Error('Cart is already empty')
      }
    } catch (error) {
      throw error;
    }
  }

  private fetchFromStorage() {
    const cart = localStorage.getItem('cart');
    if (!cart || cart === null) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  }

  fetchCart() {
    try {
      const cart = localStorage.getItem('cart');
      if (!cart) {
        return [];
      } else {
        const parsedCart = JSON.parse(cart);
        return parsedCart;
      }
    } catch (error) {
      throw error;
    }
  }
}
