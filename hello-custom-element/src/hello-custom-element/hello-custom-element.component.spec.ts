import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCustomElementComponent } from './hello-custom-element.component';

describe('HelloCustomElementComponent', () => {
  let component: HelloCustomElementComponent;
  let fixture: ComponentFixture<HelloCustomElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloCustomElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
