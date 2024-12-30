import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2AComponent } from './part2-a.component';

describe('Part2AComponent', () => {
  let component: Part2AComponent;
  let fixture: ComponentFixture<Part2AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part2AComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
