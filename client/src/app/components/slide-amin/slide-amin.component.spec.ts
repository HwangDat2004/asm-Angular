import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAminComponent } from './slide-amin.component';

describe('SlideAminComponent', () => {
  let component: SlideAminComponent;
  let fixture: ComponentFixture<SlideAminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideAminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideAminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
