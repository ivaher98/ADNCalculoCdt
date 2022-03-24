import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataAsesorInterface } from 'src/app/feature/date-assing/shared/model/dataAsesor';
import { DataCdtInterface } from 'src/app/feature/date-assing/shared/model/dataCdt';
import { DataListEffectiveRateInterface, RateTypes } from '@core/interface/inputRange.interface';
import { InputStyleTypeInterface, InputStyleTypes } from '@core/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';
import { AssignDateService } from '../shared/services/assigndate.service';
import Swal from 'sweetalert2';
import { AssignDateModel } from '../../../core/interface/assignDate.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-assing',
  templateUrl: './date-assing.component.html',
  styleUrls: ['./date-assing.component.scss']
})
export class DateAssingComponent implements OnInit {
  public isValid: boolean;
  public maskTypeMoney: MaskTypeInterface = MaskTypes.find(m => m.type === 'money');
  public maskTypeNumber: MaskTypeInterface = MaskTypes.find(m => m.type === 'number');
  public maskTypeName: MaskTypeInterface = MaskTypes.find(m => m.type === 'name');
  public inputTypeStyle: InputStyleTypeInterface = InputStyleTypes.find(m => m.type === '1');
  public interfaceInputRange: Array<DataListEffectiveRateInterface> = RateTypes;
  public valueDays: number;
  public validateMount: boolean;
  public dataCdt: DataCdtInterface;
  public dataAsesor: DataAsesorInterface;
  public viewFormDate: boolean;
  public viewFormDataPersonal: boolean;
  public viewFormSimulate: boolean;
  public dataSimulation: FormGroup = new FormGroup({});
  public dataDate: FormGroup = new FormGroup({});
  public dataBasicPersonal: FormGroup = new FormGroup({});
  public formCdt: FormGroup = new FormGroup({});

  constructor(private assignService: AssignDateService, private route: Router) { }

  ngOnInit() {
    try {
      this.dataSimulation = new FormGroup({
        mountLending: new FormControl('', [Validators.required]),
        days: new FormControl(90, [Validators.required]),
      });
      this.dataBasicPersonal = new FormGroup({
        nameUser: new FormControl('', [Validators.required]),
        lastNameUser: new FormControl('', [Validators.required]),
        document: new FormControl('', [Validators.required, Validators.minLength(10)])
      });
      this.dataDate = new FormGroup({
        date: new FormControl('', [Validators.required]),
        nameAssesor: new FormControl('', [Validators.required])
      });
      this.formCdt = new FormGroup({
        id: new FormControl('', [Validators.required])
      });

    } catch (error) {
    }
    this.getDataCdtService();
    this.viewFormSimulate = true;
    this.viewFormDataPersonal = false;
    this.viewFormDate = false;
    this.isValid = true;
    this.valueDays = 90;
  }

  public validateMountLending(event: KeyboardEvent): boolean {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value.toString().replace(' ', '')
      .replace('$', '').split('.').join(''));
    const minValue = 1000000;
    const maxValue = 10000000;
    if ((value >= minValue) && (value <= maxValue)) {
      return this.validateMount = true;
    } else{
      return this.validateMount = false;
    }
  }

  public selectDays(event: any) {
    return this.valueDays = event;
  }

  public viewDateAssign() {
    this.viewFormDataPersonal = false;
    this.viewFormDate = true;
  }

  public assignDateService() {
    let assignDate: AssignDateModel;
    this.formCdt.controls['id'].setValue(this.dataBasicPersonal.controls['document'].value);
    this.formCdt.addControl('dataSimulation', this.dataSimulation);
    this.dataSimulation.addControl('dataDate', this.dataDate);
    this.dataSimulation.addControl('dataBasicPersonal', this.dataBasicPersonal);
    assignDate = this.formCdt.value;
    this.assignService.assignDateCdt(assignDate).
      subscribe((res: any) => {
        if (res) {
          Swal.fire({
            icon: 'success',
            text: `Tú cita ha sido agendada con ${res.dataSimulation.dataDate.nameAssesor}
            para el día ${res.dataSimulation.dataDate.date}`!,
          }).then(() => {
            this.route.navigate(['./home']);
          });
        } else {
          Swal.fire('No se ha podido completar tu solicitud, inténtalo más tade.');
        }
      });
  }

  public calculateInvestmentCdt() {
    const valueInvest: string = this.dataSimulation.get('mountLending').value.toString().replace(' ', '')
      .replace('$', '').split('.').join('');
    const days: number = this.dataSimulation.get('days').value;
    const retFuente = this.dataCdt[0].retfuente;
    const investmentCdt = Math.round((Number(valueInvest) * (retFuente)) / days);
    const value = investmentCdt.toString().replace(' ', '').replace('$', '').split('.').join('');
    Swal.fire({
      text: `Tu rendimiento de un monto de ${this.dataSimulation.get('mountLending').value} a un
      plazo de ${days} días es de $${value}. ¿Deseas completar la información para agendar una cita con un asesor de la entidad?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí, deseo agendar',
      denyButtonText: `No, gracias`,
    }).then((res) => {
      if (res.isConfirmed) {
        this.getDataAsesorService();
        this.viewFormSimulate = false;
        this.viewFormDataPersonal = true;
      } else if (res.isDenied) {
        Swal.fire('Gracias', '', 'error');
      }
    });
  }

  private getDataCdtService() {
    this.assignService.getInfoCdt().subscribe((res: DataCdtInterface) => {
      this.dataCdt = res;
    });
  }

  private getDataAsesorService() {
    this.assignService.getInfoAsesor().subscribe((res: DataAsesorInterface) => {
      this.dataAsesor = res;
    });
  }


  get formSimulation() { return this.dataSimulation; }
  get formDataPersonal() { return this.dataBasicPersonal; }
  get formDataDate() { return this.dataDate; }

}
