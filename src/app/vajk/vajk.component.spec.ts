import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VajkComponent } from './vajk.component';

describe('VajkComponent', () => {
  let component: VajkComponent;
  let fixture: ComponentFixture<VajkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VajkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VajkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
