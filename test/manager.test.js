const Manager = require('../lib/manager');

test('Creates New Manager Object', () => {
    const newManager = new Manager();
    expect(typeof(newManager)).toBe('object');
});

test('Create a New Name', () => {
    const name = ('Jose')
    const newManager = new Manager(name);
    expect(newManager.name).toBe(name);
})
