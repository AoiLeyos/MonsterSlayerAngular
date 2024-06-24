import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealButtonComponent } from './heal-button.component';

describe('HealButtonComponent', () => {
  let component: HealButtonComponent;
  let fixture: ComponentFixture<HealButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
