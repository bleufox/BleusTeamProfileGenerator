const Intern = require('../lib/intern');

test('Creates New Employee Object', () => {
    const newIntern = new Intern();
    expect(typeof(newIntern)).toBe('object');
});

test('Create a New Name', () => {
    const name = ('Omar')
    const newIntern = new Intern(name);
    expect(newIntern.name).toBe(name);
})
