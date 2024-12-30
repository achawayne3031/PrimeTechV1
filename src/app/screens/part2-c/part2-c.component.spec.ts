import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2CComponent } from './part2-c.component';

describe('Part2CComponent', () => {
  let component: Part2CComponent;
  let fixture: ComponentFixture<Part2CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part2CComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part2CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
