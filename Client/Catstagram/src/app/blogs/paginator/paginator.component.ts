import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() numberofPages: number;
  @Output() pageNumberClick: EventEmitter<number> = new EventEmitter<number>();

  pages: number[];
  constructor() {}

  ngOnInit() {
    this.pages = new Array(this.numberofPages);
  }

  pageNumberClicked(pageNumber) {
    this.pageNumberClick.emit(pageNumber);
  }
}
