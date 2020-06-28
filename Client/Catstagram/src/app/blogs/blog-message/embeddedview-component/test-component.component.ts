import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  constructor(public viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}
}
