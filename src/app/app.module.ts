import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookDataService } from './book-data.service';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditbookComponent } from './editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    BooksComponent,
    AddBookComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BookDataService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
