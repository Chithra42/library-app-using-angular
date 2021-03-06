import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) {}
   
getBooks(){ 
  return this.http.get('http://localhost:3000/')
   }

addBooks(item){
  return this.http.post('http://localhost:3000/addbooks',{item})
  .subscribe(data=>console.log(data))
}
}
