import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbuttComponent } from './scrollbutt.component';

describe('ScrollbuttComponent', () => {
  let component: ScrollbuttComponent;
  let fixture: ComponentFixture<ScrollbuttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollbuttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbuttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
