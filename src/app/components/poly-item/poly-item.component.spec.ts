import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyItemComponent } from './poly-item.component';

describe('PolyItemComponent', () => {
  let component: PolyItemComponent;
  let fixture: ComponentFixture<PolyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyItemComponent]
    });
    fixture = TestBed.createComponent(PolyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
