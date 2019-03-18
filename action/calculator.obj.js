const calculateNumberWithCallback = (operator, fir_num, sec_num, handler) => {

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

    return handler(null, {first_num, second_num, result});
};


const calculateNumberWithPromise = (operator, fir_num, sec_num) => {

    return new Promise((resolve, reject) => {
        const first_num = Number(fir_num);
        const second_num = Number(sec_num);

        if (!first_num && first_num !== 0) return reject('FIRST NUMBER IS NOT A VALID_NUMBER');
        if (!second_num && second_num !== 0) return reject('SECOND NUMBER IS NOT A VALID_NUMBER');

        let result = NaN;
        if (operator === '+') result = first_num + second_num;
        if (operator === '-') result = first_num - second_num;
        if (operator === '*') result = first_num * second_num;
        if (operator === '/') result = first_num / second_num;
        if (operator === '^') result = Math.pow(first_num, second_num);
        if (operator === '%') result = first_num % second_num;

        resolve({first_num, second_num, result});
    });

};

module.exports = {calculateNumberWithCallback, calculateNumberWithPromise};