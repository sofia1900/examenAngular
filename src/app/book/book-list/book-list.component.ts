import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookDetail } from '../book-detail';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  showInfo() {
    alert("Al pinchar aquí tiene que mostrarse el detalle del libro en la parte superior :)")
  }

  books: Array<BookDetail> = [];
  selected: boolean = false;
  selectedBook!: BookDetail;
  pagina: number = 1;
  searchedBook: any;

  constructor(private bookService: BookService, private router : Router) { }

  getBooks(): void {
    this.bookService.getBooks().subscribe({ next: (apiData: BookDetail[]) => this.books = apiData, error: e => console.error(e) });
  }

  onSelected(book: BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }
}
