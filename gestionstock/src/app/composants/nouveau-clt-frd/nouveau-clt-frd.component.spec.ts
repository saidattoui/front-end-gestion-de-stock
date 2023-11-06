import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCltFrdComponent } from './nouveau-clt-frd.component';

describe('NouveauCltFrdComponent', () => {
  let component: NouveauCltFrdComponent;
  let fixture: ComponentFixture<NouveauCltFrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCltFrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCltFrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
