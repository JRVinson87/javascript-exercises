const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for (let i = num1 + 1; i <= num2; i++) {
        num1 += i;
    }
    return num1;
};

// Do not edit below this line
module.exports = sumAll;
