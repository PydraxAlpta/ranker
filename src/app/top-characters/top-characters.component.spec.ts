import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCharactersComponent } from './top-characters.component';

describe('TopCharactersComponent', () => {
  let component: TopCharactersComponent;
  let fixture: ComponentFixture<TopCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
