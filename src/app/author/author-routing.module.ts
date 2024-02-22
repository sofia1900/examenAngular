import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorCreateComponent } from './author-create/author-create.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorListComponent
  },
  {
    path: 'create',
    component: AuthorCreateComponent
  },
  {
    path: 'list',
    component: AuthorListComponent
  },
  {
    path: ':id',
    component: AuthorDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
