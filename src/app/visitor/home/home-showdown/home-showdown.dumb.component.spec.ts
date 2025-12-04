import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowdownDumbComponent } from './home-showdown.dumb.component';

describe('HomeShowdownDumbComponent', () => {
  let component: HomeShowdownDumbComponent;
  let fixture: ComponentFixture<HomeShowdownDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeShowdownDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShowdownDumbComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
