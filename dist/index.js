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
const UsersResolver_1 = require("./resolvers/UsersResolver");
const FiveResolver_1 = require("./resolvers/FiveResolver");
const port = 3000;
(async () => {
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [
                FiveResolver_1.FiveResolver,
                UsersResolver_1.UserResolver
            ]
        }),
        context: ({ req, res }) => ({ req, res })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    const db = 'mongodb+srv://adminUse:adminUser@hivetechchallenge.et0yy.mongodb.net/hive?retryWrites=true&w=majority';
    connect_1.default({ db });
    app.listen(process.env.PORT || port, () => {
        console.log(`Server running on port ${port}`);
    });
})();
//# sourceMappingURL=index.js.map