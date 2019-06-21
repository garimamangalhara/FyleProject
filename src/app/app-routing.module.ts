import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './main-page/detail-page/detail-page.component';
const routes: Routes = [
  // {
  //   path: 'postDetails/:id',
  //   component: PostDetailsComponent,
  // },
  // {
  //   path: 'createPost',
  //   component: CreatePostComponent
  // },
  {
    path: 'bankDetails/:bankIfsc',
    component: DetailPageComponent
  },
  {
    path: '',
    component: MainPageComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
