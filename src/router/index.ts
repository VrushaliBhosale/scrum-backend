import * as express from 'express';
import TaskRoutes from './TaskRoutes';
var { graphqlHTTP } = require('express-graphql');
import GraphQLSchemaBuilder from './GraphqlSchemaBuilder';
import expressPlayground from 'graphql-playground-middleware-express';

export default class Route{
  /**
   * @param server
   * @returns void
   */
  static init(server:express.Application){
    const router: express.Router = express.Router();

    server.app.use('/_graphql', graphqlHTTP({
      schema: new GraphQLSchemaBuilder().schema,
      rootValue: new GraphQLSchemaBuilder().root,
      graphiql: true,
    }));
    server.app.get('/graphql', expressPlayground({ endpoint: '/_graphql' }))
    // server.app.use('/issues',new TaskRoutes().router);
  }
}
