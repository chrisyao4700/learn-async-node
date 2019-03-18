const func = require('od-utility');

class CalculatorAction {

    static calTwoNumbers(operator, fir_num, sec_num) {
        try {
            const first_num = Number(fir_num);
            const second_num = Number(sec_num);

            if (!first_num && first_num !== 0) func.throwError('FIRST NUMBER IS NOT A VALID_NUMBER');
            if (!second_num && second_num !== 0) func.throwError('SECOND NUMBER IS NOT A VALID_NUMBER');

            let result = NaN;

            if (operator === '+') {
                result = first_num + second_num;
            }
            if (operator === '-') {
                result = first_num - second_num;
            }
            if (operator === '*') {
                result = first_num * second_num;
            }
            if (operator === '/') {
                result = first_num / second_num;
            }
            if (operator === '^') {
                result = Math.pow(first_num, second_num);
            }
            if (operator === '%') {
                result = first_num % second_num;
            }

            return {first_num, second_num, result};
        } catch (e) {
            throw e;
        }
    }

    static calculateNumberWithLongTime(operator, fir_num, sec_num, handler) {

        const first_num = Number(fir_num);
        const second_num = Number(sec_num);

        if (!first_num && first_num !== 0) return handler('FIRST NUMBER IS NOT A VALID_NUMBER');
        if (!second_num && second_num !== 0) return handler('SECOND NUMBER IS NOT A VALID_NUMBER');

        let result = NaN;
        if (operator === '+') result = first_num + second_num;
        if (operator === '-') result = first_num - second_num;
        if (operator === '*') result = first_num * second_num;
        if (operator === '/') result = first_num / second_num;
        if (operator === '^') result = Math.pow(first_num, second_num);
        if (operator === '%') result = first_num % second_num;

        handler(null, {first_num, second_num, result});
    }

}

module.exports = CalculatorAction;