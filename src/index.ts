import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import connect from './connect';
// import { UsersResolver } from './resolvers/UsersResolver';
import { HelloWorldResolver } from './resolvers/HelloWordResolver';
import { FiveResolver } from './resolvers/FiveResolver';

const port: number = 3000;

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloWorldResolver,
        FiveResolver,
        // UsersResolver
      ]
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  const db = 'mongodb://localhost:27017/local'
  connect({ db });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

})();