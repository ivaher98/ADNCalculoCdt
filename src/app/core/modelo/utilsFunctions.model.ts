import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsFunctions {

    public validateMaskMoney(event?: any, valueText?: string) {
        const expreg = /^([0-9])*$/;
        const value = valueText !== undefined ? valueText : (event !== undefined ? event.target.value : '');
        const lengthValue = value.length;
        if ((event !== undefined && (expreg.test(value.substring(lengthValue - 1, lengthValue)) || event.key === 'Backspace')) ||
            (valueText !== undefined && expreg.test(valueText))) {
            let initialValue = value.replace(' ', '').replace('$', '').split('.').join('');
            initialValue = this.validateRegValue(expreg, value);
            const initialLengthValue = initialValue.length;
            let finalValue = '';
            let cont = 1;
            for (let i = initialLengthValue; i > 0; i--) {
                finalValue = initialValue.substring(i - 1, i) + finalValue;
                if (cont <= 3) {
                    if (cont === 3 && (i > 1)) {
                        finalValue = '.' + finalValue;
                        cont = 1;
                    }
                    else {
                        cont++;
                    }
                }
            }
            finalValue = finalValue === '' ? finalValue : '$ ' + finalValue;
            if (event !== undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        } else {
            const valueLength = value.length;
            let finalValue;
            if (valueLength <= 2 || valueText !== undefined) {
                finalValue = '';
            } else {
                finalValue = value.substring(0, valueLength - 1);
                if (event !== undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskMoney(event);
                }
            }

            if (event !== undefined) {
                event.target.value = finalValue;
            }

            return finalValue;
        }
    }

    public getValueFromMaskMoney(valueMaskMoney: string) {
        return valueMaskMoney.replace(' ', '').replace('$', '').split('.').join('');
    }

    private validateRegValue(expreg: RegExp, value: string) {
        const lengthValue = value.length;
        let finalValue = '';
        for (let i = 0; i < lengthValue; i++) {
            if (expreg.test(value.substring(i, i + 1))) {
                finalValue = finalValue + value.substring(i, i + 1);
            }
        }

        return finalValue;
    }
}
