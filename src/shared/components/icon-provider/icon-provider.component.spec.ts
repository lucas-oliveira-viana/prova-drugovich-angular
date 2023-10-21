import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconProviderComponent } from './icon-provider.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('IconProviderComponent', () => {
  let component: IconProviderComponent;
  let fixture: ComponentFixture<IconProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconProviderComponent],
      imports: [
        CommonModule, HttpClientModule
      ],
    });
    fixture = TestBed.createComponent(IconProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
