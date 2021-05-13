import * as Issues from '../schemas/Issue';
import {buildSchema} from 'graphql';
import * as server from 'express';

export default class GraphQLSchemaBuilder{
  public schema: Object
  public root: Object
  public router: server.Router;

  constructor(){
    this.schema = buildSchema(`
      type Query {
        ${Issues.query}
      }
      ${Issues.type}
      type Mutation {
        ${Issues.mutation}
      }
    `);
    this.root = Issues.root;
    this.router = server.Router();
    }
  }
  