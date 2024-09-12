import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TustalleresComponent } from './tustalleres.component';

describe('TustalleresComponent', () => {
  let component: TustalleresComponent;
  let fixture: ComponentFixture<TustalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TustalleresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TustalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
