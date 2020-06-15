import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LendingBooksComponent } from './lending-books/lending-books.component';
import { ShowLendingBookComponent } from './show-lending-book/show-lending-book.component';
import { AddLendingBookComponent } from './add-lending-book/add-lending-book.component';
import { EditLendingBookComponent } from './edit-lending-book/edit-lending-book.component';

const routes: Routes = [

  { path: "homepage", component: HomepageComponent },
  { path: "user account", component: UserAccountComponent },
  {
    path: 'lending-books',
    component: LendingBooksComponent,
    data: { title: 'Lending Books' }
  },
  {
    path: 'show-lending-book/:id',
    component: ShowLendingBookComponent,
    data: { title: 'Show Lending Book' }
  },
  {
    path: 'add-lending-book',
    component: AddLendingBookComponent,
    data: { title: 'Add Lending Book' }
  },
  {
    path: 'edit-lending-book/:id',
    component: EditLendingBookComponent,
    data: { title: 'Edit Book' }
  },
  // { path: '',
  //   redirectTo: '/lending-books',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
