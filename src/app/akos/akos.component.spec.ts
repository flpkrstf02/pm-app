import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkosComponent } from './akos.component';

describe('AkosComponent', () => {
  let component: AkosComponent;
  let fixture: ComponentFixture<AkosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AkosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AkosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
