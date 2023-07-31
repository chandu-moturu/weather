import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGraphComponent } from './temp-graph.component';

describe('TempGraphComponent', () => {
  let component: TempGraphComponent;
  let fixture: ComponentFixture<TempGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempGraphComponent]
    });
    fixture = TestBed.createComponent(TempGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
