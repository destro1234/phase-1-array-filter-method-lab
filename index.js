// Code your solution here
const findMatching = function (drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

const fuzzyMatch = function (drivers, name) {
    return drivers.filter(function (driver) {
        return driver.slice(0,2) == name.slice(0,2);
    }
    )
}

const matchName = function (drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name;
    })
    
}