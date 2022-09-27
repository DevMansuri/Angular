import { Injectable } from '@angular/core';
import { Books } from '../interface/books';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Books[] = [];

  constructor() { }

  add(book :Books) {
    console.log(book);
    this.cart.push(book);
    return this.cart
  }
  remove(book : Books) {
    this.cart = this.cart.filter((b) => b != book )
  }
  get() {
   return this.cart;
  }
}
