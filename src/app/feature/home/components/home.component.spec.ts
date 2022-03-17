
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
// import { Test } from 'tslint';
// import { By } from '@angular/platform-browser';


import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
          HttpClientModule,
          ReactiveFormsModule,
          FormsModule
      ],
      providers: [HttpService]
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

  it('Validar formulario para calcular rendimiento de CDT', () =>{
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges()

    const form = app.dataSimulation;
    const mountLending = form.controls['mountLending'];
    const days = form.controls['Days'];
    mountLending.setValue('2500000');
    days.setValue('180');
    
    // const btnElement = fixture.debugElement.query(By.css('button.btn'));
    // btnElement.nativeElement.click();

    expect(form.valid).toBeTrue()
  })

 it('Calcular Rendimiento', () => {
   const fixture = TestBed.createComponent(HomeComponent);
   const app = fixture.componentInstance;
   fixture.detectChanges()

   const form = app.dataSimulation;
   const mountLending = form.controls['mountLending'];
   const days = form.controls['Days'];
   mountLending.setValue('2500000');
   days.setValue('180');
   
 
 })

});