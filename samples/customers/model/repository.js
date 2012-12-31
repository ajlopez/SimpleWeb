
var customers = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Microsoft' }
];

var maxid = 3;

exports.getList = function () {
    return customers;
};

exports.getById = function (id) {
    var customer;

    for (var n in customers) {
        customer = customers[n];
        if (customer.id == id)
            return customer;
    }

    return null;
};

exports.add = function (customer) {
    maxid++;
    customer.id = maxid;
    customers.push(customer);
};

exports.update = function (customer) {
};

exports.removeById = function (id) {
    var customer;

    for (var n in customers) {
        customer = customers[n];
        if (customer.id == id) {
            customers.splice(n, 1);
            return;
        }
    }
};
