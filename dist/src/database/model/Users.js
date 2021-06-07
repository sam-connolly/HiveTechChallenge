"use strict";
let mongoose = require('mongoose');
// interface IUser {
//   firstName: string;
//   surname: string;
//   username: string;
// }
const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requires: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        requires: true
    }
});
const Users = mongoose.model('Users', usersSchema);
module.exports = Users;
//# sourceMappingURL=Users.js.map