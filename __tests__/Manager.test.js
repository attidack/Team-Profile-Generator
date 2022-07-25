const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Jon', 34, 'jon@test.com', 54);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jon', 34, 'jon@test.com', 54);

    expect(manager.getRole()).toEqual("Manager");
}); 