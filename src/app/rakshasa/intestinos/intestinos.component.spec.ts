import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntestinosComponent } from './intestinos.component';

describe('IntestinosComponent', () => {
  let component: IntestinosComponent;
  let fixture: ComponentFixture<IntestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntestinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
