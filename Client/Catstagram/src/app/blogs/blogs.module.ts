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
import { BlogMessageComponent } from './blog-message/blog-message.component';
import { TestComponentComponent } from './blog-message/embeddedview-component/test-component.component';
import { ComponentfactoryresolverComponent } from './blog-post-list/componentfactoryresolver/componentfactoryresolver.component';
import { AppDemoDirective } from './app-demo.directive';

@NgModule({
  declarations: [BlogPostListComponent, BlogPostTileComponent,
    PaginatorComponent, TruncatePipe, BlogMessageComponent,
    TestComponentComponent, ComponentfactoryresolverComponent, AppDemoDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BlogsRoutingModule,
  ],
  providers: [],
  exports: [BlogPostListComponent, BlogPostTileComponent],
  entryComponents: [ComponentfactoryresolverComponent],
})
export class BlogsModule {
  constructor() {
    console.log('BlogsModule');
  }
}
