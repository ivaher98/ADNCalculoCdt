
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';



import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
        // RouterModule
      ],
      providers: [
        HttpService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('Validar formulario para calcular rendimiento de CDT', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const mountvar = 'mountLending';
    const daysvar = 'Days';

    const form = app.dataSimulation;
    const mountLending = form.controls[mountvar];
    const days = form.controls[daysvar];
    mountLending.setValue('2500000');
    days.setValue('180');

    expect(form.valid).toBeTrue();
  });

  it('Validación de formulario asignación cita', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const date = '12-01-2022';
    const asesor = 'Juan Camilo Garcia';
    const controlDate = 'date';
    const controlNombreAsesor = 'nombreAsesor';
    const form = app.dataDate;
    form.controls[controlDate].setValue(date);
    form.controls[controlNombreAsesor].setValue(asesor);

    expect(form.valid).toBeTrue();

  });

  it('Go Back', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const viewFormDate = app.viewFormDate;

    expect(viewFormDate).toBeTrue();
  });
  
});
