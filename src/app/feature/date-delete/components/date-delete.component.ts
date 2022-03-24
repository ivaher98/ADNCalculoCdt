import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';
import Swal from 'sweetalert2';
import { DeleteDateService } from '../service/deletedate.service';

@Component({
  selector: 'app-date-delete',
  templateUrl: './date-delete.component.html',
  styleUrls: ['./date-delete.component.scss']
})
export class DateDeleteComponent implements OnInit {
  isValid: boolean;
  formDelete: FormGroup = new FormGroup({});
  maskTypeNumber: MaskTypeInterface = MaskTypes.find(m => m.type === 'number');

  constructor(private deleteService: DeleteDateService, private route: Router) { }

  ngOnInit() {
    this.formDelete = new FormGroup({
      document: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)], ),
    });
    this.isValid = true;
  }

  public deleteDateService() {
    const documentUser = this.formDelete.controls['document'].value;
    this.deleteService.deleteDate(documentUser).subscribe((res: any) => {
      if (res) {
        Swal.fire(
          {
            icon: 'success',
            text: `Se ha eliminado con éxito la cita`
          }).then(() => {
            this.route.navigate(['./home']);
          });
      }
      else {
        Swal.fire(
          {
            icon: 'error',
            text: `No tienes citas asignadas para borrar`
          }).then(() => {
            this.route.navigate(['./home']);
          });
      }
    });

  }

  get fDelete() { return this.formDelete; }

}
