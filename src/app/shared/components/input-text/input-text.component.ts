import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputStyleTypeInterface, InputStyleTypes } from '@core/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from '@core/interface/maskType.interfaces';
import { UtilsFunctions } from '@core/modelo/utilsFunctions.model';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnChanges {
    @Input() isValid: boolean;
    @Input() title: string;
    @Input() control: FormControl;
    @Input() errorText: string;
    @Input() controlName: string;
    @Input() formGroup: FormGroup;
    @Input() placeHolderText: string;
    @Input() details: string = null;
    @Input() maskType: MaskTypeInterface = MaskTypes.find(m => m.type === 'default');
    @Input() inputStyleType: InputStyleTypeInterface = InputStyleTypes.find(i => i.id === '1');
    @Input() maxLength: number = undefined;
    @Input() minLength: number = undefined;
    @Input() icon: string = null;
    @Output() focusOutEvent: EventEmitter<string> = new EventEmitter();
    public disabledControl: boolean;

    constructor(
        private utilsFunctions: UtilsFunctions
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.control !== undefined && changes.control.firstChange && changes.control.currentValue !== undefined) {
            this.disabledControl = changes.control.currentValue.disabled;
            const initialValue = changes.control.currentValue.value;
            this.mask(undefined, initialValue);
        }
    }

    mask(event: any, initialValue?: string) {
        const initValue = initialValue;
        if (this.maskType !== undefined) {
            switch (this.maskType.type) {
                case 'money':
                    if (initValue !== undefined && initValue !== '') {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskMoney(undefined, initValue));
                    } else {
                        const value = this.utilsFunctions.validateMaskMoney(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;
            }
        }
    }

    focusOut(event) {
        const value = event.target.value;
        this.focusOutEvent.emit(this.utilsFunctions.getValueFromMaskMoney(value));
    }

    get f() { return this.formGroup; }

}
