import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocompoComponent } from './videocompo.component';

describe('VideocompoComponent', () => {
  let component: VideocompoComponent;
  let fixture: ComponentFixture<VideocompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
