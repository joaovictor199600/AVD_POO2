"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(request, response) {
    var user = CreateUser_1.createUser({
        name: 'Joaovictor',
        email: 'joaovictor1860@gmail.com',
        password: '121019'
    });
    console.log(user.email, user.name);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
