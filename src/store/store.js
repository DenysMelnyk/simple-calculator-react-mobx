import {action, makeObservable, observable} from "mobx";

export const buttons = [
    {
        id: 1,
        type: 'clearAction',
        value: 'C'
    },
    {
        id: 2,
        type: 'calcAction',
        value: '%'
    },
    {
        id: 3,
        type: 'calcAction',
        value: '+/-'
    },
    {
        id: 4,
        type: 'calcAction',
        value: '/'
    },
    {
        id: 5,
        type: 'numbers',
        value: '7'
    },
    {
        id: 6,
        type: 'numbers',
        value: '8'
    },
    {
        id: 7,
        type: 'numbers',
        value: '9'
    },
    {
        id: 8,
        type: 'calcAction',
        value: '*'
    },
    {
        id: 9,
        type: 'numbers',
        value: '4'
    },
    {
        id: 10,
        type: 'numbers',
        value: '5'
    },
    {
        id: 11,
        type: 'numbers',
        value: '6'
    },
    {
        id: 12,
        type: 'calcAction',
        value: '-'
    },
    {
        id: 13,
        type: 'numbers',
        value: '1'
    },
    {
        id: 14,
        type: 'numbers',
        value: '2'
    },
    {
        id: 15,
        type: 'numbers',
        value: '3'
    },
    {
        id: 16,
        type: 'calcAction',
        value: '+'
    },
    {
        id: 17,
        type: 'numberZero',
        value: '0'
    },
    {
        id: 18,
        type: 'numbers',
        value: '.'
    },
    {
        id: 19,
        type: 'calcAction',
        value: '='
    },
];

class CalculatorStore {
    currentValue = '';
    firstNumber = 0;
    signValue = '+';
    operationSign = '+';
    result = 0;

    toggleValueSign(){
        const innerSignChangeAction = innerSign => {
            this.currentValue = -1 * this.currentValue;
            this.signValue = innerSign;
        }
        if(!this.currentValue){
            this.currentValue = this.result;
            this.result = 0;
        }
        if(this.signValue === '+'){
            innerSignChangeAction('-');
        } else {
            innerSignChangeAction('+');
        }
    }

    calcOperation(a, b, operator) {
        switch (operator) {
            case '+':
                this.signValue = '+';
                this.result = a + b;
                break
            case '-':
                this.signValue = '-';
                this.result = a - b;
                break
            case '*':
                this.signValue = '*';
                this.result = a * b;
                if(!b){
                    this.result = a * 1;
                }
                break
            case '/':
                this.signValue = '/';
                this.result = Number(a * (1 / b)).toFixed(2);
                if(!b){
                    this.result = a / 1;
                }
                break
            case '%':
                this.result = a * (b * 0.01);
                break;
            default:
                this.result = 0;
        }
    }

    calcHelper(calcOperator){
        this.operationSign = calcOperator;
        if(!this.result){
            this.result = this.result + Number(this.currentValue);
            this.currentValue = '';
        } else {
            this.firstNumber = Number(this.currentValue);
            this.calcOperation(this.result, this.firstNumber, calcOperator);
        }
        this.currentValue = '';
    }

    showResult(){
        console.log(this.result, this.operationSign, this.currentValue);
        this.calcHelper(this.operationSign)
    }

    clearStoreToDefault(){
        this.currentValue = '';
        this.signValue = '';
        this.firstNumber = 0;
        this.result = 0;
        this.buffer = 0;
    }

    outputData(value) {
        switch (value){
            case '+':
                return this.calcHelper('+');
            case '-':
                return this.calcHelper('-');
            case '*':
                return this.calcHelper('*');
            case '/':
                return this.calcHelper('/');
            case '%':
                return this.calcHelper('%');
            case '=':
                return this.showResult();
            case '+/-':
                return this.toggleValueSign();
            case 'C':
                return this.clearStoreToDefault()
            default:
                this.currentValue = this.currentValue + value;
        }
    }

    constructor() {
        makeObservable(this, {
            currentValue: observable,
            result: observable,
            firstNumber: observable,
            signValue: observable,
            operationSign: observable,
            outputData: action.bound,
            calcOperation: action.bound,
            calcHelper: action.bound,
            clearStoreToDefault: action.bound,
            toggleValueSign: action.bound
        })
    }

}

export default new CalculatorStore();