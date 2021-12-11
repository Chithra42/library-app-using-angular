import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books"
  books:BookModel[];
  constructor(private BooksService:BooksService) { }

  ngOnInit(): void {
    this.BooksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    })
  }

}
