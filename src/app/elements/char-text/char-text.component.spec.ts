import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: CharTextComponent;
  let fixture: ComponentFixture<CharTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
