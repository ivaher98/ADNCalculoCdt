
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpService } from '@core/services/http.service';



import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgModule,
        RouterModule
      ],
      providers: [
        HttpService
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

  // it('Calcular Rendimiento', () => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const mountvar = 'mountLending';
  //   const daysvar = 'Days';
  //   const retfuente = 6;
  //   let valueRen = 0;

  //   const form = app.dataSimulation;
  //   const mountLending = form.controls[mountvar];
  //   const days = form.controls[daysvar];
  //   mountLending.setValue('2500000');
  //   days.setValue('180');

  //   valueRen = (Number(mountLending) * (retfuente / 100) / Number(days));

  //   expect(valueRen).toBeTrue();

  // });

});
