import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataListEffectiveRateInterface, RateTypes } from '@core/interface/inputRange.interface';
import { InputStyleTypeInterface, InputStyleTypes } from '@core/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isValid: boolean = true;
  public maskTypeMoney: MaskTypeInterface = MaskTypes.find(m => m.type === "money");
  public dataSimulation: FormGroup;
  public inputTypeStyle: InputStyleTypeInterface = InputStyleTypes.find(m => m.type === "1");
  public interfaceInputRange: Array<DataListEffectiveRateInterface> = RateTypes;
  constructor() { }

  ngOnInit() {
    try {
      this.dataSimulation = new FormGroup({
        mountLending: new FormControl("", [Validators.required]),
        Days: new FormControl(30, [Validators.required])
      })

    } catch (error) {
      console.log(`error de formulario: ${error}` )
    }
  }

  get form(){ return this.dataSimulation; }

  public selectDays(event: number){
    let found = this.interfaceInputRange.find(el => event <= parseInt(el.plazo));
    console.log(found);
  }

}
