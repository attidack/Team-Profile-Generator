const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Jon', 1, 'jon@test.com', 800000000);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jon', 1, 'jon@test.com', 800000000);

    expect(manager.getRole()).toEqual("Manager");
}); 