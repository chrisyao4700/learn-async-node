const express = require('express');
const router = express.Router();

const func = require('od-utility');

const CalculatorAction = require('../action/calculator.action');


const {calculateNumberWithCallback, calculateNumberWithPromise} = require('../action/calculator.obj');

/* GET home page. */
router.get('/', (req, res, next) => {

    const resBody = {
        status: true,
        message: 'THANK YOU FOR REACHING CHRIS-NTH-EXPRESS ROOT'
    };

    res.json(resBody);

});


router.post('/cal/callback', (req, res, next) => {
    const {operator, first_num, second_num} = req.body;

    calculateNumberWithCallback(operator, first_num, second_num, (err, result) => {
        if (err) return next(err);
        const resBody = func.configSuccess(
            {operator, ...result}
        );
        res.json(resBody);
    });
});


router.post('/cal/promise', (req, res, next) => {
    const {operator, first_num, second_num} = req.body;

    calculateNumberWithPromise(operator, first_num, second_num)
        .then(result => {
            const resBody = func.configSuccess(
                {operator, ...result}
            );
            res.json(resBody);
        })
        .catch(err => next(err));
});

router.post('/cal/async', async (req, res, next) => {
    try {
        const {operator, first_num, second_num} = req.body;

        /* FIRST VERSION OUT CAL */
        // let result;
        // if (operator === '+') {
        //     result = first_num + second_num;
        // }
        //
        // if (operator === '-') {
        //     result = first_num - second_num;
        // }


        const result = CalculatorAction.calTwoNumbers(operator, first_num, second_num);
        const resBody = func.configSuccess(
            {operator, ...result}, 'RESULT CALCULATED'
        );
        res.json(resBody);


        /* SAD VERSION OF RESPONSE */
        // res.json({
        //     status: true,
        //     message: 'RESULT CALCULATED',
        //     payload: {
        //         operator, first_num, second_num, result
        //     }
        // });

    } catch (e) {
        next(e);
    }
});

router.post('/minus', async (req, res, next) => {
    try {
        const {first_num, second_num} = req.body;
        const result = CalculatorAction.calTwoNumbers('-', first_num, second_num);
        const resBody = func.configSuccess({operator: '-', ...result});
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/multiply', async (req, res, next) => {
    try {
        const {first_num, second_num} = req.body;
        const result = CalculatorAction.calTwoNumbers('*', first_num, second_num);
        const resBody = func.configSuccess(
            {operator: '*', ...result}
        );
        res.json(resBody);
    } catch (e) {

        next(e);
    }
});

router.post('/chickenbunny', async (req, res, next) => {
    try {
        const {heads, legs} = req.body;

        const result = await CalculatorAction.calChickenBunny(heads, legs);
        const resBody = func.configSuccess(
            result
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/create/chickenbunny', async (req, res, next) => {
    try {
        const {chicken, bunny} = req.body;

        const result = await CalculatorAction.createChickenBunny(chicken, bunny);

        const resBody = func.configSuccess(
            result
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;
