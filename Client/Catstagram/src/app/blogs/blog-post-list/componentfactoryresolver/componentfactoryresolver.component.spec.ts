import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentfactoryresolverComponent } from './componentfactoryresolver.component';

describe('ComponentfactoryresolverComponent', () => {
  let component: ComponentfactoryresolverComponent;
  let fixture: ComponentFixture<ComponentfactoryresolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentfactoryresolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentfactoryresolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
