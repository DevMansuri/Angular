import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/books/books.service';
import { Books } from 'src/app/interface/books';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book : Books = {} as Books; 
  id:number;
  id1:number;
 constructor(private cartService : CartService ,public bookService : BooksService) { }

  ngOnInit(): void {
  }
  addToCard() {
    // this.bookService.isinCart= true
    this.book.isinCart=true;
    this.cartService.add(this.book);
  }
  removeFromCart() {
    // this.bookService.isinCart = false;
    this.book.isinCart=false;

    console.log(this.book)
    this.cartService.remove(this.book) 
  }

}
