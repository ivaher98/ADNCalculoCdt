import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-range',
    templateUrl: './input-range.component.html',
    styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnChanges {
    @Input() isValid: boolean = true; // Variable para que el padre pueda indicar si es valido el input o no
    @Input() title: String; // Titulo del input 
    @Input() control: FormControl; // Control del formulario padre al cual se va a asociar el input
    @Input() errorText: String; // Mensaje de error a mostrar cuando el campo sea invalido
    @Input() controlName: string; // Nombre del control asociado al formulario padre
    @Input() formGroup: FormGroup; // Formulario al cual esta asociado el control en el padre
    @Input() minValue: number; // Valor minimo del control
    @Input() maxValue: number; // Valor maximo del control
    @Input() stepValue: number; // Valor de los pasos del control
    @Input() initValue: number; // Valor del input variable desde el control padre
    @Output() onSelected = new EventEmitter<string>(); // Evento lanzado al seleccionar un valor del control
    details: string;

    constructor() {
    }

    // Evento que se lanza al realizar un cambio en el control
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
        if (changes.minValue != undefined) {
            this.details = this.minValue.toString();
        }
        if ((changes.control != undefined || this.control != undefined) && changes.initValue != undefined) {
            let initialValue = changes.initValue.currentValue;
            setTimeout(() => {
                this.control.setValue(initialValue);
                this.changeRange(initialValue, true);
            }, 100);
        }
        if (changes.control != undefined) {
            let initialValue = changes.control.currentValue.value;
            if (initialValue != undefined) {
                setTimeout(() => {
                    this.changeRange(initialValue, true);
                }, 100);
            }
        }
    }

    get f() { return this.formGroup }

    // Evento lanzado cuando se selecciona un valor del control
    private changeRange(value: any, isInitialValue: boolean) {
        console.log(value, isInitialValue)
        let fullRange = (this.maxValue / this.stepValue) - 1;
        let actStep = value / this.stepValue - 1;
        let percentageGradient;
        let marginLeft;

        if ((this.maxValue - value) * 2 <= this.maxValue) {
            percentageGradient = (97 / fullRange) * actStep;
            marginLeft = percentageGradient - 14;
        } else {
            if ((fullRange + 1 > 5) && value == (this.stepValue * 2)) {
                percentageGradient = (128 / fullRange) * actStep;
                marginLeft = percentageGradient - 3;
            } else if ((fullRange + 1 > 5) && value == (this.stepValue * 3)) {
                percentageGradient = (115 / fullRange) * actStep;
                marginLeft = percentageGradient - 3;
            } else {
                percentageGradient = (107 / fullRange) * actStep;
                marginLeft = percentageGradient - 3;
            }
        }
            console.log(this.controlName);
            var inp = document.getElementById(this.controlName);
            inp.style.background = "linear-gradient(to right, rgb(142, 228, 115) 0%, rgb(142, 228, 115)" + percentageGradient + "%, rgb(224, 224, 224) " + percentageGradient + "%, rgb(224, 224, 224) 100%)";
            this.details = value;
            console.log(marginLeft)
            document.getElementById("details").style.marginLeft = (marginLeft) + '%';
        
        if (!isInitialValue) {
            this.onSelected.emit(value);
        }
    }

    onChangeValue(event: any) {
        this.changeRange(event.target.value, false);
    }
}