import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTalleresComponent } from './agregar-talleres.component';

describe('AgregarTalleresComponent', () => {
  let component: AgregarTalleresComponent;
  let fixture: ComponentFixture<AgregarTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTalleresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
