import {
  Component,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { EventEmitter } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost;
  fullSummary: any;
  post1: BlogPost;

  constructor(
    private truncatePipe: TruncatePipe,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 10);
  }

  showFullSummary() {
    let post = new BlogPost();
    Object.assign(post, this.post);
    post.summary = this.fullSummary;
    this.cd.markForCheck();
    this.post = post;
  }

  toggleFavorite() {
    this.post.isFav = !this.post.isFav;
  }
}
