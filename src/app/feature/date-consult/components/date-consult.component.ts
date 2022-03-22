import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignDateModel } from '@core/interface/assignDate';
import Swal from 'sweetalert2';
import { ConsultDateService } from '../services/consultdate.service';

@Component({
  selector: 'app-date-consult',
  templateUrl: './date-consult.component.html',
  styleUrls: ['./date-consult.component.scss']
})
export class DateConsultComponent implements OnInit {
  isValid: boolean;
  formConsult: FormGroup = new FormGroup({});
  constructor(private consultService: ConsultDateService, private route: Router) { }

  ngOnInit() {
    this.formConsult = new FormGroup({
      document: new FormControl('', [Validators.required])
    })
  }

  public consultDateService() {
    let documentUser = this.formConsult.controls['document'].value;
    console.log(documentUser);
    this.consultService.getDate(documentUser).subscribe((res: AssignDateModel) => {
      console.log(res.dataSimulation)
      if (res) {
        Swal.fire(`Hola ${res.dataSimulation.dataBasicPersonal.nameUser} la cita asignada 
        con ${res.dataSimulation.dataDate.nameAssesor} 
        será la fecha ${res.dataSimulation.dataDate.date}`).then(() => {
          this.route.navigate(['./home']);
        })
      }

    });

  }

  get fConsult() { return this.formConsult }

}
