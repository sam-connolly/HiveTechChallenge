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
exports.FiveResolver = void 0;
// import { Query } from 'mongoose';
const type_graphql_1 = require("type-graphql");
const Five_1 = __importDefault(require("../models/Five"));
let FiveType = class FiveType {
};
__decorate([
    type_graphql_1.Field(() => Number)
], FiveType.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], FiveType.prototype, "sender", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], FiveType.prototype, "reciever", void 0);
__decorate([
    type_graphql_1.Field(() => String)
], FiveType.prototype, "content", void 0);
FiveType = __decorate([
    type_graphql_1.ObjectType()
], FiveType);
let FiveResolver = class FiveResolver {
    async createFive(sender, reciever, content) {
        const five = new Five_1.default({ sender: sender, reciever: reciever, content: content });
        await five.save().then(() => console.log(`New Five: ${five}`));
        return five;
    }
    async fives(sender, reciever) {
        let fives = null;
        if (sender !== null) {
            fives = await Five_1.default.find({ sender: sender });
        }
        else if (reciever !== null) {
            fives = await Five_1.default.find({ reciever: reciever });
        }
        else {
            fives = await Five_1.default.find();
        }
        console.log(fives);
        return fives;
    }
};
__decorate([
    type_graphql_1.Mutation(() => FiveType),
    __param(0, type_graphql_1.Arg('sender', () => String)),
    __param(1, type_graphql_1.Arg('reciever', () => String)),
    __param(2, type_graphql_1.Arg('content', () => String))
], FiveResolver.prototype, "createFive", null);
__decorate([
    type_graphql_1.Query(() => [FiveType]),
    __param(0, type_graphql_1.Arg('sender', () => String)),
    __param(1, type_graphql_1.Arg('reciever', () => String))
], FiveResolver.prototype, "fives", null);
FiveResolver = __decorate([
    type_graphql_1.Resolver()
], FiveResolver);
exports.FiveResolver = FiveResolver;
//# sourceMappingURL=FiveResolver.js.map