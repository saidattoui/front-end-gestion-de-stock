import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleGategorieComponent } from './nouvelle-gategorie.component';

describe('NouvelleGategorieComponent', () => {
  let component: NouvelleGategorieComponent;
  let fixture: ComponentFixture<NouvelleGategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleGategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleGategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
