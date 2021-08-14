import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfactorsComponent } from './subfactors.component';

describe('SubfactorsComponent', () => {
  let component: SubfactorsComponent;
  let fixture: ComponentFixture<SubfactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
