import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtlisateurComponent } from './detail-utlisateur.component';

describe('DetailUtlisateurComponent', () => {
  let component: DetailUtlisateurComponent;
  let fixture: ComponentFixture<DetailUtlisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUtlisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUtlisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
