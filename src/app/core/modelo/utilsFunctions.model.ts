import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsFunctions {

    public validateMaskMoney(event?: any, valueText?: string) {
        var expreg = /^([0-9])*$/; 
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if ((event != undefined && (expreg.test(value.substring(lengthValue - 1, lengthValue)) || event.key == 'Backspace')) || (valueText != undefined && expreg.test(valueText))) {
            let initialValue = value.replace(" ", "").replace("$", "").split(".").join("");
            initialValue = this.validateRegValue(expreg, value);
            let lengthValue = initialValue.length;
            let finalValue = "";
            let cont = 1;
            for (let i = lengthValue; i > 0; i--) {
                finalValue = initialValue.substring(i - 1, i) + finalValue;
                if (cont <= 3) {
                    if (cont == 3 && (i > 1)) {
                        finalValue = "." + finalValue;
                        cont = 1;
                    }
                    else {
                        cont++;
                    }
                }
            }
            finalValue = finalValue == "" ? finalValue : "$ " + finalValue;
            if (event != undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 2 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
                if (event != undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskMoney(event);
                }
            }

            if (event != undefined) {
                event.target.value = finalValue;
            }

            return finalValue;
        }
    }

    public getValueFromMaskMoney(valueMaskMoney: string) {
        let value = valueMaskMoney.replace(" ", "").replace("$", "").split(".").join("");
        return value;
    }


    // Función encargada de validar la expresión regular en el value caracter por caracter
    private validateRegValue(expreg: RegExp, value: string) {
        let lengthValue = value.length;
        let finalValue = "";
        for (let i = 0; i < lengthValue; i++) {
            if (expreg.test(value.substring(i, i + 1))) {
                finalValue = finalValue + value.substring(i, i + 1);
            }
        }

        return finalValue;
    }
}