import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolyComponent } from './add-poly.component';

describe('AddPolyComponent', () => {
  let component: AddPolyComponent;
  let fixture: ComponentFixture<AddPolyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPolyComponent]
    });
    fixture = TestBed.createComponent(AddPolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
