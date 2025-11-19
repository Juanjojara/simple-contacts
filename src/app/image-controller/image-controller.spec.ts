import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageController } from './image-controller';

describe('ImageController', () => {
  let component: ImageController;
  let fixture: ComponentFixture<ImageController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
