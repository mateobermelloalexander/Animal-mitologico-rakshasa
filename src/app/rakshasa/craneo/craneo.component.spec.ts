import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneoComponent } from './craneo.component';

describe('CraneoComponent', () => {
  let component: CraneoComponent;
  let fixture: ComponentFixture<CraneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CraneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
