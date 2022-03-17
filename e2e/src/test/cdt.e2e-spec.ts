// import { browser } from "protractor";
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../../src/app/core/services/http.service';

describe('Pruebas CDT', () => {

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpService]
    })
      .compileComponents();
  }));
});
