import { Component, OnInit } from '@angular/core';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css'],
})
export class EditorialListComponent implements OnInit {
  showInfo() {
    alert("Al pinchar aquí se tiene que abrir en otra página el detalle del libro, hazlo con routerLink :)")
  }
  editorials: Array<EditorialDetail> = [];
  constructor(private editorialService: EditorialService) { }

  getEditorials() {
    this.editorialService.getEditorials().subscribe((apiData) => {
      this.editorials = apiData;
    });
  }

  ngOnInit() {
    this.getEditorials();
  }
}
