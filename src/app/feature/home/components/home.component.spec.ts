
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';



import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpService: HttpService;


  beforeEach((() => {
    httpService = TestBed.inject(HttpService);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
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

  it('Http Service correctament', () => {
    expect(httpService).toBeTruthy();
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

  it('Calcular Rendimiento', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const mountvar = 'mountLending';
    const daysvar = 'Days';
    const retfuente = 6;
    let valueRen = 0;

    const form = app.dataSimulation;
    const mountLending = form.controls[mountvar];
    const days = form.controls[daysvar];
    mountLending.setValue('2500000');
    days.setValue('180');

    valueRen = (Number(mountLending) * (retfuente / 100) / Number(days));

    expect(valueRen).toBeTrue();

  });

});
