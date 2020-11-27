import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdministrateurComponent } from './super-administrateur.component';

describe('SuperAdministrateurComponent', () => {
  let component: SuperAdministrateurComponent;
  let fixture: ComponentFixture<SuperAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
