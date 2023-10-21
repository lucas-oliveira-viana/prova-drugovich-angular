import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ContentService } from './content.service';
import { CommonModule } from '@angular/common';
import { CustomerListModule } from 'src/app/pages/customer-list/customer-list.module';
import { CustomerFormModule } from 'src/app/pages/customer-form/customer-form.module';
import { IconProviderModule } from 'src/shared/components/icon-provider/icon-provider.module';
import { ButtonModule } from 'src/shared/components/button/button.module';

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
