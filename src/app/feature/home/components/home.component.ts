import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataCdtInterface } from '@core/interface/datacdt.interface';
import { DataListEffectiveRateInterface, RateTypes } from '@core/interface/inputRange.interface';
import { InputStyleTypeInterface, InputStyleTypes } from '@core/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DataAsesorInterface } from '@core/interface/dataAsesor.interface';
import { DataDate } from '@core/interface/dataDate.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isValid: boolean;
  public maskTypeMoney: MaskTypeInterface = MaskTypes.find(m => m.type === 'money');
  public dataSimulation: FormGroup = new FormGroup({});
  public dataDate: FormGroup = new FormGroup({});
  public inputTypeStyle: InputStyleTypeInterface = InputStyleTypes.find(m => m.type === '1');
  public interfaceInputRange: Array<DataListEffectiveRateInterface> = RateTypes;
  public valueDays: number;
  public dataCdt: DataCdtInterface;
  public dataAsesor: DataAsesorInterface[] = [];
  public viewFormDate: boolean;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    try {
      this.dataSimulation = new FormGroup({
        mountLending: new FormControl('', [Validators.required]),
        Days: new FormControl(90, [Validators.required]),
      });
      this.dataDate = new FormGroup({
        date: new FormControl('', [Validators.required]),
        nombreAsesor: new FormControl('', [Validators.required])
      });
    } catch (error) {
    }
    this.getDataCdtService();
    this.viewFormDate = true;
    this.isValid = true;
    this.valueDays = 0;
  }

  public selectDays(event: any) {
    return this.valueDays = event;
  }


  public goBack() {
    this.viewFormDate = true;
  }

  public assignDateService() {
    this.dataSimulation.addControl('dataDate', this.dataDate);
    this.httpService.doPost(environment.endPointAssignDate, this.dataSimulation.value, this.httpService.optsName('application/json')).
      subscribe((res: DataDate) => {
        if (res) {
          Swal.fire({
            icon: 'success',
            text: `Tú cita ha sido agendada con ${res.dataDate.nombreAsesor} para el día ${res.dataDate.date}`!,
          }).then((response) => {
            if (response) {
              window.location.reload();
            }
          });
        } else {
          Swal.fire('No se ha podido completar tu solicitud, inténtalo más tade.');
        }
      });
  }

  public calculateInvestmentCdt() {
    const valueInvest: string = this.dataSimulation.get('mountLending').value.toString().replace(' ', '').replace('$', '').split('.').join('');
    const days: number = this.dataSimulation.get('Days').value;
    const retFuente = this.dataCdt[0].retfuente;
    const investmentCdt = Math.round((Number(valueInvest) * (retFuente)) / days);
    const value = investmentCdt.toString().replace(' ', '').replace('$', '').split('.').join('');
    Swal.fire({
      text: `Tu rendimiento de un monto de ${this.dataSimulation.get('mountLending').value} a un plazo de ${days} días es de $${value}. ¿Desea agendar una cita con un asesor de la entidad financiera para terminar la solicitud?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí, deseo agendar',
      denyButtonText: `No, gracias`,
    }).then((res) => {
      if (res.isConfirmed) {
        this.getDataAsesorService();
      } else if (res.isDenied) {
        Swal.fire('Gracias', '', 'error');
      }
    });
  }

  get form() { return this.dataSimulation; }

  private getDataCdtService() {
    this.httpService.doGet(`${environment.endPointGetDataCdt}`).subscribe((res: DataCdtInterface) => {
      this.dataCdt = res;
    });
  }

  private getDataAsesorService() {
    this.httpService.doGet(`${environment.endPointGetDataAsesor}`).subscribe((res: DataAsesorInterface[]) => {
      this.dataAsesor = res;
      this.viewFormDate = true;
    });
  }

}
