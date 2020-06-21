import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
})
export class BlogPostListComponent implements OnInit {
  blogPosts: BlogPost[][];
  currentPage: any;
  @ViewChildren('tile') blogPostTileComponents: QueryList<
    BlogPostTileComponent
  >;
  abc: QueryList<BlogPostTileComponent>;

  constructor() {}

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = [
      // Page 1
      [
        {
          title: 'Post 1',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 2',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 3',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 4',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
      ],
      // Page 2
      [
        {
          title: 'Post 5',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 6',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 7',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 8',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
      ],
      // Page 3
      [
        {
          title: 'Post 9',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 10',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 11',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
        {
          title: 'Post 12',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.',
        },
      ],
    ];
  }
  updatePage(newPage) {
    this.currentPage = newPage;
  }

  expandAll() {
    this.blogPostTileComponents.forEach((o) => {
      o.showFullSummary();
    });
  }
  favoriteAll() {
    this.blogPosts[this.currentPage] = this.blogPosts[this.currentPage].map(
      (post) => ({
        summary: post.summary,
        title: post.title,
        isFav: true,
      })
    );
  }
}
