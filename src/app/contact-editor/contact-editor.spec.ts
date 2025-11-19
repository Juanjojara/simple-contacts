import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditor } from './contact-editor';

describe('ContactEditor', () => {
  let component: ContactEditor;
  let fixture: ComponentFixture<ContactEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
