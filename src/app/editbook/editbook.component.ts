import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent {

  editBookForm: any;

  id !: number;

  constructor(private bookService: BookService, private route:ActivatedRoute){

  }

  ngOnInit(){

    this.id = this.route.snapshot.params['id']

    this.editBookForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      category: new FormControl('')
    })
    this.bookService.getBook(this.id).subscribe(x => this.editBookForm.patchValue(x));
  }

  EditBook(){

    this.bookService.updateBook(this.editBookForm.value)

  }

}
