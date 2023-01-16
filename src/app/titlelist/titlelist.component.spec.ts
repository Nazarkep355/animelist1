import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlelistComponent } from './titlelist.component';

describe('TitlelistComponent', () => {
  let component: TitlelistComponent;
  let fixture: ComponentFixture<TitlelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
