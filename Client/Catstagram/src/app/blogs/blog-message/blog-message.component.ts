import {
  Component,
  OnInit,
  AfterViewInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { TestComponentComponent } from './embeddedview-component/test-component.component';

@Component({
  selector: 'app-blog-message',
  templateUrl: './blog-message.component.html',
  styleUrls: ['./blog-message.component.scss'],
})
export class BlogMessageComponent implements OnInit, AfterViewInit {
  @ViewChildren(TestComponentComponent)
  private queryList: QueryList<TestComponentComponent>;

  @ViewChild('msg', { static: false }) private msgTempRef: TemplateRef<any>;

  ngAfterViewInit(): void {
    debugger;
    this.queryList.map((messageDirective) =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef)
    );
  }

  ngOnInit() {}
}
