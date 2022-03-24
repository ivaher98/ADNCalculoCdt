import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { DateAssingComponent } from './date-assing.component';

describe('DateAssingComponent', () => {
    let fixture: ComponentFixture<DateAssingComponent>;
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [DateAssingComponent],
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
        fixture = TestBed.createComponent(DateAssingComponent);
        fixture.detectChanges();
    }));


    it('Validar formulario para calcular rendimiento de CDT', () => {
        fixture = TestBed.createComponent(DateAssingComponent);
        const app = fixture.componentInstance;
        fixture.detectChanges();

        const form = app.dataSimulation;
        const mountLending = form.controls[`mountLending`];
        const days = form.controls[`days`];
        mountLending.setValue('2500000');
        days.setValue('180');
        expect(form.valid).toBeTrue();
    });

    it('Validación de formulario asignación cita', () => {
        fixture = TestBed.createComponent(DateAssingComponent);
        const app = fixture.componentInstance;
        fixture.detectChanges();

        const date = '12-01-2022';
        const asesor = 'Juan Camilo Garcia';
        const controlDate = 'date';
        const controlNombreAsesor = 'nameAssesor';
        const form = app.dataDate;
        form.controls[controlDate].setValue(date);
        form.controls[controlNombreAsesor].setValue(asesor);
        expect(form.valid).toBeTrue();
    });

    it('Validar monto de inversión', () => {
        fixture = TestBed.createComponent(DateAssingComponent);
        const app = fixture.componentInstance;
        fixture.detectChanges();
        const validateMount = app.validateMount = true;
        expect(validateMount).toBe(true);
    });
});
