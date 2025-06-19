import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCreationFormComponent } from './url-creation-form.component';

describe('UrlCreationFormComponent', () => {
  let component: UrlCreationFormComponent;
  let fixture: ComponentFixture<UrlCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlCreationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
