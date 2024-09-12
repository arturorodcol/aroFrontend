import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmtalleresComponent } from './admtalleres.component';

describe('AdmtalleresComponent', () => {
  let component: AdmtalleresComponent;
  let fixture: ComponentFixture<AdmtalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmtalleresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmtalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
