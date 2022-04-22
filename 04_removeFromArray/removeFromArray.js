const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
        let temp = args[i];
        if (arr.includes(temp)) {
            temp = arr.indexOf(temp);
            arr.splice(temp, 1);
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
