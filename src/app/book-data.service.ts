import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BookDataService implements InMemoryDbService {

  createDb(){

    let books = [
      { id: 1, name: 'Angular for service', category: 'Angular' },
      { id: 2, name: 'Python for fresher', category: 'Python' },
      { id: 3, name: 'React JS for UI', category: 'React' },
      { id: 4, name: 'Java Programming', category: 'Java' },
      { id: 5, name: 'Web Development with Node.js', category: 'Node.js' },
      { id: 6, name: 'Machine Learning Basics', category: 'Machine Learning' },
      { id: 7, name: 'C# Fundamentals', category: 'C#' },
      { id: 8, name: 'Database Design with SQL', category: 'SQL' },
      { id: 9, name: 'iOS App Development with Swift', category: 'Swift' },
      { id: 10, name: 'Cybersecurity Essentials', category: 'Cybersecurity' }
    ];
    return {books};

  }

  constructor() { }


}
