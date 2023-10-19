import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm: any;

  constructor(private bookService: BookService){

  }

  ngOnInit(){
    this.addBookForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      category: new FormControl('')
    })
  }

  createNewBook(){
    this.bookService.createBook(this.addBookForm.value)
  }

}
