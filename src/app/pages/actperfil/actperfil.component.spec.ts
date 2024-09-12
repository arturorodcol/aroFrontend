import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActperfilComponent } from './actperfil.component';

describe('ActperfilComponent', () => {
  let component: ActperfilComponent;
  let fixture: ComponentFixture<ActperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
