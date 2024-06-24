import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightLogsComponent } from './fight-logs.component';

describe('FightLogsComponent', () => {
  let component: FightLogsComponent;
  let fixture: ComponentFixture<FightLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
