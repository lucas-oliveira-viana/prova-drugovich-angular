import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ContentService } from './content.service';
import { CustomerListModule } from 'src/pages/customer-list/customer-list.module';
import { CustomerFormModule } from 'src/pages/customer-form/customer-form.module';
import { IconProviderModule } from '../icon-provider/icon-provider.module';
import { ButtonModule } from '../button/button.module';
import { CommonModule } from '@angular/common';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent],
      providers: [
        ContentService
      ],
      imports: [
        CustomerListModule, CustomerFormModule, IconProviderModule, ButtonModule, CommonModule
      ]
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
