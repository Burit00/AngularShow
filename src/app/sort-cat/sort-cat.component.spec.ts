import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCatComponent } from './sort-cat.component';

describe('SortCatComponent', () => {
  let component: SortCatComponent;
  let fixture: ComponentFixture<SortCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
