const findTheOldest = function(obj) {
    return obj.reduce((a, b) => {
        if(!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }
        
        const previous = (a.yearOfDeath - a.yearOfBirth);
        const current = (b.yearOfDeath - b.yearOfBirth);
        return previous > current ? a : b;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
