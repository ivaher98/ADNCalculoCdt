// import { browser } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../../src/app/core/services/http.service';
import { DataAssignPage } from '../page/data-assing/date-assing.po';

describe('Pruebas CDT', () => {
  let dateAssignPage: DataAssignPage;
  beforeEach((() => {
    dateAssignPage = new DataAssignPage();
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
    dateAssignPage.navigateTo();
    expect(dateAssignPage.getDays()).toEqual('90');
  });

  it('Debería aceptar solo números', () => {
    const expreg = /^([0-9])*$/;
    dateAssignPage.navigateTo();

    expect(dateAssignPage.getMountLending()).toMatch(expreg);
  });

  it('Debería calcular cdt', () => {
    dateAssignPage.navigateTo();

    expect(dateAssignPage.getMountLending());
  });

});
