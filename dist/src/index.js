"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const connect_1 = __importDefault(require("./connect"));
// import { UsersResolver } from './resolvers/UsersResolver';
const HelloWordResolver_1 = require("./resolvers/HelloWordResolver");
const FiveResolver_1 = require("./resolvers/FiveResolver");
const port = 3000;
(async () => {
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [
                HelloWordResolver_1.HelloWorldResolver,
                FiveResolver_1.FiveResolver,
                // UsersResolver
            ]
        }),
        context: ({ req, res }) => ({ req, res })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    const db = 'mongodb://localhost:27017/local';
    connect_1.default({ db });
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})();
//# sourceMappingURL=index.js.map