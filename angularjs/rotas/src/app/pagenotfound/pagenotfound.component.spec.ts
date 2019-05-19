import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFoundComponent } from './pagenotfound.component';

describe('PagenotfoundComponent', () => {
  let component: PagenotFoundComponent;
  let fixture: ComponentFixture<PagenotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
