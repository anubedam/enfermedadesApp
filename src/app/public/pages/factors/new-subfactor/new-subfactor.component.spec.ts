import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubfactorComponent } from './new-subfactor.component';

describe('NewSubfactorComponent', () => {
  let component: NewSubfactorComponent;
  let fixture: ComponentFixture<NewSubfactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubfactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
