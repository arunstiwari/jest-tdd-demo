const axios = require('axios');

class UsersService {

    allUsers = () => {
        // return new Promise(resolve => {
        //     resolve([{name: "Ram"}])
        // })
        return axios.get("http://localhost:3000/users").then(resp => resp.data);
    }
}

module.exports = UsersService;