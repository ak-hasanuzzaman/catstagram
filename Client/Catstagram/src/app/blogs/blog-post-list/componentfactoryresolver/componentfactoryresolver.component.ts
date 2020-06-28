import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentfactoryresolver',
  templateUrl: './componentfactoryresolver.component.html',
  styleUrls: ['./componentfactoryresolver.component.scss'],
})
export class ComponentfactoryresolverComponent implements OnInit {
  @Input() name: string = 'default name';

  constructor() {}

  ngOnInit() {}
}
