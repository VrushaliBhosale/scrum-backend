import * as Issues from '../schemas/Issue';
import {buildSchema} from 'graphql';
import * as server from 'express';

export default class GraphQLSchemaBuilder{
  public schema: Object
  public root: Object
  public router: server.Router;

  constructor(){
    this.schema = buildSchema(`
      ${Issues.inputs}
      type Query {
        ${Issues.query}
      }
      type Mutation {
        ${Issues.mutation}
      }
      ${Issues.type}
    `);
    this.root = Issues.root;
    this.router = server.Router();
    }
  }
  