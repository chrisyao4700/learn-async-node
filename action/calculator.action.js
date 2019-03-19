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

    static calChickenBunny(heads_input, legs_input) {
        try {

            const heads = Number(heads_input);
            const legs = Number(legs_input);

            let bunny = (legs - (heads * 2)) / 2;
            let chicken = heads - bunny;

            return {bunny, chicken, heads, legs};

        } catch (e) {
            throw e;
        }
    }


    static createChickenBunny(chicken_count, bunny_count) {
        try {
            const chicken = Number(chicken_count);
            const bunny = Number(bunny_count);

            const heads = chicken + bunny;
            const legs = (chicken * 2) + (bunny * 4);


            return {chicken, bunny, heads, legs};

        } catch (e) {
            throw e;
        }
    }

}

module.exports = CalculatorAction;