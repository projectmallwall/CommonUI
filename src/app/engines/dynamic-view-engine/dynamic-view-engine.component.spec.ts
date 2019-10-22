import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicViewEngineComponent } from './dynamic-view-engine.component';

describe('DynamicViewEngineComponent', () => {
  let component: DynamicViewEngineComponent;
  let fixture: ComponentFixture<DynamicViewEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicViewEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicViewEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
