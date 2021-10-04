const Engineer = require('../lib/engineer');

test('Creates New Engineer Object', () => {
    const newEngineer = new Engineer();
    expect(typeof(newEngineer)).toBe('object');
});

test('Create a New Name', () => {
    const name = ('Lee')
    const newEngineer = new Engineer(name);
    expect(newEngineer.name).toBe(name);
})