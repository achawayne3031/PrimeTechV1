import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2BComponent } from './part2-b.component';

describe('Part2BComponent', () => {
  let component: Part2BComponent;
  let fixture: ComponentFixture<Part2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part2BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
