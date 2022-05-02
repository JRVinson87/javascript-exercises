const palindromes = function (str) {
    // Clean out all non alpha characters.
    let cleaned = /[\W]/gi;
    let forward = str.toLowerCase().replace(cleaned, "");
    let backward = forward.split('').reverse().join('');
    // console.log(forward);
    // console.log(backward);
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
