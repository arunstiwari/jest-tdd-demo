const axios = require('axios');

const UsersService = require('./users.service');
jest.mock("axios");
// actual integration
// test('userservice should return all users', () => {
//     const usersService = new UsersService();
//     const users = [{name: 'Ram'}];
//     const resp = {data: users};

//     return usersService.allUsers().then(data => {
//         expect(data).toEqual(users);
//     })
// })

// mock integration

test('should return all users using mocked data', () => {
    
    const users = [{name: 'Ram'}];
    const resp = {data: users};
    // axios.get.mockResolvedValue(resp);

    axios.get.mockImplementationOnce(() => Promise.resolve(resp));

    const usersService = new UsersService();
   

    return usersService.allUsers().then(data => {
        expect(data).toEqual(users);
    })
})

test('should return all users using mocked data with async', async () => {
    
    const users = [{name: 'Ram'}];
    const resp = {data: users};
    // axios.get.mockResolvedValue(resp);

    axios.get.mockImplementationOnce(() => Promise.resolve(resp));

    const usersService = new UsersService();
   
    const data = await usersService.allUsers();
    expect(data).toEqual(users);
})
