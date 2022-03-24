import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-range',
    templateUrl: './input-range.component.html',
    styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnChanges {
    @Input() isValid: boolean;
    @Input() title: string;
    @Input() control: FormControl;
    @Input() errorText: string;
    @Input() controlName: string;
    @Input() formGroup: FormGroup;
    @Input() minValue: number;
    @Input() maxValue: number;
    @Input() stepValue: number;
    @Input() initValue: number;
    @Output() selectedEvent = new EventEmitter<string>();
    details: string;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if ((changes.control !== undefined || this.control !== undefined) && changes.initValue !== undefined) {
            const initialValue = changes.initValue.currentValue;
            if (this.control !== undefined) {
                setTimeout(() => {
                    this.control.setValue(initialValue);
                    this.changeRange(initialValue, true);
                }, 100);
            }

        }
    }

    get f() { return this.formGroup; }

    private changeRange(value: number, isInitialValue: boolean) {
        const actStep = value / this.stepValue - 1;
        const fullRange = (this.maxValue / this.stepValue) - 1;
        let percentageGradient;
        let marginLeft;
        let thirdpart = 3;
        let fourteen = 14;
        if ((this.maxValue - value) * 2 <= this.maxValue) {
            percentageGradient = (97 / fullRange) * actStep;
            marginLeft = percentageGradient - fourteen;
        } else {
            if ((fullRange + 1 > 5) && value === (this.stepValue * 2)) {
                percentageGradient = (128 / fullRange) * actStep;
                marginLeft = percentageGradient - thirdpart;
            } else if ((fullRange + 1 > 5) && value === (this.stepValue * 3)) {
                percentageGradient = (115 / fullRange) * actStep;
                marginLeft = percentageGradient - thirdpart;
            } else {
                percentageGradient = (107 / fullRange) * actStep;
                marginLeft = percentageGradient - thirdpart;
            }
        }
        const inp = document.getElementById(this.controlName);
        inp.style.background = 'linear-gradient(to right, rgb(142, 228, 115) 0%, rgb(142, 228, 115)' + percentageGradient +
            '%, rgb(224, 224, 224) ' + percentageGradient + '%, rgb(224, 224, 224) 100%)';
        this.details = String(value);
        document.getElementById('details').style.marginLeft = ` ${marginLeft}% `;

        if (!isInitialValue) {
            this.selectedEvent.emit(String(value));
        }
    }

    onChangeValue(event: any) {
        this.changeRange(event.target.value, false);
    }
}
