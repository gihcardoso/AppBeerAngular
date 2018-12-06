import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCervejasComponent } from './incluir-cervejas.component';

describe('IncluirCervejasComponent', () => {
  let component: IncluirCervejasComponent;
  let fixture: ComponentFixture<IncluirCervejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirCervejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
