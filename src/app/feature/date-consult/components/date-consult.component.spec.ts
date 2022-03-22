import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { DateConsultComponent } from './date-consult.component';

describe('Date Consult Component', () => {
    let fixture: ComponentFixture<DateConsultComponent>;
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [DateConsultComponent],
            imports: [
                HttpClientModule,
                ReactiveFormsModule,
                FormsModule,
                SharedModule,
                RouterTestingModule
            ],
            providers: [
                HttpService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DateConsultComponent);
        fixture.detectChanges();
    }));
});
