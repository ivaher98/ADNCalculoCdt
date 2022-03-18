// import { browser } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../../src/app/core/services/http.service';
import { HomePage } from '../page/home/home.po';

describe('Pruebas CDT', () => {
  let home: HomePage;
  beforeEach((() => {
    home = new HomePage();
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpService]
    })
      .compileComponents();
  }));

  it('debería el plazo empezar en 90 días', () => {
    home.navigateTo();
    expect(home.getDays()).toEqual('90');
  });

  it('Debería aceptar solo números', () => {
    const expreg = /^([0-9])*$/;
    home.navigateTo();

    expect(home.getMountLending()).toMatch(expreg);
  });

  it('Debería calcular cdt', () => {
    home.navigateTo();

    expect(home.getMountLending());
  });

});
