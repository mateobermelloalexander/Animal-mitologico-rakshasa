import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakshasaComponent } from './rakshasa.component';

describe('RakshasaComponent', () => {
  let component: RakshasaComponent;
  let fixture: ComponentFixture<RakshasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakshasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RakshasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
