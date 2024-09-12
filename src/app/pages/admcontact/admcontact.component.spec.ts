import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmcontactComponent } from './admcontact.component';

describe('AdmcontactComponent', () => {
  let component: AdmcontactComponent;
  let fixture: ComponentFixture<AdmcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
