import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import connect from './connect';
import { UserResolver } from './resolvers/UsersResolver';
import { FiveResolver } from './resolvers/FiveResolver';

const port: number = 3000;

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        FiveResolver,
        UserResolver
      ]
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  const db = 'mongodb+srv://adminUse:adminUser@hivetechchallenge.et0yy.mongodb.net/hive?retryWrites=true&w=majority'
  connect({ db });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();