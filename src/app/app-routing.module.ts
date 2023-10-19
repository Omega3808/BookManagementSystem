import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  { path: "",component:SliderComponent},
  { path: "books",component:BooksComponent},
  { path: "Addbook",component:AddBookComponent},
  { path: "EditBook/:id/edit",component:EditbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
