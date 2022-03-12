import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputStyleTypeInterface, InputStyleTypes } from '@core/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';
import { UtilsFunctions } from '@core/modelo/utilsFunctions.model';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnChanges {
    @Input() isValid: boolean = true; // Variable para que el padre pueda indicar si es valido el input o no
    @Input() title: String; // Titulo del input 
    @Input() control: FormControl; // Control del formulario padre al cual se va a asociar el input
    @Input() errorText: String; // Mensaje de error a mostrar cuando el campo sea invalido
    @Input() controlName: string; // Nombre del control asociado al formulario padre
    @Input() formGroup: FormGroup; // Formulario al cual esta asociado el control en el padre
    @Input() placeHolderText: String; // Place holder a mostrar en en control
    @Input() details: string = null; // Indica el valor a mostrar al lado izquierdo del control ej -> CC
    @Input() maskType: MaskTypeInterface = MaskTypes.find(m => m.type == "default"); // Indica el tipo de mascara a utilizar en el control
    @Input() inputStyleType: InputStyleTypeInterface = InputStyleTypes.find(i => i.id == "1"); // Indica el tipo de estilo a utilizar en el control
    @Input() maxLength: number = undefined;
    @Input() minLength: number = undefined;
    @Output() onFocusOut: EventEmitter<string> = new EventEmitter(); //Evento lanzado al perder el foco del control
    public disabledControl: boolean = false; // Variable que indica si el control esta habilitado para editar o no

    @Input() icon:string=null;



    // Constructor de la clase
    constructor(
        private utilsFunctions: UtilsFunctions
    ) { }

    // evento lanzado al detectar cambios en las variables del control
    ngOnChanges(changes: SimpleChanges) {
        if (changes.control != undefined && changes.control.firstChange) {
            this.disabledControl = changes.control.currentValue.disabled;

            let initialValue = changes.control.currentValue.value;
            this.mask(undefined, initialValue);
        }
    }

    // Evento encargado de aplicar la mascara al control si esta configurada
    mask(event: any, initialValue?: string) {
        if (this.maskType != undefined) {
            switch (this.maskType.type) {
                case "money":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskMoney(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskMoney(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;
            }
        }
    }

    focusOut(event) {
        let value = event.target.value;
        this.onFocusOut.emit(this.utilsFunctions.getValueFromMaskMoney(value));
        console.log(this.f);
    }

    get f() { return this.formGroup }
}