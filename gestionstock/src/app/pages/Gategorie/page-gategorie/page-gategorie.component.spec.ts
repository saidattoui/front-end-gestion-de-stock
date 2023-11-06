import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGategorieComponent } from './page-gategorie.component';

describe('PageGategorieComponent', () => {
  let component: PageGategorieComponent;
  let fixture: ComponentFixture<PageGategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
