import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAttackButtonComponent } from './special-attack-button.component';

describe('SpecialAttackButtonComponent', () => {
  let component: SpecialAttackButtonComponent;
  let fixture: ComponentFixture<SpecialAttackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialAttackButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAttackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
