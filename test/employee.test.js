const Employee = require('../lib/employee');

test('Creates New Employee Object', () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object');
});

test('Create a New Name', () => {
    const name = ('Courtney')
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})
