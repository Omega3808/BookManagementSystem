import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,private Router: Router) {}

  SERVER_URL:string = "http://localhost:8080/api/"

  getBooks(){

    return this.http.get(this.SERVER_URL+'books')

  }

  getBook(id: number){

    return this.http.get(`${this.SERVER_URL + 'books'}/${id}`);

  }

  createBook(book: { id: number, name: string, category: string }) {
    return this.http.post(`${this.SERVER_URL + 'books'}`,book).subscribe(
      (res: any) => {
        this.Router.navigateByUrl('/books');
      },
    );
  }
  

  deleteBook(n: number) {
    return this.http.delete(`${this.SERVER_URL + 'books'}/${n}`);
  }
  
  updateBook(book: { id: number, name: string, category: string }) {
    return this.http.put(`${this.SERVER_URL + 'books'}/${book.id}`, book).subscribe(
      (res: any) => {
        this.Router.navigateByUrl('/books');
      },
    );
  }


}
