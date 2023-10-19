import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books:any[] = [];
  errorMsg = "";

  constructor(private BookService: BookService){}

  ngOnInit(){
    this.BookService.getBooks().subscribe((data:any) => {this.books = data}, error => {
      this.errorMsg = "Getting Error";
    });    
  }
  delRecord = false;

  deleteRecord(id: number) {
    this.BookService.deleteBook(id).subscribe(
      (ret) => {
        this.books = this.books.filter(item => item.id !== id);
        this.delRecord=true;
      },
    );
  }
  

}
