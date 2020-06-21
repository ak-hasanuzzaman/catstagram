import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BlogsRoutingModule } from './blog-routing.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [BlogPostListComponent, BlogPostTileComponent, PaginatorComponent, TruncatePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BlogsRoutingModule,
  ],
  providers: [],
  exports: [BlogPostListComponent, BlogPostTileComponent],
})
export class BlogsModule {
  constructor() {
    console.log('BlogsModule');
  }
}
