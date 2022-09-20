import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaetPageComponent } from './caet-page.component';

describe('CaetPageComponent', () => {
  let component: CaetPageComponent;
  let fixture: ComponentFixture<CaetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
