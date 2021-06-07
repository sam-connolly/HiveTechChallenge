"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = __importDefault(require("../models/User"));
let UserType = class UserType {
};
__decorate([
    type_graphql_1.Field(() => Number)
], UserType.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], UserType.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], UserType.prototype, "surname", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], UserType.prototype, "username", void 0);
UserType = __decorate([
    type_graphql_1.ObjectType()
], UserType);
let UserResolver = class UserResolver {
    async createUser(firstName, surname, username) {
        const user = new User_1.default({ firstName: firstName, surname: surname, username: username });
        await user.save().then(() => console.log(`New user: ${user}`));
        return user;
    }
    async users(username) {
        let users = null;
        console.log(`users: ${users}`);
        console.log(`username: ${username}`);
        if (username !== null && username !== undefined) {
            users = await User_1.default.find({ username: username });
        }
        else {
            users = await User_1.default.find();
        }
        console.log(users);
        return users;
    }
};
__decorate([
    type_graphql_1.Mutation(() => UserType),
    __param(0, type_graphql_1.Arg('firstName', () => String)),
    __param(1, type_graphql_1.Arg('surname', () => String)),
    __param(2, type_graphql_1.Arg('username', () => String))
], UserResolver.prototype, "createUser", null);
__decorate([
    type_graphql_1.Query(() => [UserType]),
    __param(0, type_graphql_1.Arg('username', () => String, { nullable: true }))
], UserResolver.prototype, "users", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UsersResolver.js.map