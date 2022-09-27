import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  books=[
    {
      name : "Aurduino Programming",
      author : "Ryan Turner ",
      src : "https://images-na.ssl-images-amazon.com/images/I/41VFNO6C4HL.jpg",
      amount :500,
     isinCart : false
    },
    {
      name : "Python Programming",
      author : "Ryan Turner",
      src :"https://images-na.ssl-images-amazon.com/images/I/41VkICdTF5L.jpg",
      amount : 600,
     isinCart : false
    },
    {

      name :"Sql",
      author : "Ryan Turner",
      src : "https://images-na.ssl-images-amazon.com/images/I/41qZSnkRmyL.jpg",
      amount :700,
      isinCart : false
    },
    {
      name :"C#",
      author : "Ryan Turner",
      src : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552303724l/44334928._SY475_.jpg",
      amount :800,
      isinCart : false

    }

  ]

  constructor() { }

  index:number;
  isinCart :boolean  = false;

  getBooks() {
    return this.books.slice();
  }
}
