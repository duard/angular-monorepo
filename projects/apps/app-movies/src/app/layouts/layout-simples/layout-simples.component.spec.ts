import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSimplesComponent } from './layout-simples.component';

describe('LayoutSimplesComponent', () => {
  let component: LayoutSimplesComponent;
  let fixture: ComponentFixture<LayoutSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutSimplesComponent]
    });
    fixture = TestBed.createComponent(LayoutSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
