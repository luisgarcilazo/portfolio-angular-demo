import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPersonalComponent } from './portfolio-personal.component';

describe('PortfolioPersonalComponent', () => {
  let component: PortfolioPersonalComponent;
  let fixture: ComponentFixture<PortfolioPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPersonalComponent]
    });
    fixture = TestBed.createComponent(PortfolioPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
