import * as Issues from '../schemas/Issue';
import * as Label from '../schemas/label';
import * as Status from '../schemas/StatusColumn';
import {buildSchema} from 'graphql';
import * as server from 'express';
import { Schema } from 'mongoose';

const schemas = [Issues,Label,Status];

const types=[];
const queries=[];
const mutations=[];
const inputs=[];
const roots=[];

schemas.forEach(schema=>{
  types.push(schema.type);
  queries.push(schema.query);
  mutations.push(schema.mutation);
  inputs.push(schema.input);
  roots.push(schema.root);
})

export default class GraphQLSchemaBuilder{
  public schema: Object;
  public root: Object;
  public router: server.Router;

  constructor(){
    this.schema = buildSchema(`
      ${inputs}
      type Query {
        ${queries}
      }
      type Mutation {
        ${mutations}
      }
      ${types}
    `);
    this.root = Object.assign({},...roots);
    this.router = server.Router();
    }
  }
  