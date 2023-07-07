// Write your solution in this file!
const employee = {
    name: "Tommy Oliver",
    address: "40 Oak Street",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const anotherEmployee = { ... obj};
    anotherEmployee[key] = value;
    return anotherEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const anotherEmployee = { ...obj };
    delete anotherEmployee[key];
    return anotherEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

destructivelyDeleteFromEmployeeByKey(employee, address);