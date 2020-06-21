import { Routes, RouterModule } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlogPostListComponent,
  },
  {
    path: 'blogpost',
    component: BlogPostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {
  constructor() {
    console.log('BlogsRoutingModule');
  }
}
