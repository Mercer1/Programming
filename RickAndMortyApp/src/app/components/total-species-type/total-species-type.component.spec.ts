import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSpeciesTypeComponent } from './total-species-type.component';

describe('TotalSpeciesTypeComponent', () => {
  let component: TotalSpeciesTypeComponent;
  let fixture: ComponentFixture<TotalSpeciesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSpeciesTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSpeciesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
