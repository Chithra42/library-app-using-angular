import { Component, OnInit } from '@angular/core';
import{BooksService}from'../books.service'
import { BookModel } from '../books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  title:String="Add Books"
  bookItem = new BookModel("","","","")
  constructor(public BooksService:BooksService, public router:Router) { }

  ngOnInit(): void {
  }

  NewBooks(){
    this.BooksService.addBooks(this.bookItem)
    alert('New Data Added')
    this.router.navigate([''])
  }
}
